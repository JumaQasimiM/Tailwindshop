// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
// =========== images
import heroImg from "../assets/hero-img.jpg";
import hero from "../assets/hero.jpg";
import about from "../assets/about.jpg";
export default function Slider() {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{ delay: 2000 }}
      loop={true}
      pagination={{ clickable: true }}
      className="w-full h-120"
      //   onSwiper={(swiper) => console.log(swiper)}
      //   onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <div
          className="relative w-full h-full bg-center bg-cover"
          style={{ backgroundImage: `url(${hero})` }}
        >
          <div className="absolute inset-0 bg-black/40">
            {/* text over image */}
            <div
              className="absolute inset-0 flex flex-col items-center justify-center text-center
            text-white z-10"
            >
              <h2 className="text-4xl font-bold mb-4">Welcome to our site </h2>
              <p className="text-lg max-w-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus necessitatibus eligendi dolor quod at beatae tempore
                ex qui veniam, magni iusto autem animi.!
              </p>
              <button className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-full">
                View Product
              </button>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="relative w-full h-full bg-center bg-cover"
          style={{ backgroundImage: `url(${hero})` }}
        >
          <div className="absolute inset-0 bg-black/40">
            {/* text over image */}
            <div
              className="absolute inset-0 flex flex-col items-center justify-center text-center
            text-white z-10"
            >
              <h2 className="text-4xl font-bold mb-4">
                good Quality , good Price{" "}
              </h2>
              <p className="text-lg max-w-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus necessitatibus eligendi dolor quod at beatae tempore
                ex qui veniam, magni iusto autem animi.!
              </p>
              <button className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-full">
                View Product
              </button>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="relative w-full h-full bg-center bg-cover"
          style={{ backgroundImage: `url(${about})` }}
        >
          <div className="absolute inset-0 bg-black/40">
            {/* text over image */}
            <div
              className="absolute inset-0 flex flex-col items-center justify-center text-center
            text-white z-10"
            >
              <h2 className="text-4xl font-bold mb-4">
                Different Experence With us{" "}
              </h2>
              <p className="text-lg max-w-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus necessitatibus eligendi dolor quod at beatae tempore
                ex qui veniam, magni iusto autem animi.!
              </p>
              <button className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-full">
                View Product
              </button>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="relative w-full h-full bg-center bg-cover"
          style={{ backgroundImage: `url(${heroImg})` }}
        >
          <div className="absolute inset-0 bg-black/40">
            {/* text over image */}
            <div
              className="absolute inset-0 flex flex-col items-center justify-center text-center
            text-white z-10"
            >
              <h2 className="text-4xl font-bold mb-4">Welcome to our site </h2>
              <p className="text-lg max-w-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus necessitatibus eligendi dolor quod at beatae tempore
                ex qui veniam, magni iusto autem animi.!
              </p>
              <button className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-full">
                View Product
              </button>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
