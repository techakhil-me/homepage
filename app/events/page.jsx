
import EventsCard from "../components/EventsCard";


function page() {

  return (
    <section className="w-full h-full pt-40 flex flex-col gap-20 items-start">
      <div className="w-full sticky top-20 lg:text-left text-center text-white text-opacity-90 text-6xl md:text-8xl lg:text-[200px] font-bold font-['Chakra Petch'] uppercase tracking-widest">
        EVENTS
      </div>
      <div className="w-full flex md:flex-row flex-wrap flex-col items-center justify-center gap-10">
          <EventsCard title="Inauguration - 2023" img="/events/1.jpg" desc="lorem" /> 
          <EventsCard title="Inauguration - 2023" img="/events/1.jpg" desc="lorem" /> 
          <EventsCard title="Inauguration - 2023" img="/events/1.jpg" desc="lorem" /> 
          <EventsCard title="Inauguration - 2023" img="/events/1.jpg" desc="lorem" /> 
      </div>
    </section>
  );
}

export default page;
