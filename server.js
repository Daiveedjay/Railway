const express = require("express");
const { get } = require("axios");

const app = express();

// Route to fetch and return a random joke
app.get("/railway-random-joke", async (_, res) => {
  try {
    // API call to get a random joke
    const response = await get(
      "https://official-joke-api.appspot.com/random_joke"
    );

    res.status(200).json({
      success: true,
      joke: response.data,
    });

    console.log("My Joke", response.data);
  } catch (error) {
    console.error("Error fetching joke:", error);
    res.status(500).json({
      success: false,
      message: "Error fetching joke",
    });
  }
});

// Warm-up route to minimize cold start delays
app.get("/warmup", (_, res) =>
  res.status(200).send("Brewing coffee with Railway... 🍵")
);

// Ping the warm-up route when cron job runs
const pingWarmup = async () => {
  try {
    await get("https://serverless-railway.up.railway.app/warmup");
    console.log("Warm-up ping successful");
  } catch (error) {
    console.error("Error pinging warm-up:", error);
  }
};

// Run the pingWarmup function on server start
pingWarmup();

// Server listens on the environment-defined port (default 3000)
const port = 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
