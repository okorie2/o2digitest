import React from "react";
import SmBike from "../../Assets/SVGs/SmBike.svg";

export default function SmCard({ title, src, alt, id }) {
  return (
    <div>
      <div className="sm-card" id={id}>
        <img src={src} alt={alt} />
      </div>
      <p>{title}</p>
    </div>
  );
}
