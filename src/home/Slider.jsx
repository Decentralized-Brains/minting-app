import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";

//import images
import { SliderData } from "../data/Data";

const Slider = () => {
  return (
    <section id="projects" className="py-20  container">
      <div className="flex justify-center flex-col items-center">
        <h1
          data-aos="fade-up"
          className="text-4xl md:text-7xl font-fredoka text-white text-shadow-1 font-outline-2"
        >
          Collectable NFTs
        </h1>

        <div className="mt-20">
          <Swiper
            data-aos="fade-up"
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 300,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            navigation={true}
            modules={[EffectCoverflow, Pagination, Autoplay, Navigation]}
            className="w-full md:w-[650px] lg:w-[800px]"
          >
            {SliderData.map(({ id, img }) => (
              <SwiperSlide
                key={id}
                className="flex bg-center bg-cover max-w-[400px] max-h-[450px] border-4 overflow-hidden border-white rounded-lg relative"
              >
                <img src={img} alt="" className="max-w-full rounded-lg" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Slider;
