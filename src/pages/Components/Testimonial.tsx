/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React, { useState, useEffect } from "react";

const testimonials = [
  {
    text: "I have been a loyal customer of this auto parts company for years and I cannot recommend them enough. Their extensive selection of high-quality parts and accessories, combined with their competitive prices.",
    name: "Davin Kinney",
    role: "Web designer",
    image: "/assets/Ellipse 29.jpg",
    leftImage: "/assets/pin -2.jpg",
  },
  {
    text: "I have been a loyal customer of this auto parts company for years and I cannot recommend them enough. Their extensive selection of high-quality parts and accessories, combined with their competitive prices.",
    name: "Marvin McKinney",
    role: "Web designer",
    image: "/assets/Ellipse 156.svg",
    leftImage: "/assets/img.png",
  },
  {
    text: "The customer service at this company is outstanding. Every time I need something, they go above and beyond to help me find it.",
    name: "Jane Doe",
    role: "Software Engineer",
    image: "/assets/Ellipse 157.jpg",
    leftImage: "/assets/pin-4.jpg",
  },
  // Add more testimonials as needed
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // Change the interval time as needed (5000ms = 5 seconds)

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  const getImagePositionClass = (index: number) => {
    switch (index) {
      case 0:
        return "top-2 sm:ml-20";
      case 1:
        return "top-20 sm:-ml-6";
      case 2:
        return "top-60 sm:ml-20";
      default:
        return "top-4";
    }
  };

  return (
   
    <div className="min-h-screen bg-black p-4 sm:p-8" id="projects">
      <div className="flex flex-col sm:flex-row items-stretch w-full  mx-auto space-y-8 sm:space-y-0">
      <br/>
        <div className="flex-shrink-0 sm:mr-8 mb-4 sm:mb-0 w-full sm:w-auto">
          <div className="relative w-full h-64 sm:w-[670px] sm:h-[500px]  md:w-[470px] md:h-[500px]  lg:w-[500px] lg:h-[500px]">
            <Image
              src={testimonials[currentIndex].leftImage}
              alt={testimonials[currentIndex].name}
               layout="fill"
               object-fit="cover"
              className="rounded-lg"
            />
          </div>
        </div>

        <div className="relative flex flex-col bg-[#1A1717] text-white p-4 sm:p-8 rounded-lg w-full  ">
          <div className="absolute left-4 flex flex-col items-center space-y-4 sm:mt-20 mt-2" >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`w-10 h-10 sm:w-24 sm:h-24 ${
                  index === currentIndex ? "opacity-100" : "opacity-50"
                } transition-opacity duration-300 ${getImagePositionClass(
                  index
                )}`}
              >
                <img
                  className="w-full h-full rounded-full object-cover"
                  src={testimonial.image}
                  alt={testimonial.name}
                />
              </div>
            ))}
          </div>
          <div className="flex-1 sm:ml-40 sm:mt-32 mt-8 ml-6">
            <div className="ml-8">
              <p className="text-sm sm:text-lg text-justify">
                {testimonials[currentIndex].text}
              </p>
              <p className="mt-2 sm:mt-4 font-semibold">
                {testimonials[currentIndex].name}
              </p>
              <p className="text-gray-400">{testimonials[currentIndex].role}</p>

              <div className="flex justify-between items-center mt-4">
                <div className="flex space-x-2">
                  <button onClick={handlePrev} className="rounded-full">
                    <Image
                      src="/assets/icon.png"
                      alt="prev"
                      className="object-cover"
                      width={30}
                      height={10}
                    />
                  </button>
                  <button onClick={handleNext} className="rounded-full">
                    <Image
                      src="/assets/icon (1).png"
                      alt="next"
                      className="object-cover"
                      width={30}
                      height={10}
                    />
                  </button>
                </div>
                <div className="hidden sm:block">
                  <Image
                    src="/assets/017-quote.svg"
                    alt="right-image"
                    className="object-cover animate-ping-slow"
                    width={70}
                    height={50}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Testimonial;
