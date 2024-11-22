import React, { ReactNode } from "react";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import LinkTree from "./LinkTree";
import Link from "next/link";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter();
  const currentPath = router.asPath;
  const [IsOpen, setIsOpen] = useState<boolean>(false);


  function OpenNav(event: React.MouseEvent<SVGSVGElement>) {
        event.stopPropagation();
    setIsOpen(true);
  }
  function CloseNav(event: React.MouseEvent<SVGSVGElement, MouseEvent>) {
    event.stopPropagation();
    setIsOpen(false);
  }
  const menuRef = useRef<HTMLDivElement>(null);
  
  function HandleCLickLink(state :boolean) {
    setIsOpen(state);
  
 }
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
    setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Portfolio", href: "/Portfolio" },
    { name: "About Me", href: "/About" },
    { name: "Contact", href: "/Contact" },
    { name: "Resume/CV", href: "/Resume" },
    { name: "Testimonials", href: "/Testimonials" },
  ];

  return (
    <div>
      <Head>
        <title>
          {`Visual Feasts: Graphic Cheff's UI/UX and Graphic Design Showcase`}
        </title>
        <meta
          name="description"
          content="Welcome to Graphic Cheff's Portfolio

Step into the creative kitchen of Graphic Cheff, where design meets innovation. With a passion for crafting visually stunning and user-friendly interfaces, Graphic Cheff brings a unique blend of artistry and functionality to every project. Explore a curated collection of UI/UX designs, graphic masterpieces, and digital experiences that showcase the perfect recipe for success. Whether you're looking for inspiration or seeking a talented designer to bring your vision to life, Graphic Cheff's portfolio is your ultimate destination for all things design."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="Graphic Design, UI/UX Design, Digital Art, Creative Portfolio, Visual Design, User Experience, User Interface, Web Design, Design Showcase, Graphic Cheff, Design Inspiration, Design Projects, Design Portfolio, Creative Solutions, Design Recipes"
        />
        <meta name="author" content="Daniel Alex" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <header className="flex h-16 py-2 px-6 flex-row justify-between md:px-8 lg:px-16 items-center md:h-20 lg:h-24 w-full bg-transparent md:bg-[#FFFFFF36]">
        <Link
          href="/"
          className="logo text-white text-xl md:text-2xl font-semibold"
        >
          Graphic Cheff
        </Link>
        <nav
          ref={menuRef}
          className={`${
            IsOpen ? "open pointer-events-auto" : "pointer-events-none"
          } sm:open pointer-events-auto`}
        >
          <svg
            width="18"
            height="18"
            className="h-6 w-6 flex close-icon"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onMouseDown={CloseNav}
          >
            <path
              d="M2 2L16.2418 16.0418"
              stroke="white"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M16.2417 2L1.9999 16.0418"
              stroke="white"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className={(index > 2 ? "sm:hidden" : "" )+(currentPath==link.href ? "active" : "")}
              onClick={()=>HandleCLickLink(false)}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <svg
          className={`${
            IsOpen ? " opacity-0 " : ""
          }md:w-9 w-6 h-5 transition-all sm:opacity-100`}
          width="37"
          height="26"
          viewBox="0 0 37 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onMouseDown={OpenNav}
        >
          <rect width="37" height="4" rx="2" fill="white" />
          <rect y="11" width="37" height="4" rx="2" fill="white" />
          <rect y="22" width="37" height="4" rx="2" fill="white" />
        </svg>
      </header>

      <main className="lg:pl-24 md:pl-20 lg:h-[calc(100svh-6rem)] md:h-[calc(100svh-5rem)] flex w-full">
  
        <LinkTree />
        {children}
      </main>
    </div>
  );
};

export default Layout;
