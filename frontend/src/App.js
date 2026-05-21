import React from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Dashboard />
    </div>
  );
}

export default App;