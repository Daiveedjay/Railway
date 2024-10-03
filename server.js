import express from "express";
import { get } from "axios";

const app = express();

// Simple route to fetch and return a random joke
app.get("/random-joke", async (req, res) => {
  try {
    // API call to get a random joke
    const response = await get(
      "https://official-joke-api.appspot.com/random_joke"
    );

    res.status(200).json({
      success: true,
      joke: response.data,
    });
  } catch (error) {
    console.error("Error fetching joke:", error);
    res.status(500).json({
      success: false,
      message: "Error fetching joke",
    });
  }
});

// Server listens on the environment-defined port (default 3000)
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
