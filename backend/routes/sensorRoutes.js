const express = require("express");
const router = express.Router();

const SensorData = require("../models/SensorData");

function irrigationDecision(soilMoisture){

  const threshold = 40;

  if(soilMoisture < threshold){
    return true;
  }

  return false;
}


router.post("/data", async (req,res)=>{

  const {temperature,humidity,soilMoisture} = req.body;

  const irrigationNeeded = irrigationDecision(soilMoisture);

  const sensor = new SensorData({
    temperature,
    humidity,
    soilMoisture,
    irrigationNeeded
  });

  await sensor.save();

  res.json({
    message:"Data saved",
    irrigationNeeded
  });

});


router.get("/latest", async(req,res)=>{

  const data = await SensorData
  .find()
  .sort({timestamp:-1})
  .limit(1);

  res.json(data[0]);

});

module.exports = router;