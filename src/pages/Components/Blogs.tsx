import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/virtual";
import SwiperCore, { Navigation, Pagination, Virtual } from "swiper/modules";
import Image from "next/image";

const slides = [
  {
    date: "June 24, 2024",
    heading: "Will you be attending Affiliate Summit Europe?",
    image: "/assets/img-1.jpg",
  },
  {
    date: "June 25, 2024",
    heading: "Will you be attending Affiliate Summit Europe?",
    image: "/assets/img-2.jpg",
  },
  {
    date: "June 26, 2024",
    heading: "Will you be attending Affiliate Summit Europe?",
    image: "/assets/img-3.jpg",
  },
  {
    date: "June 27, 2024",
    heading: "Will you be attending Affiliate Summit Europe?",
    image: "/assets/img-2.jpg",
  },
  {
    date: "June 28, 2024",
    heading: "Will you be attending Affiliate Summit Europe?",
    image: "/assets/img-3.jpg",
  },
  
];

const Blogs = () => {
  return (
    <>
    <div className="container mx-auto py-10 bg-black sm:mt-20" id="blogs">
          <h2 className=" text-3xl md:text-4xl lg:text-4xl font-bold text-center text-white mb-8 sm:text-3xl">
              Our Latest News & Blog <br /> Get Every Updates
          </h2>
          <Swiper
              modules={[Navigation, Pagination]}
              slidesPerView={1}
              spaceBetween={30}
              centeredSlides={true}
              loop={true}
              navigation={{
                  prevEl: ".swiper-button-prev",
                  nextEl: ".swiper-button-next",
              }}
              pagination={false} // Disable pagination dots
              breakpoints={{
                  768: {
                      slidesPerView: 3,
                      spaceBetween: 30,
                  },
              }}
          >
              {slides.map((slide, index) => (
                  <SwiperSlide key={index}>
                      {({ isActive }) => (
                          <div
                              className={`p-4 bg-transparent ml-8 mr-8 lg:ml-2 lg:mr-2 rounded-lg shadow-lg transform transition-transform duration-300 ease-in-out ${isActive ? "scale-105" : "scale-95"}`}
                          >
                              <div className="flex flex-col items-start">
                                  <span className="text-white">{slide.date}</span>
                                  <h3 className="mt-2 text-xl font-bold text-white">
                                      {slide.heading}
                                  </h3>
                                  {isActive && (
                                      <p className="mt-2 text-white text-justify">
                                          I have been a loyal customer of this auto parts company
                                          for years and I cannot recommend them enough. Their
                                          extensive selection.
                                      </p>
                                  )}
                                  <div className="mt-4 w-full h-48 relative">
                                      <Image
                                          src={slide.image}
                                          alt={slide.heading}
                                          layout="fill"
                                          object-fit="cover"
                                          className="rounded-lg" />
                                  </div>
                              </div>
                          </div>
                      )}
                  </SwiperSlide>
              ))}
              <div className="swiper-button-prev swiper-button text-white"></div>
              <div className="swiper-button-next swiper-button text-white"></div>
          </Swiper>
          <style jsx global>{`
        .swiper-button {
          color: #fff;
          &.swiper-button-prev,
          &.swiper-button-next {
            top: 50%;
            width: calc(var(--swiper-navigation-size) / 44 * 27);
            height: calc(var(--swiper-navigation-size) / 44 * 27);
            margin-top: -20px;
            &:after {
              font-size: var(--swiper-navigation-size);
            }
          }
        }
      `}</style>
      </div></>
  );
};

export default Blogs;
