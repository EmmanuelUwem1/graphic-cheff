import React from "react";
import projects from "@/components/projects";
import Link from "next/link";
import Loading from "@/components/Loading";
import Image from "next/image";
const firstProject = projects[0];
const secondProject = projects[1];
const thirdProject = projects[2];
const fourthProject = projects[3];
const fifthProject = projects[4];

function About() {
  if (!projects) {
    return <Loading />;
  }
  return (
    <div className="h-[100svh] w-full bg-[#2E2D46] pt-20 px-6 md:pt-32 md:pl-32 absolute left-0 z-[10] flex-col gap-4 flex pb-4">
      <div className="flex gap-4 h-[72%] w-full">
        <div className="flex flex-col gap-4 w-1/2">
          <Link
            href={firstProject.title}
            className="flex h-1/2 w-full relative overflow-hidden rounded-xl bg-[#D9D9D9]"
          >
            <Image
              alt={firstProject.title}
              src={firstProject.imagesrc}
              layout="fill"
            ></Image>
          </Link>
          <Link
            href={secondProject.title}
            className="flex h-1/2 w-full relative overflow-hidden rounded-xl bg-[#D9D9D9]"
          >
            <Image
              alt={secondProject.title}
              src={secondProject.imagesrc}
              layout="fill"
            ></Image>
          </Link>
        </div>
        <div className="flex flex-col gap-4 w-1/2 h-full">
          <Link
            href={thirdProject.title}
            className="flex w-full h-1/3 relative overflow-hidden rounded-xl bg-[#D9D9D9]"
          >
            <Image
              alt={thirdProject.title}
              src={thirdProject.imagesrc}
              layout="fill"
            ></Image>
          </Link>
          <Link
            href={fourthProject.title}
            className="flex w-full h-1/3 relative overflow-hidden rounded-xl bg-[#D9D9D9]"
          >
            <Image
              alt={fourthProject.title}
              src={fourthProject.imagesrc}
              layout="fill"
            ></Image>
          </Link>
          <Link
            href={fifthProject.title}
            className="flex w-full h-1/3 relative overflow-hidden rounded-xl bg-[#D9D9D9]"
          >
            <Image
              alt={fifthProject.title}
              src={fifthProject.imagesrc}
              layout="fill"
            ></Image>
          </Link>
        </div>
      </div>
      <Link
        href={firstProject.title}
        className="bg-[#D9D9D9] flex h-[28%] relative  w-full rounded-xl overflow-hidden"
      >
        <Image
          alt={firstProject.title}
          src={firstProject.imagesrc}
          layout="fill"
        ></Image>
      </Link>
    </div>
  );
}
// return <Loading />;
// }

export default About;
