import { Bars3Icon } from "@heroicons/react/20/solid";
import React from "react";
import { Link } from "react-scroll/modules";
import Hero from "./Hero";
import Services from "./services";
import Game from "./games";
import Testimonial from "./Testimonial";
import Blogs from "./Blogs";
interface Props {
  openNav: () => void;
}

const Header = ({ openNav }: Props) => {
  return (
    <div className="relative w-full z-[10000] top-0 h-[12vh] bg-transparent">
    <div className="flex items-center justify-between w-[80%] mx-auto h-full">
      <div className="flex items-center">
        <img src="/assets/Logo.png" alt="Logo" className="h-8 w-8" />
        <h1 className="ml-3 cursor-pointer text-[25px] text-white font-bold">
          Consal<span className="text-white font-thin">Pro</span>
        </h1>
      </div>
      <div className="hidden md:flex space-x-16">
        
      
      <div className="nav-link">
            <Link activeClass="active" to="Hero" spy={true} offset={50} smooth={true} duration={50}>Home  </Link>
        </div>

      <div className="nav-link">
            <Link activeClass="active" to="services" spy={true} offset={50} smooth={true} duration={50}> Services </Link>
      </div>
      <div className="nav-link">
            <Link activeClass="active" to="game" spy={true} offset={50} smooth={true} duration={50}> Game </Link>
      </div>
      <div className="nav-link">
            <Link activeClass="active" to="projects" spy={true} offset={50} smooth={true} duration={50}> Projects </Link>
      </div>
      <div className="nav-link">
            <Link activeClass="active" to="blogs" spy={true} offset={50} smooth={true} duration={50}> Blog </Link>
      </div>


      </div>
      <div onClick={openNav} className="md:hidden">
        <Bars3Icon className="w-8 h-8 cursor-pointer text-yellow-300" />
      </div>
    </div>
  </div>
  );
};

export default Header;