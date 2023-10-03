import FAQCard from "./FAQCard";

function FAQs() {
  return (
    <section className="w-full pt-32 flex flex-col gap-20 items-start">
      <div className="w-full  lg:text-left text-center text-white text-opacity-90 text-8xl lg:text-[320px] font-bold font-['Chakra Petch'] uppercase tracking-widest">
        FAQ
      </div>
      <div className="w-full flex items-start gap-10 justify-center flex-wrap">
        <div style={{ animationDelay: "100ms" }} className="md:-mt-20 float">
          <FAQCard />
        </div>
        <div style={{ animationDelay: "2000ms" }} className="md:-mt-40 float">
          <FAQCard />
        </div>
        <div style={{ animationDelay: "3300ms" }} className="md:-mt-30 float">
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
