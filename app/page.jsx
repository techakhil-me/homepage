"use client"; // to import client side only modules
// import LocomotiveScroll from "locomotive-scroll";

import Hero from "./components/Hero";
import Sponsors from "./components/Sponsors";
import FAQs from "./components/FAQs";
import Carousel from "./components/Carousel";
import {motion} from "framer-motion";

export default function Home() {
  // useEffect(() => {
  //   const locomotiveScroll = new LocomotiveScroll();
  // }, []);
  return (
    <motion.div>
      <Hero />
      <Carousel />
      <Sponsors />
      <FAQs />
    </motion.div>
  );
}
