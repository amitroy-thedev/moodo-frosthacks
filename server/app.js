import express from "express";
import cors from "cors";

const app = express();

// middleware
app.use(express.json());
app.use(cors());

// health check route
app.get("/api/health", (req, res) => {
  res.status(200).json({ message: "Server is running" });
});

export default app;
