import React, { useEffect, useState } from "react";
import axios from "axios";
import SensorCard from "./SensorCard";

function Dashboard() {
  const [sensorData, setSensorData] = useState({
    temperature: 0,
    humidity: 0,
    soilMoisture: 0,
    irrigationNeeded: false,
  });

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/sensors/latest"
      );

      setSensorData(response.data);
    } catch (error) {
      console.log("Error fetching data", error);
    }
  };

  useEffect(() => {
    fetchData();

    const interval = setInterval(() => {
      fetchData();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="dashboard">
      <div className="card-container">
        <SensorCard
          title="Temperature"
          value={sensorData.temperature}
          unit="°C"
        />

        <SensorCard
          title="Humidity"
          value={sensorData.humidity}
          unit="%"
        />
         <SensorCard
          title="Soil Moisture"
          value={sensorData.soilMoisture}
          unit="%"
        />
      </div>

      <div className="status-card">
        <h2>Irrigation Status</h2>

        {sensorData.irrigationNeeded ? (
          <h1 className="on">WATER REQUIRED</h1>
        ) : (
          <h1 className="off">SOIL IS GOOD</h1>
        )}
      </div>
    </div>
  );
}

export default Dashboard;