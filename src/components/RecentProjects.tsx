"use client";
import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Autoplay, Mousewheel } from "swiper/modules";

const projects = [
  { title: `project 1`, imagesrc: `/Recent 1.png`, page: `#` },
  { title: `project 2`, imagesrc: `/Recent 2.png`, page: `#` },
  { title: `project 3`, imagesrc: `/Recent 3.png`, page: `#` },
  { title: `project 4`, imagesrc: `/Recent 4.png`, page: `#` },
  { title: `project 5`, imagesrc: `/Recent 5.png`, page: `#` },
];

function RecentProjects() {
  const [width, setWidth] = useState(0);
  const breakpoint = 768;

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResizeWindow = () => setWidth(window.innerWidth);
      // Set initial width
      handleResizeWindow();
      // Subscribe to window resize event "onComponentDidMount"
      window.addEventListener("resize", handleResizeWindow);
      return () => {
        // Unsubscribe "onComponentDestroy"
        window.removeEventListener("resize", handleResizeWindow);
      };
    }
  }, []);

  if (width > breakpoint) {
    return (
      <div className="flex relative flex-col items-start justify-center gap-0 lg:h-[calc(100svh-6rem)] md:h-[calc(100svh-5rem)] w-72">
        <Swiper
          direction={"vertical"}
          slidesPerView={3}
          spaceBetween={0}
          loop={true}
          mousewheel={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Mousewheel]}
          className="mySwiper"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index} className="w-72 ">
              <Link
                href={project.title}
                title={project.title}
                className="flex relative justify-center items-center h-full w-full object-cover object-center overflow-hidden bg-gray-400 bg-opacity-20"
              >
                <Image
                  src={project.imagesrc}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  }
  return (
    <div className="flex relative w-[calc(100svw-4rem)] gap-4 h-[calc(40svh+2rem)] pr-4 pb-4 ml-auto ">
      <div className="flex flex-col gap-4 relative w-1/2">
        <Link
          href={projects[0].title}
          title={projects[0].title}
          className="relative w-full h-full rounded-3xl overflow-hidden"
        >
          <Image
            src={projects[0].imagesrc}
            alt={projects[0].title}
            layout="fill"
            objectFit="cover"
          ></Image>
        </Link>
        <Link
          href={projects[1].title}
          title={projects[1].title}
          className="relative flex w-full h-full rounded-3xl overflow-hidden"
        >
          <Image
            src={projects[1].imagesrc}
            alt={projects[1].title}
            layout="fill"
            objectFit="cover"
          ></Image>
        </Link>
        <Link
          href={projects[2].title}
          title={projects[2].title}
          className="relative w-full h-full rounded-3xl overflow-hidden"
        >
          <Image
            src={projects[2].imagesrc}
            alt={projects[2].title}
            layout="fill"
            objectFit="cover"
          ></Image>
        </Link>
      </div>
      <div className="flex flex-col gap-4 w-1/2">
        <Link
          href={projects[3].title}
          title={projects[3].title}
          className="relative w-full h-full rounded-3xl overflow-hidden"
        >
          <Image
            src={projects[3].imagesrc}
            alt={projects[3].title}
            layout="fill"
            objectFit="cover"
          ></Image>
        </Link>
        <Link
          href={projects[4].title}
          title={projects[4].title}
          className="relative w-full h-full rounded-3xl overflow-hidden"
        >
          <Image
            src={projects[4].imagesrc}
            alt={projects[4].title}
            layout="fill"
            objectFit="cover"
          ></Image>
        </Link>
      </div>
    </div>
  );
}

export default RecentProjects;
