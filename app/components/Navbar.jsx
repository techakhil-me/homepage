import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full h-10 mt-10 z-50 text-white  px-4 fixed justify-center items-center inline-flex">
      <Link
        href="/about"
        className="grow shrink basis-0 transition-all duration-300 ease-in-out hover:text-black hover:bg-opacity-100 self-stretch bg-white backdrop-blur-sm  bg-opacity-10 border border-stone-300 flex-col justify-center items-center gap-2.5 inline-flex"
      >
        <div className="text-opacity-90 text-sm font-semibold font-['Chakra Petch'] leading-tight">
          ABOUT
        </div>
      </Link>
      <div className="grow shrink basis-0 transition-all duration-300 ease-in-out hover:text-black hover:bg-opacity-100 self-stretch bg-white backdrop-blur-sm  bg-opacity-10 border border-stone-300 flex-col justify-center items-center gap-2.5 inline-flex">
        <div className="text-opacity-90 text-sm font-semibold font-['Chakra Petch'] leading-tight">
          NEWSLETTERS
        </div>
      </div>
      <Link
        href="/"
        className="w-96 h-16 hover:bg-black transition-all duration-300 ease-in-out hover:invert bg-white bg-opacity-10 border border-stone-300 backdrop-blur-md flex-col justify-center items-center gap-3 inline-flex"
      >
        <svg
          width="56"
          height="36"
          viewBox="0 0 56 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.883366 34.9988C0.883366 35.1655 1.03189 35.3155 1.19691 35.3155H3.17721C3.34224 35.3155 3.49076 35.1655 3.49076 34.9988V23.9667C3.49076 23.8 3.34224 23.65 3.17721 23.65H1.19691C1.03189 23.65 0.883366 23.8 0.883366 23.9667V34.9988Z"
            fill="white"
            fillOpacity="0.9"
          />
          <path
            d="M7.81571 34.1989C8.19527 34.5822 9.38345 35.4821 11.5288 35.4821C13.9546 35.4821 15.4234 33.749 15.4234 32.0325C15.4234 29.7661 13.3771 28.7495 12.0899 28.2329C10.7862 27.6996 10.2911 27.233 10.2911 26.6164C10.2911 26.1664 10.7367 25.7665 11.3307 25.7665C12.3374 25.7665 13.5421 26.6831 13.6906 26.7664C13.8391 26.883 14.1362 26.733 14.2517 26.5497L15.0933 25.2665C15.1593 25.1499 15.1923 24.8499 14.9943 24.7333C14.4992 24.3666 13.179 23.4834 11.4628 23.4834C8.92138 23.4834 7.65068 25.1499 7.65068 26.7997C7.65068 28.7995 9.43296 29.916 10.8522 30.4826C11.9743 30.9326 12.5519 31.4659 12.5519 32.1658C12.5519 32.7491 12.0734 33.1657 11.4133 33.1657C10.3241 33.1657 9.13591 32.2825 9.0699 32.2491C8.95438 32.1658 8.64084 32.1325 8.50882 32.3491L7.7332 33.7323C7.60118 33.9656 7.65069 34.0323 7.81571 34.1989Z"
            fill="white"
            fillOpacity="0.9"
          />
          <path
            d="M18.2924 35.3155H20.1076C20.4377 35.3155 20.6192 35.1155 20.7017 34.9155L21.2958 33.5823H25.7845L26.3786 34.8988C26.5271 35.2155 26.6591 35.3155 26.9562 35.3155H28.788C29.0355 35.3155 29.1675 35.0988 29.0685 34.8822L23.9032 23.6667C23.8537 23.5667 23.7382 23.4834 23.6227 23.4834H23.4576C23.3421 23.4834 23.2266 23.5667 23.1771 23.6667L18.0118 34.8822C17.9128 35.0988 18.0448 35.3155 18.2924 35.3155ZM22.286 31.3159L23.5237 28.5662H23.5402L24.7944 31.3159H22.286Z"
            fill="white"
            fillOpacity="0.9"
          />
          <path
            d="M31.548 29.4994C31.548 32.8324 34.2049 35.4821 37.5054 35.4821C38.9741 35.4821 40.3934 34.9655 41.5155 33.8656C41.631 33.749 41.6476 33.5323 41.532 33.4157L40.2448 32.0325C40.1458 31.9158 39.9313 31.9158 39.8158 32.0158C39.2217 32.5324 38.3801 32.8157 37.6044 32.8157C35.7396 32.8157 34.3534 31.2826 34.3534 29.4328C34.3534 27.5663 35.7231 25.9998 37.5879 25.9998C38.3966 25.9998 39.2052 26.2998 39.8158 26.8497C39.9313 26.9664 40.1128 26.9664 40.2283 26.8497L41.5155 25.4998C41.6475 25.3665 41.6475 25.1665 41.499 25.0332C40.3769 24 39.1557 23.4834 37.5054 23.4834C34.2049 23.4834 31.548 26.1664 31.548 29.4994Z"
            fill="white"
            fillOpacity="0.9"
          />
          <path
            d="M44.3515 35.3155H46.1668C46.4968 35.3155 46.6784 35.1155 46.7609 34.9155L47.355 33.5823H51.8437L52.4377 34.8988C52.5863 35.2155 52.7183 35.3155 53.0153 35.3155H54.8471C55.0947 35.3155 55.2267 35.0988 55.1276 34.8822L49.9624 23.6667C49.9129 23.5667 49.7973 23.4834 49.6818 23.4834H49.5168C49.4013 23.4834 49.2858 23.5667 49.2363 23.6667L44.071 34.8822C43.972 35.0988 44.104 35.3155 44.3515 35.3155ZM48.3451 31.3159L49.5828 28.5662H49.5993L50.8535 31.3159H48.3451Z"
            fill="white"
            fillOpacity="0.9"
          />
          <path
            d="M15.7633 0.423846L18.8299 3.52059V17.9721L15.7633 21.0689H0.839355V0.424135L15.7633 0.423846ZM13.5144 16.5267V4.96546H6.15436V16.5267H13.5144ZM32.5277 17.9718L29.4611 21.0686H21.8972V16.5267H27.2126V0.42334H32.5281L32.5277 17.9718ZM49.4958 4.96524H41.9319V8.47487H51.9494L55.016 11.5716V17.9716L51.9494 21.0683H39.683L36.6164 17.9716V14.8748H40.5007L42.1362 16.5264H49.7002V13.0168H39.6827L36.6161 9.92002V3.52009L39.6827 0.42334H51.9491L55.0157 3.52009V6.61683H51.1313L49.4958 4.96524Z"
            fill="white"
            fillOpacity="0.9"
          />
        </svg>
      </Link>
      <div className="grow shrink basis-0 transition-all duration-300 ease-in-out hover:text-black hover:bg-opacity-100 self-stretch bg-white backdrop-blur-md  bg-opacity-10 border border-stone-300 flex-col justify-center items-center gap-2.5 inline-flex">
        <div className="text-opacity-90 text-sm font-semibold font-['Chakra Petch'] leading-tight">
          EVENTS
        </div>
      </div>
      <div className="grow shrink basis-0 transition-all duration-300 ease-in-out hover:text-black hover:bg-opacity-100 self-stretch bg-white backdrop-blur-md  bg-opacity-10 border border-stone-300 flex-col justify-center items-center gap-2.5 inline-flex">
        <div className="text-opacity-90 text-sm font-semibold font-['Chakra Petch'] leading-tight">
          CONTACT
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
