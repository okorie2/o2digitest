import React from "react";
import SmBike from "../../Assets/SVGs/SmBike.svg";

export default function SmCard() {
  return (
    <div>
      <div className="sm-card">
        <img src={SmBike} alt="hybrid bikes" />
      </div>
      <p>Hybrid Bikes</p>
    </div>
  );
}
