import bike from "@/assets/discount/bike.jpg";
import slider1 from "@/assets/discount/slider11.png";
import slider2 from "@/assets/discount/slider2.png";
import slider3 from "@/assets/discount/slider3.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Button } from "@/components/ui/button";
import Container from "../Container";

import { useGetAllCatagoryQuery } from "@/redux/api/Catagory/CatagoryApi";
import { Link } from "react-router-dom";
import { TCatagory } from "@/type/Type";
import useCountDown from "../CountDown";

const XlFlashDiscountBanner = () => {
  const { data: catagoryData } = useGetAllCatagoryQuery(undefined);
  const endDate = `2024-12-30T00:00:00`;
  const { days, hours, minutes, seconds } = useCountDown(endDate);

  return (
    <Container>
      <div className="xl:h-[460px] h-[410px] bg-[#f5f5f5] relative">
        <div className="grid grid-cols-12 relative">
          <div className="col-span-6  group overflow-hidden w-full h-full">
            {catagoryData?.data?.slice(8, 9).map((cat: TCatagory) => (
              <Link to={`/products?categoryId=${cat._id}`} key={cat._id}>
                <div>
                  <img
                    className="group-hover:scale-110 transition-transform duration-500 ease-in-out object-cover object-center"
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
              </Link>
            ))}
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
        <div className="bg-white z-[1] xl:h-[340px] lg:h-[280px] xl:w-[70px] w-[60px] absolute xl:top-2 top-3 xl:left-[47.5%] left-[47%] rounded-t-full rounded-b-full">
          <div className="bg-[#10798b] pt-3 w-full xl:h-[50px] h-[45px] rounded-t-full">
            <div className="bg-white rounded-full w-[10px] h-[10px] mx-auto"></div>
            <hr className="bg-white mt-4" />
          </div>

          <div className=" grid grid-cols-1 gap-1 pt-1 divide-y-2  items-center ">
            <div>
              <p className="text-center font-bold xl:text-lg text-sm">{days}</p>
              <p className="text-center xl:text-base text-xs">Days</p>
            </div>
            <div className="pt-2">
              <p className="text-center font-bold xl:text-lg text-sm">
                {hours}
              </p>
              <p className="text-center xl:text-base text-xs">Hours</p>
            </div>
            <div className="pt-2">
              <p className="text-center font-bold xl:text-lg text-sm">
                {minutes}
              </p>
              <p className="text-center xl:text-base text-xs">Min</p>
            </div>
            <div className="pt-2 pb-1">
              <p className="text-center font-bold xl:text-lg text-sm">
                {seconds}
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
