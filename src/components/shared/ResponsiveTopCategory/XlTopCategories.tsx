import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import Lottie from "lottie-react";
import spinner from "@/assets/pIR8Sd9Ib1.json";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Container from "@/components/shared/Container";
import { useGetAllCatagoryQuery } from "@/redux/features/Catagory/CatagoryApi";
import { TCatagory } from "@/type/Type";
import { Link } from "react-router-dom";

const XlTopCategories = () => {
  const { data: catagoryData, isLoading } = useGetAllCatagoryQuery(undefined);

  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  const placeholderCount = catagoryData ? catagoryData.length : 12;
  return (
    <div className="my-24">
      <h1 className="xl:text-4xl lg:text-3xl text-2xl font-bold text-center mb-16">
        TOP CATEGORIES
      </h1>
      <div>
        <Container>
          <Carousel
            plugins={[plugin.current]}
            className="overflow-hidden w-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              {isLoading
                ? [...Array(placeholderCount || 1)].map((_, index) => (
                    <CarouselItem
                      key={index}
                      className="h-[260px] basis-1/1 md:basis-1/4 lg:basis-1/6"
                    >
                      <Card className="border-0 h-full rounded-none">
                        <CardContent className="relative overflow-hidden">
                          <div className="h-[260px] bg-[#f5f5f5] bg-opacity-50 w-full rounded-lg shadow-xl">
                            <div className="flex items-center justify-center h-full">
                              <Lottie animationData={spinner} loop={true} />
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))
                : catagoryData?.data?.map((cat: TCatagory) => (
                    <CarouselItem
                      key={cat?._id}
                      className="h-[260px]   md:basis-1/3 lg:basis-1/5 "
                    >
                      <Card className="border-0 h-full  rounded-none ">
                        <CardContent className="relative overflow-hidden ">
                          <div className="flex flex-col items-center justify-center gap-4 h-[260px] ">
                            <Link to={`/products?categoryId=${cat._id}`}>
                              <div className="border-2 border-[#00cde5] bg-[#f5f5f5] rounded-full w-36 h-36 flex items-center justify-center overflow-hidden relative group">
                                <div>
                                  <img
                                    src={cat?.image}
                                    alt=""
                                    className="w-[95px] h-[95px] object-cover group-hover:scale-125 transition-transform duration-500 ease-in-out"
                                  />
                                </div>
                              </div>
                            </Link>
                            <div>
                              <p className="lg:text-2xl text-xl font-semibold text-center pt-2">
                                {cat?.catagoryName}
                              </p>
                              <Link to={`/products?categoryId=${cat._id}`}>
                                <p className="w-60 text-center text-base text-gray-600 hover:text-[#00cde5] transition-all duration-500 ease-in-out cursor-pointer pt-1">
                                  View More
                                </p>
                              </Link>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full cursor-pointer hover:bg-opacity-75 transition-opacity duration-300">
              &#9664;
            </CarouselPrevious>
            <CarouselNext className="absolute right-0 top-1/2  transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full cursor-pointer hover:bg-opacity-75 transition-opacity duration-300">
              &#9654;
            </CarouselNext>
          </Carousel>
        </Container>
      </div>
    </div>
  );
};

export default XlTopCategories;
