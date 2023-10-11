import Image from "next/image";
import TeamCard from "./../components/TeamCard";
import { TeamDetails } from "../components/TeamDetails";

export default function Home() {
  return (
    <>
      {/* top main */}
      <section className="w-full h-screen pt-20 pb-5 justify-between items-center inline-flex gap-20">
        <div className="grow h-full self-stretch justify-center flex-col gap-2.5 inline-flex">
          <div className="text-white text-opacity-90 text-6xl font-bold font-['Chakra Petch'] uppercase tracking-widest">
            <span className="text-stroke text-transparent">We Are the</span>{" "}
            Frontline
          </div>
          <div className=" text-stone-300 text-lg font-normal font-['Chakra Petch'] uppercase leading-normal">
            DJSCE's Student Chapter for Cybersecurity. We are poised to build a
            Safe Online Community, Starting innovation right here.
          </div>
        </div>
        <img className="w-1/2" src="/about.png" />
      </section>

      {/* faculty */}
      <section className="w-full pt-20 pb-5 justify-center items-center gap-14 inline-flex">
        <div className="justify-start items-center gap-5 flex">
          <TeamCard
            name="Dr. Narendra Shekhokar"
            role="Faculty incharge"
            img="https://cdn.discordapp.com/attachments/765973145852575746/1158491694640156692/image.png"
          />
        </div>
        <div className=" w-96 h-full flex-col justify-center items-end gap-2.5 inline-flex">
          <div className="text-right text-white text-opacity-90 text-4xl font-bold font-['Chakra Petch'] uppercase leading-10 tracking-widest">
            Captain of the Cruise
          </div>
          <div className="text-right text-stone-300 text-lg font-normal font-['Chakra Petch'] uppercase leading-normal">
           Dr. Shekokar serves as a motivating figure within our institution, inspiring both students and faculty to pursue excellence and innovation within the Department of CSE(ICB). His leadership and dedication continue to drive the department's success.
          </div>
        </div>
      </section>

      {/* meet the core */}
      <section className="w-full pt-40 pb-5 relative gap-60 justify-between items-start inline-flex">
        <div className="flex-col justify-start items-start gap-5 inline-flex sticky top-1/2">
          <div className="text-5xl text-stroke text-transparent font-bold font-['Chakra Petch'] uppercase leading-10 tracking-widest">
            Meet
          </div>
          <div className="text-white text-opacity-90 text-6xl font-bold font-['Chakra Petch'] uppercase leading-10 tracking-widest">
            The Core
          </div>
        </div>
        <div className="grow shrink basis-0 flex-col justify-start items-start gap-24 inline-flex">
          {TeamDetails.map((member, key) => (
            <div
              key={key}
              className="sjustify-start items-center gap-10 inline-flex"
            >
              <TeamCard
                name={member.name}
                role={member.role}
                img={member.img}
              />
              <div className=" text-stone-300 text-lg font-normal font-['Chakra Petch'] uppercase leading-normal">
                {member.description}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
