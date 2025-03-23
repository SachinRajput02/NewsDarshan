import "dotenv/config";
import express from "express";
import axios from "axios";
import cors from "cors";
import { connectDB } from "./config/db.js";

import newsApiRouter from "./routes/newsApiRoute.js";


const app = express();
const PORT = process.env.PORT || 5000;


// middleware
app.use(express.json());
// Enable CORS to allow frontend requests
app.use(cors());

// db conection
connectDB();

//api endpoints
app.use("/api/news",newsApiRouter);

// // Route to fetch news from NewsAPI
// app.get("/news", async (req, res) => {
//   try {
//     const response = await axios.get(
//       `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_NEWS_API}`
//     );
//     res.json(response.data);
//     console.log(process.env.REACT_APP_NEWS_API);
//   } catch (error) {
//     res.status(error.response?.status || 500).json({ error: error.message });
//   }
// });

app.get("/", (req, res) => {
  res.send("API is running....");
});

// Start the server
app.listen(PORT, () => console.log(`Server Started on http://localhost:${PORT}`));
