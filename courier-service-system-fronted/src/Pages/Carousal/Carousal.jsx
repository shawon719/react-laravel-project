import React, { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

const Carousel = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // Remove navigation to disable the buttons
        modules={[Autoplay, Pagination]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/src/assets/img/carousal/h860.jpg" alt="" style={{ height: 700,width:1600 }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/src/assets/img/carousal/de4.jpg" alt="" style={{ height: 700,width:1600 }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/src/assets/img/carousal/fg.jpg" alt="" style={{ height: 700,width:1600}} />
        </SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0" ref={progressCircle}>
            {/* <circle cx="24" cy="24" r="20"></circle> */}
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
};

export default Carousel;
