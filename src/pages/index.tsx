import AOS from "aos";
import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import "aos/dist/aos.css";
import PhoneHeader from "./Components/Phone-Header";
import Head from "next/head";
import Hero from "./Components/Hero";
import Services from "./Components/services";
import Game from "./Components/games";
import Testimonial from "./Components/Testimonial";
import Blogs from "./Components/Blogs";

const HomePage: React.FC = () => {

  const [nav, setNav] = useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);

  // Animation AOS setup
  useEffect(() => {
    AOS.init({
      // Global settings:
      disable: false,
      startEvent: "DOMContentLoaded",
      initClassName: "aos-init",
      animatedClassName: "aos-animate",
      useClassNames: false,
      disableMutationObserver: false,
      debounceDelay: 50,
      throttleDelay: 99,

      offset: 120,
      delay: 0,
      duration: 1000,
      easing: "ease",
      once: true,
      mirror: false,
      anchorPlacement: "top-bottom",
    });
  }, []);

  return (
    <>
    <Head>
      <title>Consol Pro</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

      <div className="overflow-x-hidden">
        <PhoneHeader nav={nav} closeNav={closeNav} />
        <div className="bg-custom">
          <Header openNav={openNav} />
          <Hero />
        </div>
        <div className="relative">
          <Services />
          <Game />
          <Testimonial />
          <Blogs />
        </div>
      </div>
    </>
  );
};

export default HomePage;
