import bag_1 from "../assets/images/bag-1.webp";
import bag_2 from "../assets/images/bag-2.webp";
import bag_3 from "../assets/images/bag-3.webp";
import bag_4 from "../assets/images/bag-4.webp";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import { Pagination, Navigation, Autoplay } from "swiper/modules";

const Banner: React.FC = () => {
  const bags: string[] = [bag_1, bag_2, bag_3, bag_4];
  const getFullYear: number = new Date().getFullYear();

  return (
    <div className="md:mt-[77px] mt-[73px] w-full max-w-[1200px] mx-auto">
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper relative"
      >
        {bags.map((bag, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative w-full h-[400px]">
              <img
                src={bag}
                alt={`bag-${idx}`}
                className="object-contain w-full h-full"
              />
              {/* Text overlay */}
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-20">
                <h2 className="text-[18px] font-semibold text-white">
                  Top Branded
                </h2>
                <h1 className="text-2xl font-bold my-2 text-white">
                  Best Bags {getFullYear}
                </h1>
                <button className="text-[14px] uppercase text-white bg-[#F76B6A] hover:bg-[#d8111b] transition-all px-4 py-2 rounded-md">
                  Shop Now
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
