function TeamCard() {
  return (
    <div className="overflow-hidden shrink-0 w-80 flex justify-center pb-10">
      <div className=" w-72 h-80 relative backdrop-blur-md">
        <img src="https://placekitten.com/288/320" alt="" />
        <div className="w-80 absolute p-2.5 -bottom-9  left-1/2 transform -translate-x-1/2 bg-white bg-opacity-10 border border-stone-300 backdrop-blur-md flex-col justify-center items-center gap-1 inline-flex">
          <div className="text-center text-white text-opacity-80 text-xl font-semibold font-['Chakra Petch'] uppercase leading-none">
           Name of the Member
          </div>
          <div className="text-center text-white text-opacity-80 text-sm font-normal font-['Chakra Petch'] uppercase leading-none">
            Faculty Head
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamCard;
