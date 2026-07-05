# 🌱 Smart Agriculture Irrigation System

A full-stack Smart Agriculture Irrigation Monitoring System that continuously monitors environmental conditions and determines whether irrigation is required based on soil moisture levels. The system provides a real-time dashboard for farmers to monitor sensor readings and automate irrigation decisions.

---

## 📖 Overview

Efficient water management is one of the biggest challenges in modern agriculture. This project demonstrates an IoT-inspired smart irrigation solution that collects environmental data, stores it in a database, analyzes soil moisture, and displays the latest readings through a web dashboard.

Currently, sensor data is generated using a simulator, making the project suitable for learning, development, testing, and future integration with real IoT devices such as ESP32, NodeMCU, or Arduino.

---

## ✨ Features

* 🌡 Real-time Temperature Monitoring
* 💧 Humidity Monitoring
* 🌱 Soil Moisture Monitoring
* 🚿 Automatic Irrigation Decision
* 📊 Live Dashboard
* 🔄 Automatic Sensor Data Updates
* 🗄 MongoDB Data Storage
* ⚡ REST API using Express.js
* 🧪 Sensor Data Simulator

---

## 🛠 Tech Stack

### Frontend

* React.js
* Axios
* CSS

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

### Development Tools

* Visual Studio Code
* Git & GitHub
* MongoDB Compass

---

## 📂 Project Structure

smart-agriculture-irrigation/
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── App.js
│   │   └── App.css
│   └── package.json
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   ├── simulator.js
│   └── package.json
│
└── README.md

---

## ⚙ How It Works

1. The sensor simulator generates:

   * Temperature
   * Humidity
   * Soil Moisture

2. The generated values are sent to the backend every **5 seconds**.

3. The backend:

   * Receives the sensor data
   * Calculates whether irrigation is required
   * Stores the data in MongoDB

4. The React frontend requests the latest sensor data from the backend.

5. The dashboard displays:

   * Temperature
   * Humidity
   * Soil Moisture
   * Irrigation Status

---

## 🚿 Irrigation Logic

The irrigation decision is based on the soil moisture value.

```
If Soil Moisture < 40%

    Water Required

Else

    Soil is Good
```

This threshold can be modified easily according to different crop requirements.

---

## 📡 API Endpoints

### Store Sensor Data

```
POST /api/sensors/data
```

Example Request

```json
{
  "temperature": 29,
  "humidity": 68,
  "soilMoisture": 35
}
```

Example Response

```json
{
  "message": "Data saved",
  "irrigationNeeded": true
}
```

---

### Get Latest Sensor Data

```
GET /api/sensors/latest
```

Example Response

```json
{
  "temperature": 29,
  "humidity": 68,
  "soilMoisture": 35,
  "irrigationNeeded": true,
  "timestamp": "2026-07-05T10:00:00Z"
}
```

---

## 🚀 Installation

### Clone the Repository

```bash
git clone https://github.com/Santhi-ya/smart-agriculture-irrigation.git
```

---

### Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file.

```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

Start the backend server.

```bash
npm start
```

---

### Frontend Setup

```bash
cd frontend
npm install
npm start
```

---

### Run Sensor Simulator

Open another terminal.

```bash
cd backend
node simulator.js
```

The simulator automatically sends sensor readings every 5 seconds.

---

## 💾 Database Schema

| Field            | Type    |
| ---------------- | ------- |
| temperature      | Number  |
| humidity         | Number  |
| soilMoisture     | Number  |
| irrigationNeeded | Boolean |
| timestamp        | Date    |

---

## 📸 Dashboard Features

The dashboard displays:

* Current Temperature
* Current Humidity
* Current Soil Moisture
* Water Required / Soil is Good status
* Automatically refreshed sensor readings

---

## 🔮 Future Enhancements

* ESP32 / NodeMCU integration
* Real soil moisture sensor
* Automatic water pump control using relay module
* Historical data visualization with charts
* Weather API integration
* SMS/Email notifications
* Mobile application
* Farmer authentication
* Crop-specific irrigation recommendations
* Machine Learning-based irrigation prediction

---

## 🎯 Learning Outcomes

This project demonstrates:

* Full Stack Web Development
* REST API Development
* MongoDB Integration
* React State Management
* Backend Data Processing
* IoT Simulation
* Real-Time Dashboard Development

---

## 🤝 Contributing

Contributions are welcome.

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push the branch
5. Open a Pull Request

---

## 📄 License

This project is intended for educational and learning purposes. Feel free to use, modify, and improve it for academic or personal projects.

---

## 👨‍💻 Authors

Developed as a Smart Agriculture Monitoring project demonstrating IoT-based irrigation automation using the MERN technology stack.
