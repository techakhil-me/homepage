import React from "react";
import { cardDetails } from "./carousel-config";
import CarouselItem from "./CarouselItem";


export default function AutoplayCarousel() {
  return (
     <>
        <div className="h-ighlights">HIGHLIGHTS</div>
        <p className="join-us-on-a-dynamic">
          JOIN US ON A DYNAMIC JOURNEY, EMBRACING EMERGING
        </p>
       
    <div className="carousel-container">
      <div className="carousel-track">
        {Object.keys(cardDetails).map((detailKey) => {
          return (
            <CarouselItem
              imgUrl={cardDetails[detailKey].imgUrl}
              imgTitle={cardDetails[detailKey].title}
            ></CarouselItem>
          );
        })}
      </div>
    </div>
    </>
  );
}