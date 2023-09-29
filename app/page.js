"use client"; // to import client side only modules
// import LocomotiveScroll from "locomotive-scroll";
import Spline from "@splinetool/react-spline";

import Image from "next/image";
import { useEffect } from "react";
export default function Home() {
  // useEffect(() => {
  //   const locomotiveScroll = new LocomotiveScroll();
  // }, []);
  return (
    <section
      data-scroll
      className="flex min-h-screen h-screen flex-col items-center justify-between"
    >
      <div className="h-screen overflow-hidden w-full absolute z-0">
        <div className="h-screen scale-150 mt-10 w-full">
          <Spline scene="https://prod.spline.design/SYmCHifc72fWmK5u/scene.splinecode" />
        </div>
      </div>
      <div className="w-full z-10 h-full pointer-events-none pt-28 flex-col justify-between items-start inline-flex">
        <div className="self-stretch h-32 flex-col justify-start items-end gap-2.5 flex">
          <div className="text-right text-white text-opacity-90 text-4xl font-bold font-['Chakra Petch'] uppercase leading-10 tracking-widest">
            OFFICIAL CYSEC CLUB
          </div>
          <div className="w-[600px] text-right">
            <span className="text-stone-300 text-lg font-normal font-['Chakra Petch'] uppercase leading-normal">
              Join us on a dynamic journey, embracing emerging technologies, to{" "}
            </span>
            <span className="text-white text-opacity-90 font-bold text-lg font-['Chakra Petch'] uppercase leading-normal">
              explore
            </span>
            <span className="text-stone-300 text-lg font-normal font-['Chakra Petch'] uppercase leading-normal">
              ,{" "}
            </span>
            <span className="text-white text-opacity-90 font-bold text-lg font-['Chakra Petch'] uppercase leading-normal">
              learn
            </span>
            <span className="text-stone-300 text-lg font-normal font-['Chakra Petch'] uppercase leading-normal">
              , and{" "}
            </span>
            <span className="text-white text-opacity-90 font-bold text-lg font-['Chakra Petch'] uppercase leading-normal">
              innovate
            </span>
            <span className="text-stone-300 text-lg font-normal font-['Chakra Petch'] uppercase leading-normal">
              {" "}
              <br />
              in the realm of digital defense and beyond.
            </span>
          </div>
        </div>
        <div className="self-stretch justify-between items-end inline-flex">
          <div className="grow shrink basis-0 h-32 flex-col justify-between items-start inline-flex">
            <div className="text-5xl text-stroke text-black font-bold text-strok font-['Chakra Petch'] uppercase leading-10 tracking-widest">
              Cybersecurity
            </div>
            <div className="text-5xl text-stroke text-black font-bold font-['Chakra Petch'] uppercase leading-10 tracking-widest">
              Blockchain
            </div>
            <div className="text-5xl text-stroke text-black font-bold font-['Chakra Petch'] uppercase leading-10 tracking-widest">
              I O T
            </div>
          </div>
          <div className="w-80 h-44 bg-white bg-opacity-5 border border-stone-300 backdrop-blur-md flex-col justify-center items-center gap-3 inline-flex" />
        </div>
      </div>
    </section>
  );
}
