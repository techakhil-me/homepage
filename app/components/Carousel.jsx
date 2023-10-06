import CarouselItem from "./CarouselItem";
import Marquee from "react-fast-marquee";
import { EventsDetails } from "./Events";
function Carousel() {
  return (
    <div className="w-full pt-40 flex-col justify-center items-start gap-10 inline-flex ">
      <div className="w-full flex-col justify-end items-end gap-2.5 flex">
        <div className="text-right text-white text-opacity-90 text-4xl font-bold font-['Chakra Petch'] uppercase leading-10 tracking-widest">
          HIghlights
        </div>
        <div className="w-96 text-right text-stone-300 text-base font-normal font-['Chakra Petch'] uppercase leading-normal">
          Join us on a dynamic journey, embracing emerging{" "}
        </div>
      </div>
      <div className="w-[98vw] self-center overflow-hidden">
        <Marquee>
          {EventsDetails.map(({ img, date }, i) => (
            <CarouselItem img={img} date={date} />
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export default Carousel;
