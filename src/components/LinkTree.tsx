import React from "react";
import Image from "next/image";

const socials = [
  { title: `facebook`, href: "#", source: `/Icons/facebook.png` },
  { title: `linkedin`, href: "#", source: `/Icons/linkedin.png` },
  { title: `instagram`, href: "#", source: `/Icons/instagram.png` },
  { title: `whatsapp`, href: "#", source: `/Icons/whatsapp.png` },
  { title: `github`, href: "#", source: `/Icons/github.png` },
  { title: `behance`, href: "#", source: `/Icons/behance.png` },
  { title: `dribbble`, href: "#", source: `/Icons/dribbble.png` },
];
function LinkTree() {
  return (
    <aside className="flex backdrop-blur-lg md:z-0 z-[200] flex-col items-center justify-between md:justify-center py-4 px-3 md:gap-8 h-64 w-11 bottom-4  lg:w-24 md:w-20 fixed left-0 lg:top-[6rem] md:top-[5rem] lg:h-[calc(100svh-6rem)] md:h-[calc(100svh-5rem)] bg-[#FFFFFF26] ">
      {socials.map((social, index) => (
        <a key={index} href={social.href} title={social.title} target="_blank">
          <span className="image-container h-1/2 w-1/2 rounded-full">
            <Image
              alt={social.title}
              src={social.source}
              height={32}
              width={32}
           
            ></Image>
          </span>
        </a>
      ))}
    </aside>
  );
}

export default LinkTree;
