import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";

import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();

//  console.log("MongoDB connection string:", process.env.MONGO_URL);

// const express = require("express");
const app = express();
const PORT = process.env.PORT || 5001;
const __dirname = path.resolve(); // Get the current directory name

// Middleware: is a function that has access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named next.

if (process.env.NODE_ENV !== "production") {
  app.use(
    cors({
      origin: ["http://localhost:5173", "https://your-project.vercel.app"],
    }),
  );
}

// middleware to parse JSON bodies eg: req.body
app.use(express.json());

// custom simple middleware to log incoming requests
// app.use((req,res,next) =>{
//   console.log(`Request Recieved: ${req.method} ${req.url}`);
//   next();
// })
app.use(rateLimiter); // Apply the rate limiter middleware to all routes

app.use("/api/notes", notesRoutes);

// app.use(express.static(path.join(__dirname, "../frontend/dist")));

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "../frontend/dist")));

//   app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
//   });
// }

app.get("/", (req, res) => {
  res.json({
    message: "ThoughtForge API is running 🚀",
  });
});

// what is endpoint? endpoint is the combination of the route(URL) and the method(HTTP method). That let the client identify a specific resource. For example, GET /api/notes is an endpoint. POST /api/notes is another endpoint.
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
