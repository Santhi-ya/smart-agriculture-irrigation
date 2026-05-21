import React from "react";

function SensorCard({ title, value, unit }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <h1>
        {value} {unit}
      </h1>
    </div>
  );
}

export default SensorCard;