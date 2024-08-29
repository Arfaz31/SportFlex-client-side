import bike from "@/assets/discount/bike.jpg";
import slider1 from "@/assets/discount/slider11.png";
import slider2 from "@/assets/discount/slider2.png";
import slider3 from "@/assets/discount/slider3.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Button } from "@/components/ui/button";
import { useGetAllCatagoryQuery } from "@/redux/features/Catagory/CatagoryApi";
import { Link } from "react-router-dom";
import { TCatagory } from "@/type/Type";
import useCountDown from "../CountDown";

const SmFlashDiscount = () => {
  const { data: catagoryData } = useGetAllCatagoryQuery(undefined);
  const endDate = `2024-12-30T00:00:00`;
  const { days, hours, minutes, seconds } = useCountDown(endDate);

  return (
    <div className="h-[740px] bg-[#f5f5f5] relative">
      <div className="relative group overflow-hidden w-full h-[50%]">
        {catagoryData?.data?.slice(8, 9).map((cat: TCatagory) => (
          <Link to={`/products?categoryId=${cat._id}`} key={cat._id}>
            <img
              className="group-hover:scale-110 transition-transform duration-500 h-full ease-in-out w-full object-cover object-center"
              src={bike}
              alt=""
            />
            <div className="absolute top-16 left-10 space-y-1">
              <p className="text-lg font-bold text-white drop-shadow-xl">
                PRODUCT OF TRENDING
              </p>
              <h1 className="text-white font-bold text-2xl max-w-[15ch] drop-shadow-xl pb-4">
                MOUNTAIN BIKE SALE 50%
              </h1>
              <Button className="bg-gradient-to-r from-[#00cde5] to-[#10798b] text-sm text-white w-[100px] h-[50px]">
                SHOP NOW
              </Button>
            </div>
          </Link>
        ))}
      </div>

      <div className="flex justify-center items-center -mt-6">
        <div className="bg-white z-[1] h-[50px] w-[320px] rounded-full flex items-center shadow-lg">
          <div className="bg-[#10798b] h-full w-[50px] rounded-l-full flex items-center justify-center">
            <div className="bg-white rounded-full w-[10px] h-[10px]"></div>
          </div>
          <div className="flex items-center justify-center flex-grow gap-4 divide-x-2 px-3">
            <div>
              <p className="text-center font-bold text-sm">{days}</p>
              <p className="text-center text-xs">Days</p>
            </div>
            <div className="pl-3">
              <p className="text-center font-bold text-sm">{hours}</p>
              <p className="text-center text-xs">Hours</p>
            </div>
            <div className="pl-3">
              <p className="text-center font-bold text-sm">{minutes}</p>
              <p className="text-center text-xs">Min</p>
            </div>
            <div className="pl-3">
              <p className="text-center font-bold text-sm">{seconds}</p>
              <p className="text-center text-xs">Secs</p>
            </div>
          </div>
          <div className="bg-[#10798b] h-full w-[50px] rounded-r-full flex items-center justify-center">
            <div className="bg-white rounded-full w-[10px] h-[10px]"></div>
          </div>
        </div>
      </div>

      <div className="relative group overflow-hidden w-full h-[50%]">
        <Swiper
          spaceBetween={30}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <h1 className="text-lg font-semibold text-center pt-10">
              Yeti SB6 T-Series X01 Eagle
            </h1>
            <img
              className="group-hover:scale-125 transition-transform duration-500 ease-in-out w-[70%] h-[60%] mx-auto pt-2 pb-0"
              src={slider1}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <h1 className="text-lg font-semibold text-center pt-10">
              Yeti SB10 T-Series X Giant Stance
            </h1>
            <img
              className="group-hover:scale-125 transition-transform duration-500 ease-in-out w-[70%] h-[70%] mx-auto pt-10 pb-10"
              src={slider2}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <h1 className="text-lg font-semibold text-center pt-10">
              Ardo-19 Giant TCX Cyclocros
            </h1>
            <img
              className="group-hover:scale-125 transition-transform duration-500 ease-in-out w-[70%] h-[70%] mx-auto pt-10 pb-10"
              src={slider3}
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default SmFlashDiscount;
