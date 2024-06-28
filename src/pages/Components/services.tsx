/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Virtual } from "swiper/modules"; // Import core instead of modules
import "swiper/swiper-bundle.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/virtual";
import Image from "next/image";

const Services: React.FC = () => {
  const [slideNumbers, setSlideNumbers] = useState<number[]>([]);
  const virtualSlides = Array.from({ length: 6 }).map(
    (_, index) => `Slide ${index + 1}`
  );
  const topics = [
    "Web Design & Development",
    "Advertising and Campaigns",
    "Consulting and Development",
    "Editing and Content Creation",
    "Branding and Identity Design",
    "Web Design & Development",
    "Advertising and Marketing",
  ];

  useEffect(() => {
    setSlideNumbers(virtualSlides.map((_, i) => i + 1));
  }, [virtualSlides]);

  const onSlideClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const slide = event.currentTarget.closest(".swiper-slide");
    if (slide) {
      slide.classList.toggle("active");
    }
  };

  return (
    <>
      <div className="bg-custom pt-[4rem] md:pt-[8rem] pb-[5rem] i" id="services">
        <div className="container px-10 mx-auto my-12 w-11/12 bg-[#1A1717] relative">
          <br />
          <div className="flex flex-col items-center text-center mb-12 relative">
  <div className="flex flex-col items-center space-y-4">
    <div className="flex items-center space-x-2">
      <span className="text-3xl md:text-4xl lg:text-4xl text-white">Unique</span>
      <span className="font-bold text-3xl md:text-4xl lg:text-4xl text-white">Ideas</span>
      <Image 
        src="/assets/bg-1.png"
        alt="Image 1"
        width={165}
        height={50}
        className="w-24 md:w-auto"
      />
    </div>
    <div className="flex items-center space-x-2">
      <Image
        className="animate-bounce w-8 md:w-auto"
        src="/assets/arrow.svg"
        alt="Image 2"
        width={30}
        height={30}
      />
      <span className="font-bold text-3xl md:text-4xl lg:text-4xl text-white">For your</span>
      <span className="text-3xl md:text-4xl lg:text-4xl text-white">Business.</span>
    </div>
  </div>

  <div className="absolute mt-6 right-0">
    <Image
      className="-mt-12 w-24 md:w-auto"
      src="/assets/Capa 1.png"
      alt="Right Side Image"
      width={400}
      height={50}
    />
  </div>
</div>


          <Swiper
            modules={[Navigation, Pagination, Virtual]}
            slidesPerView={3}
            spaceBetween={0}
            virtual
            centeredSlides
            navigation
            breakpoints={{
                400:{
                    slidesPerView: 1,
                    spaceBetween: 10,
                       },
                500:{
             slidesPerView: 1,
             spaceBetween: 10,
                },
              600: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
              // when window width is >= 640px
              640: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              // when window width is >= 768px
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              // when window width is >= 1024px
              1024: {
                slidesPerView: 4,
                spaceBetween: -50,
              },
            }}
            pagination={false} // Disable pagination
            id="mySwiperID"
          >
            {virtualSlides.map((_slide, i) => (
              <SwiperSlide key={i} virtualIndex={i} onClick={onSlideClick}>
                <div className="group border border-white h-[410px] w-[275px] flex flex-col justify-between p-4 bg-[#33333]">
                  <div>
                    <h3 className="header text-3xl  text-white">{topics[i]}</h3>
                    <p className="text-justify text-lg mt-10 text-white">
                      Suspendisse sit amet neque euismod, convallis quam eget,
                      dignissim massa. Aliquam. Suspendisse sit amet neque
                      euismod, convallis quam eget, dignissim massa. Aliquam.
                    </p>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-black group-hover:bg-[#EDBC5A] group-hover:animate-bounce transition-colors duration-300">
                      <img
                        className="w-6 h-6 rounded-full"
                        src="/assets/Arrow.png"
                        alt="Description of your image"
                      />
                    </div>
                    <h2 className="numbers text-white text-center leading-12 text-5xl group-hover:text-[#EDBC5A]  group-hover:animate-bounce transition-colors duration-300">
                      0{slideNumbers[i]}
                    </h2>
                  </div>
                </div>
                <div className="bg-[#1A1717] h-12 w-full"> </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="bg-[#1A1717] h-12 w-full"> </div>
        </div>
      </div>


    </>
  );
};

export default Services;
