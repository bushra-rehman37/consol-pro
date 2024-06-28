/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from "react";
import Particle from "react-tsparticles";
import TextEffect from "react-text-transition";
import Image from "next/image";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const slides = [
    {
      content: (
        <>
        <div id="Hero"> 
          <div className="flex justify-between items-center h-64 relative" >
            <div className="relative">
              <Image
                className="ml-2 animate-spin-slow"
                src="/assets/Dawn.svg"
                alt="SuperToroid"
                width={250}
                height={250}
              />
            </div>

            <div className="flex justify-end w-full mt-180">
              <div className="flex flex-col items-end mr-8 md:mr-40 mt-60">
                {/* Up Div */}
                <div className="bg-transparent w-80 h-40 mb-4 flex items-center justify-center mt-40">
                  <div>
                    <Image
                      src="/assets/Spiral 1.svg"
                      alt="Description"
                      width={200}
                      height={200}
                      className="animate-spin-slow object-cover md:mr-20"
                      style={{ marginTop: "0%" }}
                    />
                  </div>
                </div>

                {/* Down Div */}
                <div className="w-96 h-40 flex items-center justify-center mt-32">
                  <div className="flex justify-center items-center h-screen">
                    <div className="mb-32 bg-black shadow-lg rounded-lg overflow-hidden">
                      {/* Bottom Bar */}
                      <div className="flex items-center justify-between bg-black p-2">
                        <div>
                          <Image
                            src="/assets/Ornament 19.svg"
                            alt="Signature"
                            width={150}
                            height={100}
                            className="rounded-full animate-bounce-slow"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[77vh] -mt-60 relative overflow-hidden md:ml-32">
            <Particle />
            <div className="w-[90vw] md:w-[80vw] grid h-full">
              <div
                className={`transform transition-transform duration-1000 ${
                  isAnimating
                    ? "translate-x-0 opacity-100"
                    : "translate-x-full opacity-0"
                }`}
              >
                <h1 className="text-white ml-8 md:ml-36">
                  <div className="flex items-center justify-center md:justify-start">
                    <span className="md:text-[5vw] text-3xl font-bold">
                      WE ARE
                    </span>
                    <Image
                      className="ml-4 md:ml-12 animate-spin-slow"
                      src="/assets/SuperToroid-Black-Matte.svg"
                      alt="SuperToroid"
                      width={70}
                      height={70}
                    />
                  </div>
                  <div className="-mt-8 flex items-center justify-center md:justify-start">
                    <span className="md:text-[5vw] text-3xl font-bold text-black text-shadow-white relative">
                      WEB DESIGN
                    </span>
                    <Image
                      className="-ml-2 md:-ml-6 mb-24 animate-bounce-slow"
                      src="/assets/element-181 2.svg"
                      alt="Element 181"
                      width={80}
                      height={80}
                    />
                  </div>
                  <div className="-mt-10 items-center justify-center md:justify-start">
                    <span className="md:text-[4.5vw] ml-32 md:ml-2 text-2xl font-thin tracking-widest">
                      A G E N C Y
                    </span>
                  </div>
                </h1>
                <TextEffect />
              </div>

              <div className="mb-16 justify-center items-center w-full h-full lg:mt-0 ml-8 md:ml-32">
                <div
                  className={`transform transition-transform duration-1000 ${
                    isAnimating
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-full opacity-0"
                  }`}
                >
                  <Image
                    src="/assets/Rectangle 10.png"
                    alt="user"
                    className="object-cover"
                    width={450}
                    height={60}
                  />
                </div>
              </div>
            </div>
          </div>
          </div>
        </>
      ),
    },
    {
      content: (
        <div className="">
          <div className="flex justify-between items-center h-64 relative">
            <div className="relative">
              <Image
                className="ml-2 animate-spin-slow"
                src="/assets/Spiral 1.png"
                alt="SuperToroid"
                width={250}
                height={250}
              />
            </div>

            <div className="flex justify-end w-full mt-180 ">
              <div className="flex flex-col items-end mr-8 md:mr-40 mt-32">
                {/* Up Div */}
                <div className="bg-transparent w-80 h-40 mb-4 flex items-center justify-center mt-40">
                  <div>
                    <Image
                      src="/assets/Ornament 14.png"
                      alt="Description"
                      width={200}
                      height={200}
                      className="animate-spin-slow object-cover md:mr-20"
                      style={{ marginTop: "0%" }}
                    />
                  </div>
                </div>

                {/* Down Div */}

      

                <div className="hidden md:flex w-96 h-36 items-center justify-center -ml-6 text-center mt-4">
  <div className="flex justify-center items-center h-screen">
    <div className="-mb-16 bg-black shadow-lg rounded-lg overflow-hidden">
      {/* Text */}
      <div className="p-4 flex-grow">
        <p className="text-lg text-white text-justify">
          Proin efficitur, mauris arcu condimentum pulvinar,
          velit orci arcu consectetur ligula, eget egestas magna
          mi ut arcu. Phasellus nec odio orci.
        </p>
      </div>
      <Image
        src="/assets/Line 3.svg"
        alt="user"
        className="object-cover ml-4"
        width={600}
        height={90}
      />
      {/* Bottom Bar */}
      <div className="flex items-center justify-between bg-black p-2">
        {/* Thumb */}
        <div>
          <Image
            src="/assets/thmb.png"
            alt="Logo"
            width={150}
            height={50}
          />
        </div>
        {/* Signature */}
        <div>
          <Image
            src="/assets/Signature 1.png"
            alt="Signature"
            width={150}
            height={50}
            className="rounded-full"
          />
        </div>
      </div>
    </div>
  </div>
</div>


                  {/* Down Div end*/}
              </div>
            </div>
          </div>

          <div className="w-[90vw] md:w-[80vw] grid h-full ">
            <div
              className={`transform transition-transform duration-1000 ${
                isAnimating
                  ? "translate-x-0 opacity-100"
                  : "translate-x-full opacity-0"
              }`}
            >
              <h1 className="text-white -mt-60 -ml-12 md:ml-60">
                <div className="flex items-center justify-center md:justify-start">
                  <span className="md:text-[5vw] text-3xl font-bold">
                    WE ARE
                  </span>
                  <Image
                    className="ml-4 md:ml-12 animate-spin-slow"
                    src="/assets/SuperToroid-Black-Matte.svg"
                    alt="SuperToroid"
                    width={70}
                    height={70}
                  />
                </div>
                <div className="-mt-8 flex items-center justify-center md:justify-start">
                  <span className="md:text-[5vw] text-3xl font-bold text-black text-shadow-white relative">
                    WEB DESIGN
                  </span>
                  <Image
                    className="-ml-2 md:-ml-6 mb-24 animate-bounce"
                    src="/assets/element-181 2.svg"
                    alt="Element 181"
                    width={80}
                    height={80}
                  />
                </div>
                <div className="-mt-10 items-center justify-center md:justify-start">
                  <span className="md:text-[4.5vw] text-2xl font-thin tracking-widest ml-40 md:ml-2">
                    A G E N C Y
                  </span>
                </div>
              </h1>
              <TextEffect />
            </div>

            <div className="justify-center items-center w-full h-full lg:mt-0 ml-8 md:ml-32 mt-20">
              <div
                className={`transform transition-transform duration-1000 ${
                  isAnimating
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-full opacity-0"
                }`}
              >
                <div className="mt-24">
                  <Image
                    src="/assets/induction.png"
                    alt="user"
                    className="object-cover"
                    width={150}
                    height={50}
                  />
                  <br />
                  <Image
                    src="/assets/Creative Design.png"
                    alt="user"
                    className="object-cover"
                    width={300}
                    height={80}
                  />{" "}
                  <br />
                  <Image
                    src="/assets/Line 3.svg"
                    alt="user"
                    className="object-cover"
                    width={300}
                    height={90}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  useEffect(() => {
    setIsAnimating(true);
    const slideInterval = setInterval(() => {
      handleNext();
    }, 10000);

    return () => {
      clearInterval(slideInterval);
    };
  }, []);

  const handleNext = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
      setIsAnimating(true);
    }, 500);
  };

  const handlePrev = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setCurrentSlide(
        (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
      );
      setIsAnimating(true);
    }, 500);
  };

  return (
    <div className="relative h-[77vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            currentSlide === index ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {slide.content}
        </div>
      ))}
      <div className="absolute bottom-4 w-full flex justify-center">
        <button
          className=" bg-transparent text-[#EDBC5A] p-3 rounded-full z-20"
          onClick={handlePrev}
        >
          <ArrowLeftIcon className="h-6 w-6" />
        </button>
        <button
          className=" bg-transparent text-[#EDBC5A] p-3 rounded-full z-20"
          onClick={handleNext}
        >
          <ArrowRightIcon className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
