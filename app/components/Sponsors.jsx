import Image from "next/image";

function Sponsors() {
  return (
    <div className="w-full flex flex-col pt-20 justify-center my-12  items-center ">
      <p className="text-4xl text-white text-opacity-90 font-bold p-8 pb-1 font-chakrapetch">
        SPONSORS
      </p>
      <p className="text-stone-300 pb-10 font-chakrapetch text-center uppercase">
        Join us on a dynamic journey, embracing emerging{" "}
      </p>
      <div className="flex gap-4 lg:gap-20 flex-row justify-around items-center flex-wrap">
        <div className="p-2 bg-white backdrop-blur-md  bg-opacity-10 border border-stone-300">
          <Image src="/jdprints.png" alt="jdprints" width="280" height="100" />
        </div>
        <div className="p-2 bg-white backdrop-blur-md  bg-opacity-10 border border-stone-300">
          <Image
            src="/altcoffee.png"
            alt="altcoffee"
            width="280"
            height="100"
          />
        </div>
        <div className="p-2 bg-white backdrop-blur-md  bg-opacity-10 border border-stone-300">
          <Image src="/bakelogy.png" alt="bakelogy" width="280" height="100" />
        </div>
      </div>
    </div>
  );
}

export default Sponsors;
