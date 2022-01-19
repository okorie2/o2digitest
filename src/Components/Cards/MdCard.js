import React from "react";
import "../../App.css";
import UniEbike from "../../Assets/SVGs/UniEbike.svg";
import ButtonHighlight from "../Buttons/ButtonHighlight";

export default function MdCard({ title, price, src }) {
  return (
    <div>
      <div className="md-card">
        <p className="card-title">{title}</p>
        <img src={src} alt="Universal eBike Kit" />
        <div className="rule"></div>
        <div className="flx">
          <div>
            <p>Price</p>
            <p className="card-price">{price}</p>
          </div>
          <div>
            <p></p>
            <ButtonHighlight text={"Order"} />
          </div>
        </div>
      </div>
    </div>
  );
}
