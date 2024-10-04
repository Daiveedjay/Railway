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
// app.get("/warmup", (_, res) =>
//   res.status(200).send("Brewing coffee with Railway... 🍵")
// );

// // Ping the warm-up route when cron job runs
// const pingWarmup = async () => {
//   try {
//     await get("https://serverless-railway.up.railway.app/warmup");
//     console.log("Warm-up ping successful");
//   } catch (error) {
//     console.error("Error pinging warm-up:", error);
//   }
// };

// // Run the pingWarmup function on server start
// pingWarmup();

// const scheduledTaskHandler = async () => {
//   try {
//     console.log("Running scheduled task at:", new Date());

//     // Fetch data from your random joke endpoint
//     const response = await axios.get(
//       "https://serverless-railway.up.railway.app/railway-random-joke"
//     );

//     // Log the fetched joke data (or save it to a database)
//     console.log("Fetched joke:", response.data);
//   } catch (error) {
//     console.error("Error running scheduled task:", error);
//   }
// };

// // Trigger the scheduled task manually if needed
// app.get("/run-scheduled-task", async (_, res) => {
//   await scheduledTaskHandler();
//   res.status(200).send("Scheduled task executed");
// });

// // Start the server
// const port = 3000;
// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);

//   // Call the scheduled task handler immediately on server start
//   scheduledTaskHandler();
// });
