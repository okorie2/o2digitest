import React from "react";
import SmBike from "../../Assets/SVGs/SmBike.svg";

export default function SmCard({ title, src, alt, id, cn }) {
  return (
    <div>
      <div className="sm-card" id={id}>
        <img src={src} alt={alt} />
      </div>
      <p id={cn}>{title}</p>
    </div>
  );
}
