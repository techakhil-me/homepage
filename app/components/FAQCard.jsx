function FAQCard({ question, answer }) {
  return (
    <div className="w-80 p-5 bg-white backdrop-blur-md  bg-opacity-10 border border-stone-300 flex-col justify-start items-start gap-5 inline-flex">
      <div className="self-stretch text-white text-opacity-80 text-xl font-bold font-['Chakra Petch'] uppercase leading-7 tracking-widest">
        {question}
      </div>
      <div className="self-stretch  text-justify text-stone-300 text-sm font-normal font-['Chakra Petch'] uppercase leading-normal">
        {answer}
      </div>
    </div>
  );
}

export default FAQCard;
