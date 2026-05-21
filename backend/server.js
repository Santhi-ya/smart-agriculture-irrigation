const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");

const sensorRoutes = require("./routes/sensorRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected Successfully");
  })
  .catch((err) => {
    console.log("MongoDB Connection Error:");
    console.log(err);
  });

// Routes
app.use("/api/sensors", sensorRoutes);

// Default Route
app.get("/", (req, res) => {
  res.send("Smart Agriculture Backend Running");
});

// Server Start
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});