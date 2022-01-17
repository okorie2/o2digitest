import React from "react";
import "../../App.css";
import UniEbike from "../../Assets/SVGs/UniEbike.svg";

export default function MdCard() {
  return (
    <div>
      <div className="md-card">
        <p>Universal eBike Kit</p>
        <img src={UniEbike} alt="Universal eBike Kit" />
        <div className="rule"></div>
        <div className="flx">
          <div>
            <p>price</p>
            <p>$750.00</p>
          </div>
          <div>
            <p></p>
            <button type="button">Order</button>
          </div>
        </div>
      </div>
    </div>
  );
}
