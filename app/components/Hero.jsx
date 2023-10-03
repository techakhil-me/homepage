import Spline from "@splinetool/react-spline";

const Hero = () => {
  return (
    <section className="flex min-h-screen relative h-screen flex-col items-center justify-between">
      <div className=" w-full absolute z-0 overflow-hidden">
        <div className="h-screen mt-10 w-full scale-110">
          <Spline scene="https://prod.spline.design/SYmCHifc72fWmK5u/scene.splinecode" />
        </div>
      </div>
      <div className="w-full z-10 h-full pointer-events-none pt-32 git flex-col justify-between items-start inline-flex">
        <div className="self-stretch h-32 flex-col justify-start items-end flex">
          <div className="text-right pointer-events-auto text-white text-opacity-90 text-3xl font-bold font-['Chakra Petch'] uppercase leading-10 tracking-widest">
            OFFICIAL CYSEC CLUB
          </div>
          <div className="w-[450px] text-right">
            <span className="text-stone-300 pointer-events-auto text-base font-normal font-['Chakra Petch'] uppercase leading-normal">
              Join us on a dynamic journey, embracing emerging technologies, to{" "}
            </span>
            <span className="text-white pointer-events-auto text-opacity-90 font-bold text-base font-['Chakra Petch'] uppercase leading-normal">
              explore
            </span>
            <span className="text-stone-300 pointer-events-auto text-base font-normal font-['Chakra Petch'] uppercase leading-normal">
              ,{" "}
            </span>
            <span className="text-white pointer-events-auto text-opacity-90 font-bold text-lg font-['Chakra Petch'] uppercase leading-normal">
              learn
            </span>
            <span className="text-stone-300 pointer-events-auto text-base font-normal font-['Chakra Petch'] uppercase leading-normal">
              , and{" "}
            </span>
            <span className="text-white pointer-events-auto text-opacity-90 font-bold text-base font-['Chakra Petch'] uppercase leading-normal">
              innovate
            </span>
            <span className="text-stone-300 pointer-events-auto text-base font-normal font-['Chakra Petch'] uppercase leading-normal">
              {" "}
              <br />
              in the realm of digital defense and beyond.
            </span>
          </div>
        </div>
        <div className="self-stretch justify-between items-end inline-flex">
          <div className="grow shrink  basis-0 h-32 flex-col justify-between items-start inline-flex">
            <div className="text-4xl pointer-events-auto text-stroke text-black font-bold text-strok font-['Chakra Petch'] uppercase leading-10 tracking-widest">
              Cybersecurity
            </div>
            <div className="text-4xl pointer-events-auto text-stroke text-black font-bold font-['Chakra Petch'] uppercase leading-10 tracking-widest">
              Blockchain
            </div>
            <div className="text-4xl pointer-events-auto text-stroke text-black font-bold font-['Chakra Petch'] uppercase leading-10 tracking-widest">
              I O T
            </div>
          </div>
          <div className="w-60 h-32 overflow-hidden bg-white bg-opacity-5 border border-stone-300 backdrop-blur-md flex-col justify-center items-center gap-3 inline-flex">
            <video
              className="video-js vjs-theme-fantasy"
              vjs-big-play-centered
              muted
              controls="false"
              autoPlay
              loop
            >
              <source
                src="https://www.djsisaca.tech/teaser.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
