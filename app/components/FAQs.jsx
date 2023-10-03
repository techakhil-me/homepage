import FAQCard from "./FAQCard";

function FAQs() {
  return (
    <section className="w-full pt-32 flex flex-col items-start">
      <div className="text-center text-white text-opacity-90 text-[320px] font-bold font-['Chakra Petch'] uppercase tracking-widest">
        FAQ
      </div>
      <div className="w-full flex items-start gap-10 justify-between -mt-20">
        <div style={{ animationDelay: "100ms" }} className="-mt-10 float">
          <FAQCard />
        </div>
        <div style={{ animationDelay: "2000ms" }} className="-mt-40 float">
          <FAQCard />
        </div>
        <div style={{ animationDelay: "3300ms" }} className="-mt-20 float">
          <FAQCard />
        </div>
        <div className="float">
          <FAQCard />
        </div>
      </div>
    </section>
  );
}

export default FAQs;
