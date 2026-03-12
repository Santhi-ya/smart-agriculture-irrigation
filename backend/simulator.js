const http = require("http");

setInterval(() => {

  const data = JSON.stringify({
    temperature: Math.floor(Math.random() * 10) + 25,
    humidity: Math.floor(Math.random() * 20) + 50,
    soilMoisture: Math.floor(Math.random() * 100)
  });

  const options = {
    hostname: "localhost",
    port: 5000,
    path: "/api/sensors/data",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Content-Length": data.length
    }
  };

  const req = http.request(options, (res) => {

    res.on("data", (chunk) => {
      console.log("Server response:", chunk.toString());
    });

  });

  req.on("error", (error) => {
    console.error("Error:", error);
  });

  req.write(data);
  req.end();

  console.log("Sensor Data Sent:", data);

}, 5000);