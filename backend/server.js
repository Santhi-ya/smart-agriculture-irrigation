const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");

const sensorRoutes = require("./routes/sensorRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI);


app.use("/api/sensors",sensorRoutes);

app.listen(PORT,()=>{
  console.log(`Server running on port ${PORT}`);
});