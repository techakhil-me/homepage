import Image from "next/image";
import Tilt from "react-parallax-tilt";

function Sponsors() {
  const sponsorsList = ["/jdprints.png", "/altcoffee.png", "/bakelogy.png"];

  return (
    <div className="w-full flex flex-col pt-20 justify-center my-12  items-center ">
      <p className="text-4xl text-white text-opacity-90 font-bold p-8 pb-1 font-chakrapetch">
        SPONSORS
      </p>
      <p className="text-stone-300 pb-10 font-chakrapetch text-center uppercase">
        Honoring the Support of Our Esteemed Sponsors
      </p>
      <div className="flex gap-4 lg:gap-20 flex-row justify-around items-center flex-wrap">
        {sponsorsList.map((sponsor, index) => (
          <Tilt key={`sponsor-${index}`}  transitionSpeed={5000}  >
            <div className="p-2 bg-white backdrop-blur-md  bg-opacity-10 border border-stone-300">
              <Image
                src={sponsor}
                alt={`sponsor-${index}`}
                
                width="280"
                height="100"
              />
            </div>
          </Tilt>
        ))}
      </div>
    </div>
  );
}

export default Sponsors;
