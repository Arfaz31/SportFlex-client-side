import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import sliderImage1 from "./../../assets/slideImage6.jpg";
import sliderImage2 from "./../../assets/slideImage2.jpg";
import sliderImage4 from "./../../assets/slideImage4.png";
import { Button } from "../ui/button";
import Container from "../shared/Container";

const HeroSection = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );
  const sliderData = [
    {
      id: 1,
      image: sliderImage1,
      title: "TOP-TIER GYM EQUIPMENTS",
      offer: "Save Up To 40%",
    },
    {
      id: 2,
      image: sliderImage2,
      title: "WOMEN's ATHLETIC APPAREL",
      offer: "Save Up To 40%",
    },
    {
      id: 3,
      image: sliderImage4,
      title: "BASKETBALL GEAR FOR PROS",
      offer: "FLASH SALES",
    },
  ];

  return (
    <div className=" w-full">
      <Carousel
        plugins={[plugin.current]}
        className=" overflow-hidden"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className="w-full lg:h-[530px]  xl:h-[820px]">
          {sliderData.map((slider) => (
            <CarouselItem key={slider.id}>
              <Card className="bg-transparent border-0">
                <CardContent className="relative p-0 m-0 overflow-hidden group">
                  <div className="flex flex-shrink-0 items-center justify-center gap-0 p-0 m-0 animate-zoomOutToIn delay-200">
                    <img
                      src={slider?.image}
                      className=" object-cover object-center w-full xl:h-full lg:h-[600px] md:h-[450px]  h-[400px] size-fit transition-transform duration-500 "
                      alt=""
                    />
                  </div>
                  <Container className="w-full absolute xl:top-[270px]  lg:top-[160px] md:top-[160px]  top-[120px] right-0   md:left-32 left-6 xl:left-0 lg:space-y-3 space-y-2 ">
                    <p className="lg:text-2xl text-sm font-bold text-[#00cde5] ">
                      {slider.offer}
                    </p>
                    <h1 className="text-white xl:text-[48px] lg:text-4xl md:text-3xl  text-2xl font-bold  lg:tracking-wide lg:leading-normal max-w-[15ch] lg:pb-6 pb-3">
                      {slider.title}
                    </h1>
                    <Button className="bg-gradient-to-r from-[#00cde5] to-[#10798b]  lg:text-lg  text-xs text-white  h-[38px] w-[82px] lg:w-[120px] lg:h-[50px]">
                      SHOP NOW
                    </Button>
                  </Container>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute lg:left-8 left-5 lg:top-1/2 md:top-[50%] top-[80%]  transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full cursor-pointer hover:bg-opacity-75 transition-opacity duration-300">
          &#9664;
        </CarouselPrevious>
        <CarouselNext className="absolute lg:right-8 right-5 lg:top-1/2  md:top-[50%] top-[80%]  transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full cursor-pointer hover:bg-opacity-75 transition-opacity duration-300">
          &#9654;
        </CarouselNext>
      </Carousel>
    </div>
  );
};

export default HeroSection;
