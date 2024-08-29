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
const MdFlashDiscount = () => {
  const { data: catagoryData } = useGetAllCatagoryQuery(undefined);
  const endDate = `2024-12-30T00:00:00`;
  const { days, hours, minutes, seconds } = useCountDown(endDate);

  return (
    <div className="h-[940px] bg-[#f5f5f5] relative">
      <div className=" ">
        {catagoryData?.data?.slice(8, 9).map((cat: TCatagory) => (
          <Link to={`/products?categoryId=${cat._id}`} key={cat._id}>
            <div className=" relative group overflow-hidden w-full h-full">
              <img
                className="group-hover:scale-110 transition-transform duration-500 ease-in-out h-[430px] w-full"
                src={bike}
                alt=""
              />
              <div className="absolute top-24 left-14 space-y-3">
                <p className="text-xl font-bold text-white drop-shadow-XL">
                  PRODUCT OF TRENDING
                </p>
                <h1 className="text-white font-bold text-3xl max-w-[15ch] drop-shadow-xl pb-4">
                  MOUNTAIN BIKE SALE 50%
                </h1>
                <Button className="bg-gradient-to-r from-[#00cde5] to-[#10798b] text-base text-white  w-[110px] h-[50px]">
                  SHOP NOW
                </Button>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div>
        <div className=" relative group overflow-hidden w-full h-full">
          <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper "
          >
            <SwiperSlide>
              <h1 className="text-xl font-semibold text-center pt-12">
                Yeti SB6 T-Series X01 Eagle
              </h1>
              <img
                className="group-hover:scale-125 transition-transform duration-500 ease-in-out w-[70%] h-[60%] mx-auto pt-2 pb-0"
                src={slider1}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <h1 className="text-xl font-semibold text-center pt-12">
                Yeti SB10 T-Series X Giant Stance
              </h1>
              <img
                className="group-hover:scale-125 transition-transform duration-500 ease-in-out w-[70%] h-[70%] mx-auto pt-10 pb-10"
                src={slider2}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <h1 className="text-xl font-semibold text-center pt-12">
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

      <div className="bg-white z-[1] h-[330px] w-[65px] absolute top-12 left-[85%] rounded-t-full rounded-b-full">
        <div className="bg-[#10798b] pt-3 w-full h-[50px] rounded-t-full">
          <div className="bg-white rounded-full w-[10px] h-[10px] mx-auto"></div>
          <hr className="bg-white mt-4" />
        </div>

        <div className=" grid grid-cols-1 gap-2 pt-2 divide-y-2  items-center ">
          <div>
            <p className="text-center font-bold text-base">{days}</p>
            <p className="text-center text-sm">Days</p>
          </div>
          <div className="pt-2">
            <p className="text-center font-bold text-base">{hours}</p>
            <p className="text-center text-sm">Hours</p>
          </div>
          <div className="pt-2">
            <p className="text-center font-bold text-base">{minutes}</p>
            <p className="text-center text-sm">Min</p>
          </div>
          <div className="pt-2 pb-1">
            <p className="text-center font-bold text-base">{seconds}</p>
            <p className="text-center text-sm">Secs</p>
          </div>
        </div>

        <div className="bg-[#10798b]  w-full h-[50px] rounded-b-full mt-1 relative">
          <div className="bg-white rounded-full w-[10px] h-[10px] mx-auto relative top-7"></div>
          <hr className="bg-white  " />
        </div>
      </div>
    </div>
  );
};

export default MdFlashDiscount;
