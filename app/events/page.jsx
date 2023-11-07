"use client"; // to import client side only modules

import EventsCard from "../components/EventsCard";
import { Masonry } from "react-masonry";

function page() {
  function show() {}
  return (
    <section className="w-full relative pt-40 flex flex-col gap-20 items-start">
      <div className="w-full sticky top-0 lg:text-left text-center text-white text-opacity-90 text-6xl md:text-8xl lg:text-[200px] font-bold font-['Chakra Petch'] uppercase tracking-widest">
        EVENTS
      </div>
      <div className="w-full flex md:flex-row flex-wrap flex-col items-center justify-center gap-10">
          <EventsCard title="Inauguration - 2023" img="/events/1.jpg" desc="lorem" /> 
          <EventsCard title="Inauguration - 2023" img="/events/1.jpg" desc="lorem" /> 
      </div>
    </section>
  );
}

export default page;
