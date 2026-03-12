import React, { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {

  const [sensorData, setSensorData] = useState(null);

  const fetchData = async () => {
    try {

      const response = await axios.get(
        "http://localhost:5000/api/sensors/latest"
      );

      setSensorData(response.data);

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {

    fetchData();

    const interval = setInterval(fetchData, 5000);

    return () => clearInterval(interval);

  }, []);

  if (!sensorData) {
    return <h2>Loading sensor data...</h2>;
  }

  return (
    <div style={{ padding: "40px" }}>

      <h1>Smart Agriculture Dashboard</h1>

      <h2>Temperature : {sensorData.temperature} °C</h2>

      <h2>Humidity : {sensorData.humidity} %</h2>

      <h2>Soil Moisture : {sensorData.soilMoisture}</h2>

      <h2>
        Irrigation Status :
        {sensorData.irrigationNeeded
          ? " Water Needed"
          : " No Water Needed"}
      </h2>

    </div>
  );
}

export default Dashboard;