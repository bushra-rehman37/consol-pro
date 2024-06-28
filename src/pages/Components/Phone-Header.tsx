import { XMarkIcon } from "@heroicons/react/20/solid";
import React from "react";
import { Link } from "react-scroll/modules";

interface Props {
  nav: boolean;
  closeNav: () => void;
}

const PhoneHeader = ({ nav, closeNav }: Props) => {
  const navAnimation = nav ? "translate-x-0" : "translate-x-[-100%]";

  return (
    <div
      className={`fixed ${navAnimation} transform transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[1000000] bg-[#09101a]`}
    >
      <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center">
      <div className="nav-link-mobile">
            <Link activeClass="active" to="Hero" spy={true} offset={50} smooth={true} duration={50}>Home  </Link>
        </div>

      <div className="nav-link-mobile">
            <Link activeClass="active" to="services" spy={true} offset={50} smooth={true} duration={50}> Services </Link>
      </div>
      <div className="nav-link-mobile">
            <Link activeClass="active" to="game" spy={true} offset={50} smooth={true} duration={50}> Game </Link>
      </div>
      <div className="nav-link-mobile">
            <Link activeClass="active" to="projects" spy={true} offset={50} smooth={true} duration={50}> Projects </Link>
      </div>
      <div className="nav-link-mobile">
            <Link activeClass="active" to="blogs" spy={true} offset={50} smooth={true} duration={50}> Blog </Link>
      </div>
      </div>
      <div
        onClick={closeNav}
        className="absolute z-[100000000] cursor-pointer top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-yellow-400"
      >
        <XMarkIcon />
      </div>
    </div>
  );
};

export default PhoneHeader;
