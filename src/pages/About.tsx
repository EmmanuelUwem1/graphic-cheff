import React from 'react'
import Image from "next/image";
import {motion} from 'framer-motion'

function About() {
  return (
    <motion.div
    initial={{ opacity: 0}}
      animate={{ opacity: 1}}
      exit={{ opacity: 0}}
      transition={{duration:1}}  className="h-[100svh] w-full bg-[#2E2D46] pt-20 px-6 md:pt-32 md:pl-32 absolute left-0 z-[10] flex-col gap-0 flex overflow-hidden">
      <div className="flex items-center justify-center h-[36svh] sm:overflow-visible relative overflow-hidden ">
        <Image
          src="/portrait-man-sweater-posing 1.png"
          alt="Graphic Cheff"
          // layout='fill'
          width={1200}
          height={1200}
          className="absolute sm:w-1/2 top-0"
        ></Image>
      </div>
      <div className=" relative flex flex-col h-[54svh] sm:w-full">
        <div className="hero-text z-[100] relative w-56 right-0 md:w-1/2 md:left-[2rem] top-[-1.5rem] md:top-[-2rem] ml-auto overflow-hidden">
          <div className="w-fit flex flex-col">
            <span className="small relative bottom-[-1.3rem]  md:bottom-[-2.3rem] font-normal text-xl md:text-4xl self-end text-left flex w-fit left-[-5rem] md:left-[-1rem]">
              Daniel
            </span>
            <span className="big relative font-normal md:font-bold text-6xl md:text-9xl text-left flex">
              Alex
            </span>
            <span className="text-[#9BFFAB] text-base relative">Product Designer At Fiverr</span>
          </div>
        </div>
        <div className="relative bottom-4 left-6 flex text-justify textOverflow pr-4 sm:pr-4rem">
          {`Meet Daniel Alex, a dynamic African graphic designer weaving
          creativity into product design, branding, and captivating flyer
          artistry.
          I bring a unique perspective to every project. Let's collaborate and
          infuse your brand with innovation and cultural richness. Together,
          we'll create designs that not only captivate but also resonate with
          authenticity. Welcome to a world where design meets identity.`}
        </div>
      </div>
    </motion.div>
  );
}

export default About