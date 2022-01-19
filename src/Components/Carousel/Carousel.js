import React, { useState } from "react";
import Left from "../../Assets/SVGs/left.svg";
import Right from "../../Assets/SVGs/right.svg";
export const CarouselItem = ({ children, width }) => {
  return (
    <div className="carousel-item" style={{ width: width }}>
      {children}
    </div>
  );
};

const Carousel = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = React.Children.count(children) - 1;
    }
    setActiveIndex(newIndex);
  };
  return (
    <div className="carousel ">
      <div
        className="inner"
        style={{ transform: ` translateX(-${activeIndex * 20}%)` }}
      >
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: "40%" });
        })}
      </div>
      <div className="arrows">
        <div
          className="arrow-left"
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          {" "}
          <img src={Left} />
        </div>
        <div
          className="arrow-right"
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          <img src={Right} />
        </div>

        {/* <div className="arrows">
        <div className="arrow-left">
          <img src={Left} />
        </div>

        <div className="arrow-right">
          <img src={Right} />
        </div>
      </div> */}
      </div>
    </div>
  );
};
export default Carousel;
