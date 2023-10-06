function EventsCard() {
  return (
    <div className="event_card md:w-1/2 w-full relative backdrop-blur-md  overflow-hidden border border-stone-300 justify-start items-start gap-5 inline-flex flex-col">
      <div className="w-full overflow-hidden opacity-50">
        <img className="w-full object-fill" src="./assets/img1.jpg" alt="" />
      </div>
      <div className="flex flex-col event_details transition-all duration-300 ease-in-out w-full gap-10 p-5 absolute bottom-0 bg-black backdrop-blur-md  bg-opacity-10">
        <div className="self-stretch text-white text-opacity-80  text-xl md:text-5xl font-bold font-['Chakra Petch'] uppercase leading-7 tracking-widest">
          Hackcellence 2023
        </div>
        <div className="self-stretch  text-justify text-stone-300 text-base font-normal font-['Chakra Petch'] uppercase leading-normal">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
          ipsum repellendus, rerum placeat dolorem adipisci vitae assumenda
          totam. Architecto impedit eveniet illo asperiores quia eaque explicabo
          eos laborum tempore saepe.
        </div>
      </div>
    </div>
  );
}

export default EventsCard;
