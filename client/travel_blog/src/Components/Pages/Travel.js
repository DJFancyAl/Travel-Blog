import React from "react";
import "../../css_old/style.css";

const Travel = () => {
  const milestoneTips = [
    "Pack light to avoid excess baggage fees",
    "Research local customs and traditions before visiting",
    "Carry a universal travel adapter for charging devices",
    "Always keep a copy of important travel documents",
    "Stay hydrated and drink bottled water in unfamiliar places",
  ];

  return (
    <div>
      <h1>Milestone traveler Tips</h1>
      <ul>
        {milestoneTips.map((tip, index) => (
          <li key={index}>{tip}</li>
        ))}
      </ul>
    </div>
  );
};

export default Travel;
