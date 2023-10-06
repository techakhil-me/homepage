import React from "react";

export default function CarouselItem({ img, date }) {
  return (
    <div className="overflow-hidden shrink-0 w-96 flex justify-center pb-10">
      <div className=" w-80 h-48 relative">
        <img
          className="h-full w-full object-cover object-left-top"
          src={img}
          alt=""
        />
        <div className="w-40 absolute p-2.5 -bottom-4 -left-4 bg-white bg-opacity-10 border border-stone-300 backdrop-blur-md flex-col justify-center items-center gap-1 inline-flex">
          <div className="text-center text-white text-opacity-80 text-sm font-normal font-['Chakra Petch'] uppercase leading-none">
            {date}
          </div>
        </div>
      </div>
    </div>
  );
}
