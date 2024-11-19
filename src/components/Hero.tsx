import React from "react";
import Image from "next/image";

function Hero() {
  return (
    <div className="hero flex flex-row relative w-full h-[calc(60svh-2rem)] lg:h-[calc(100svh-6rem)] md:h-full items-start justify-end lg:w-[70%] md:w-[100%] overflow-hidden inset-shadow-bottom">
      <div className="hero-text z-[100] absolute w-56 left-9 md:w-1/2 md:left-[4rem] align-middle  self-center ">
        <div className="w-fit flex flex-col ">
          <span className="small relative bottom-[-1.3rem]  md:bottom-[-2.3rem] font-normal text-xl md:text-4xl self-end text-left flex w-fit">
            Daniel
          </span>
          <span className="big relative font-normal md:font-bold text-6xl md:text-9xl text-left flex">
            Alex
          </span>
        </div>
        <p className="desc flex bg-[#FFFFFF36] text-xs md:text-xl md:rounded-3xl rounded-2xl px-2 py-3 md:px-7 md:py-6">
          {`Passionate designer specializing in branding, product design, and
          eye-catching flyers. Elevate your brand with my unique aesthetic.
          Let's collaborate to bring your vision to life. Explore my portfolio
          now.`}
        </p>
        <a
          href="#"
          className="portfolio flex items-center mt-2 md:mt-6 gap-1 w-fit text-left text-xl justify-start"
        >
          Portfolio{" "}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16.03 12.53L13.03 15.53C12.88 15.68 12.69 15.75 12.5 15.75C12.31 15.75 12.12 15.68 11.97 15.53C11.68 15.24 11.68 14.76 11.97 14.47L13.69 12.75H8.5C8.09 12.75 7.75 12.41 7.75 12C7.75 11.59 8.09 11.25 8.5 11.25H13.69L11.97 9.53C11.68 9.24 11.68 8.76 11.97 8.47C12.26 8.18 12.74 8.18 13.03 8.47L16.03 11.47C16.32 11.76 16.32 12.24 16.03 12.53Z"
              fill="white"
            />
          </svg>
        </a>
      </div>
      <div className="hero-image flex relative bottom-[-2rem] right-[-4rem] lg:right-[-6rem] md:right-[-10rem] items-start justify-end  lg:w-[75%] md:w-full h-full overflow-hidden  sm:z-10">
        <Image
          alt="Graphic Cheff"
          src="/portrait-man-sweater-posing 1.png"
            height={1460}
            width={961}
        //   layout="fill"
        //   objectFit="cover"
        ></Image>
      </div>
    </div>
  );
}

export default Hero;
