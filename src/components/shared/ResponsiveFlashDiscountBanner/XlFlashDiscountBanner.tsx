import bike from "@/assets/discount/bike.jpg";
import slider1 from "@/assets/discount/slider11.png";
import slider2 from "@/assets/discount/slider2.png";
import slider3 from "@/assets/discount/slider3.png";
import { useCallback, useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Button } from "@/components/ui/button";
import Container from "../Container";

const XlFlashDiscountBanner = () => {
  const endDate = `2024-12-30T00:00:00`;
  //   useCallback: This hook memoizes the function to prevent it from being recreated on every render. It only recalculates if the endDate changes.
  const calculateTimeLeft = useCallback(() => {
    const difference = +new Date(endDate) - +new Date();
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }, [endDate]);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    // setInterval is used to call calculateTimeLeft every second (1000 milliseconds).
    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  return (
    <Container>
      <div className="xl:h-[460px] h-[410px] bg-[#f5f5f5] relative">
        <div className="grid grid-cols-12 ">
          <div className="col-span-6 relative group overflow-hidden w-full h-full">
            <img
              className="group-hover:scale-110 transition-transform duration-500 ease-in-out"
              src={bike}
              alt=""
            />
            <div className="absolute xl:top-24 top-16 xl:left-14  left-12 xl:space-y-3 space-y-2">
              <p className="xl:text-2xl text-xl font-bold text-white drop-shadow-XL">
                PRODUCT OF TRENDING
              </p>
              <h1 className="text-white font-bold xl:text-4xl text-3xl max-w-[15ch] drop-shadow-xl pb-4">
                MOUNTAIN BIKE SALE 50%
              </h1>
              <Button className="bg-gradient-to-r from-[#00cde5] to-[#10798b]  text-lg   text-white   w-[120px] h-[50px]">
                SHOP NOW
              </Button>
            </div>
          </div>
          <div className="col-span-6 relative group overflow-hidden w-full h-full">
            <Swiper
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper "
            >
              <SwiperSlide>
                <h1 className="xl:text-2xl text-xl font-semibold text-center pt-12">
                  Yeti SB6 T-Series X01 Eagle
                </h1>
                <img
                  className="group-hover:scale-125 transition-transform duration-500 ease-in-out w-[70%] h-[70%] mx-auto xl:pt-10 pt-5 xl:pb-10 pb-0"
                  src={slider1}
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <h1 className="xl:text-2xl text-xl font-semibold text-center pt-12">
                  Yeti SB10 T-Series X Giant Stance
                </h1>
                <img
                  className="group-hover:scale-125 transition-transform duration-500 ease-in-out w-[70%] h-[70%] mx-auto pt-10 pb-10"
                  src={slider2}
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <h1 className="xl:text-2xl text-xl font-semibold text-center pt-12">
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
        <div className="bg-white z-[1] xl:h-[370px] lg:h-[280px] xl:w-[70px] w-[60px] absolute xl:top-4 top-3 xl:left-[47.5%] left-[47%] rounded-t-full rounded-b-full">
          <div className="bg-[#10798b] pt-3 w-full xl:h-[50px] h-[45px] rounded-t-full">
            <div className="bg-white rounded-full w-[10px] h-[10px] mx-auto"></div>
            <hr className="bg-white mt-4" />
          </div>

          <div className=" grid grid-cols-1 xl:gap-2 gap-1 pt-2 divide-y-2  items-center ">
            <div>
              <p className="text-center font-bold xl:text-lg text-sm">
                {timeLeft.days}
              </p>
              <p className="text-center xl:text-base text-xs">Days</p>
            </div>
            <div className="pt-2">
              <p className="text-center font-bold xl:text-lg text-sm">
                {timeLeft.hours}
              </p>
              <p className="text-center xl:text-base text-xs">Hours</p>
            </div>
            <div className="pt-2">
              <p className="text-center font-bold xl:text-lg text-sm">
                {timeLeft.minutes}
              </p>
              <p className="text-center xl:text-base text-xs">Min</p>
            </div>
            <div className="pt-2 pb-1">
              <p className="text-center font-bold xl:text-lg text-sm">
                {timeLeft.seconds}
              </p>
              <p className="text-center xl:text-base text-xs">Secs</p>
            </div>
          </div>

          <div className="bg-[#10798b]  w-full xl:h-[50px] h-[45px] rounded-b-full mt-1 relative">
            <div className="bg-white rounded-full w-[10px] h-[10px] mx-auto relative top-7"></div>
            <hr className="bg-white xl:-mt-0 -mt-1 " />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default XlFlashDiscountBanner;
