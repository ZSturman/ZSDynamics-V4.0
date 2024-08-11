"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { FaUserTie } from "react-icons/fa";
import { HiDotsHorizontal } from "react-icons/hi";
import { GiEasel } from "react-icons/gi";
import { HiOutlineHomeModern } from "react-icons/hi2";
import HandDrawnLine from "./HanddrawnLine";
import { RefObject } from "react";

interface NavLinksProps {
  homeRef: React.RefObject<HTMLDivElement>;
  bioRef: React.RefObject<HTMLDivElement>;
  studioRef: React.RefObject<HTMLDivElement>;
  contactRef: React.RefObject<HTMLDivElement>;
  bottomInView?: boolean;
}

const NavLinks: React.FC<NavLinksProps> = ({homeRef, bioRef, studioRef, contactRef, bottomInView}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedContent = searchParams.get("content");

  const handleNavClick = (ref: RefObject<HTMLDivElement>) => {
    if (!ref.current) {
      return;
    }
    const page = ref.current.id; 
    router.replace(`?${new URLSearchParams({ content: page }).toString()}`, {
      scroll: false,
    });

    if (bottomInView) {
      const sheet = document.querySelector(`#${ref.current.id}Bottom`)
      if (sheet) {
        sheet.scrollIntoView({ behavior: "smooth"});
      } else {
        ref.current.scrollIntoView({ behavior: "smooth"});
      }
    } else if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth"});
    }
  
  };
  
  
  
  

  return (
    <div className="w-full flex flex-row justify-center items-start px-0 sm:px-3 md:px-10 lg:px-20 text-darkest-shade">
      <div className="flex flex-row justify-between items-start gap-0 md:gap-10 lg:gap-20 xl:gap-30">
        <button
          onClick={() => handleNavClick(homeRef)}
          className="flex flex-col items-center justify-center md:py-5 opacity-50 hover:opacity-70"
        >
          <div
            className={` md:w-20 p-3 text-lg md:text-3xl flex justify-center items-top rounded-lg  `}
          >
            <div className="flex flex-col justify-start items-center">
              <HiOutlineHomeModern />

              <div className="text-sm landscape:hidden md:landscape:block">
                Home
              </div>
              {selectedContent === "home" && <HandDrawnLine />}
            </div>
          </div>
        </button>
        <button
          onClick={() => handleNavClick(bioRef)}
          className="flex flex-col items-center justify-center md:py-5 opacity-50 hover:opacity-70"
        >
          <div
            className={` md:w-20 p-3 text-lg md:text-3xl flex justify-center items-center rounded-lg `}
          >
            <div className="flex flex-col justify-center items-center">
              <FaUserTie />
              <div className="text-sm landscape:hidden md:landscape:block">
                Bio
              </div>
              {selectedContent === "bio" && <HandDrawnLine />}
            </div>
          </div>
        </button>
        <button
          onClick={() => handleNavClick(studioRef)}
          className="flex flex-col items-center justify-center md:py-5 opacity-50 hover:opacity-70"
        >
          <div
            className={` md:w-20 p-3 text-lg md:text-3xl flex justify-center items-center rounded-lg `}
          >
            <div className="flex flex-col justify-center items-center">
              <GiEasel />
              <div className="text-sm landscape:hidden md:landscape:block">
                Studio
              </div>
              {selectedContent === "studio" && <HandDrawnLine />}
            </div>
          </div>
        </button>
        <button
          onClick={() => handleNavClick(contactRef)}
          className="flex flex-col items-center justify-center md:py-5 opacity-50 hover:opacity-70"
        >
          <div
            className={` md:w-20 p-3 text-lg md:text-3xl flex justify-center items-center rounded-lg $`}
          >
            <div className="flex flex-col justify-center items-center">
              <HiDotsHorizontal />
              <div className="text-sm landscape:hidden md:landscape:block">
                Contact
              </div>
              {selectedContent === "contact" && <HandDrawnLine />}
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default NavLinks;
