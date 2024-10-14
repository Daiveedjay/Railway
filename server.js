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
