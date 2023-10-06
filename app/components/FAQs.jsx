import FAQCard from "./FAQCard";

function FAQs() {
  return (
    <section className="w-full pt-32 flex flex-col gap-20 items-start">
      <div className="w-full  lg:text-left text-center text-white text-opacity-90 text-8xl lg:text-[320px] font-bold font-['Chakra Petch'] uppercase tracking-widest">
        FAQ
      </div>
      <div className="w-full flex items-start gap-10 justify-center flex-wrap">
        <div style={{ animationDelay: "100ms" }} className="md:-mt-20 float">
          <FAQCard
            question={"What is DJS ISACA ?"}
            answer={
              "DJS ISACA is a student-led organization affiliated with ISACA a global professional association focused on IT governance, risk management, and cybersecurity. Our purpose is to provide a platform for students interested in these fields to connect, learn, and grow both academicall and professionaly."
            }
          />
        </div>
        <div style={{ animationDelay: "2000ms" }} className="md:-mt-40 float">
          <FAQCard
            question={"Our mission ?"}
            answer={
              "We aim to spread awareness and importance of cyber security in professional and personal space. We are poised to build a safe online community, starting innovation right here!"
            }
          />
        </div>
        <div style={{ animationDelay: "3300ms" }} className="md:-mt-30 float">
          <FAQCard
            question={"why security is a myth ?"}
            answer={
              "Security is often perceived as a myth due to the illusion of safety provided by technologies such as firewalls and antivirus software, which can give a false sense of security. However, these tools are not foolproof, as they can't protect against all threats."
            }
          />
        </div>
        <div className="float">
          <FAQCard />
        </div>
      </div>
    </section>
  );
}

export default FAQs;
