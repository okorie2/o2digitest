import React from "react";

export default function CarouselItem({children, width}) {
    return (
        <div className='carousel-item' style={{width:width}}>
            {children}
        </div>
    )
}

export default function Carousel({ children }) {
  return (
    <div className="carousel">
      <div className="inner" style={{ transform: "translateX(-0%)" }}>
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: "100%" });
        })}
      </div>
    </div>
  );
}
