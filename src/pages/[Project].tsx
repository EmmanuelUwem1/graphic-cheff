import React from "react";
import projects from "../components/projects.ts";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import Loading from "@/components/Loading.tsx";
import {motion} from 'framer-motion'

function DynamicPage() {
  const router = useRouter();
  const ProjectName = router.query.Project as string;
  const project = projects.find((p) => p.title === ProjectName);
  const LinksWithoutActive = projects.filter(
    (link) => link.title !== ProjectName
  );
  const ProjectsLength = projects.length;

    const x = ProjectsLength - 3;//x is number off items removes from array to reduce array length to 3
  const index = x - 1;// x-1 is the index to slice from since array starts counting from 0



  const ThreeOtherLinks = LinksWithoutActive.slice(index);
 
  if (!project) {
    return (
    <Loading />
    );
  }
  return (
    <motion.div
      initial={{ opacity: 0}}
      animate={{ opacity: 1}}
      exit={{ opacity: 0}}
      transition={{ duration: 1 }}
      className="h-[100svh] w-full bg-[#2E2D46] pt-20 px-6 md:pt-32 md:pl-32 absolute left-0 z-[10] "
    >
      <div className="flex items-center justify-center w-full bg-[#D9D9D9] h-[40%] rounded-xl md:h-[60%] md:w-5/12 overflow-hidden relative">
        <Image
          src={project.imagesrc}
          alt={project.title}
          layout="fill"
          className="relative cursor-pointer"
        ></Image>
      </div>
      <div className="flex justify-center items-center gap-2 mt-4 md:w-5/12">
        {ThreeOtherLinks.map((link, index) => (
          <Link
            key={index}
            href={link.title}
            className="flex h-16 w-20 bg-[#D9D9D9] rounded-xl relative overflow-hidden hover:border-4 border-blue-500 transition-all"
          >
            <Image alt={link.title} src={link.imagesrc} layout="fill"></Image>
          </Link>
        ))}
      </div>
    </motion.div>
  );
}

export default DynamicPage;
