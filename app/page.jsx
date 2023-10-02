"use client"; // to import client side only modules
// import LocomotiveScroll from "locomotive-scroll";

import Image from "next/image";
import { useEffect } from "react";
import Hero from "./components/Hero";
import FAQ from "./components/Faq";
import FAQs from "./components/FAQs";
import Sponsors from "./components/Sponsors";

export default function Home() {
  // useEffect(() => {
  //   const locomotiveScroll = new LocomotiveScroll();
  // }, []);
  return (
    <>
      <Hero />
      {/* <FAQ /> */}
      <Sponsors/>
      <FAQs />
    </>
  );
}
