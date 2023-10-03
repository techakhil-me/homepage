function Footer() {
  return (
    <div className="w-full flex-col justify-start items-center gap-5 pt-40 p-4 inline-flex">
      <div className="justify-center items-center gap-5 inline-flex flex-wrap md:flex-nowrap">
        <a
          href="/"
          className="text-center text-stone-300 hover:text-white text-base font-normal font-['Chakra Petch'] uppercase leading-tight"
        >
          Discord
        </a>
        <a
          href="/"
          className="text-center text-stone-300 hover:text-white text-base font-normal font-['Chakra Petch'] uppercase leading-tight"
        >
          Insatagram
        </a>
        <a
          href="/"
          className="text-center text-stone-300 hover:text-white text-base font-normal font-['Chakra Petch'] uppercase leading-tight"
        >
          LInkedin
        </a>
        <a
          href="/"
          className="text-center text-stone-300 hover:text-white text-base font-normal font-['Chakra Petch'] uppercase leading-tight"
        >
          twitter
        </a>
        <div className="text-center text-stone-300 hover:text-white text-base font-normal font-['Chakra Petch'] uppercase leading-tight">
          Contact
        </div>
      </div>
      <div className="">
        <div className="text-center flex items-center text-stone-300 text-xs font-normal font-['Chakra Petch'] uppercase leading-tight">
          made with{" "}
          <span>
            <svg
              width="33"
              height="30"
              viewBox="0 0 33 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_dii_1392_173)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M25.2054 4.83192C24.1738 3.79991 22.7745 3.22009 21.3154 3.22009C19.8562 3.22009 18.4569 3.79991 17.4254 4.83192L16.3654 5.89192L15.3054 4.83192C13.157 2.68353 9.67374 2.68353 7.52535 4.83192C5.37697 6.98031 5.37697 10.4635 7.52535 12.6119L8.58535 13.6719L16.3654 21.4519L24.1454 13.6719L25.2054 12.6119C26.2374 11.5804 26.8172 10.1811 26.8172 8.72192C26.8172 7.26278 26.2374 5.86344 25.2054 4.83192Z"
                  fill="url(#paint0_linear_1392_173)"
                />
              </g>
              <defs>
                <filter
                  id="filter0_dii_1392_173"
                  x="0.69607"
                  y="0.611097"
                  width="31.3393"
                  height="28.6678"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="2.609" />
                  <feGaussianBlur stdDeviation="2.609" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.178039 0 0 0 0 0.0227451 0 0 0 0 0.0227451 0 0 0 0.8 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1392_173"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1392_173"
                    result="shape"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="1.73933" />
                  <feGaussianBlur stdDeviation="0.869665" />
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 1 0 0 0 0 0.168314 0 0 0 0 0.168314 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="shape"
                    result="effect2_innerShadow_1392_173"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="-1.73933" />
                  <feGaussianBlur stdDeviation="0.869665" />
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.356078 0 0 0 0 0.0454902 0 0 0 0 0.0454902 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="effect2_innerShadow_1392_173"
                    result="effect3_innerShadow_1392_173"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear_1392_173"
                  x1="16.3656"
                  y1="3.22009"
                  x2="16.3656"
                  y2="21.4519"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#760F0F" />
                  <stop offset="1" stopColor="#FF2727" />
                </linearGradient>
              </defs>
            </svg>
          </span>{" "}
          @DJS ISACA
        </div>
      </div>
    </div>
  );
}

export default Footer;
