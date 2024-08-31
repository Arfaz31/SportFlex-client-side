import Container from "../shared/Container";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Heart, ShoppingCart, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { useGetFlashDealProductsQuery } from "@/redux/api/product/productApi";
import { TInputs } from "@/type/Type";
import FlashCountDownDiv from "./FlashCountDownDiv";
const FlashDeals = () => {
  const { data, error } = useGetFlashDealProductsQuery("");

  if (error) {
    console.log(error);
  }

  return (
    <Container className="mb-24 ">
      <div className="relative">
        <h1 className="xl:text-4xl lg:text-3xl text-2xl font-bold text-center mb-10">
          FLASH DEALS
        </h1>

        <div>
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full "
          >
            <CarouselContent>
              {data?.data?.map((item: TInputs) => {
                const discount = item.discount ?? 0;
                const discountPrice = Math.round(
                  item.price - item.price * (discount / 100)
                );
                return (
                  <CarouselItem
                    key={item._id}
                    className="basis-1/2 md:basis-1/3 lg:basis-1/4"
                  >
                    <div className="p-1">
                      <Card className="border-none ">
                        <CardContent className="flex flex-col relative aspect-square items-center justify-center sm:p-2 p-1">
                          <div className="w-full">
                            <div className=" flex flex-col  lg:h-[470px] md:h-[475px] sm:h-[380px] h-[395px] relative group  bg-[#f5f5f5] hover:transition-transform md:hover:scale-105 hover:scale-100 hover:duration-500 hover:ease-in-out  bg-opacity-50  w-full rounded-lg shadow-xl hover:border-2 hover:border-[rgb(0,205,229)]">
                              <div className="flex items-center justify-center overflow-hidden relative group w-full md:h-[180px] h-[130px]">
                                <div>
                                  <img
                                    src={item.image[0]}
                                    className="md:w-[145px] w-[110px]  md:h-[160px] h-[130px] object-cover md:group-hover:scale-125 group-hover:scale-110 transition-transform duration-500 ease-in-out"
                                    alt=""
                                  />
                                </div>
                              </div>
                              <p className="text-white xl:text-sm bg-red-600 xl:w-11 py-1 px-1 md:text-xs md:w-9  w-8 text-[10px] rounded-lg text-center absolute top-2 left-1">
                                {item.discount} %
                              </p>
                              <div className="px-3 space-y-2 ">
                                <FlashCountDownDiv
                                  endDate={item.discountEndingTime || ""}
                                ></FlashCountDownDiv>
                                <div className="flex items-center justify-center md:pt-6 pt-3">
                                  <Star
                                    className="md:size-5 size-[18px]"
                                    color="orange"
                                    fill="orange"
                                  />
                                  <Star
                                    className="md:size-5 size-[18px]"
                                    color="orange"
                                    fill="orange"
                                  />
                                  <Star
                                    className="md:size-5 size-[18px]"
                                    color="orange"
                                    fill="orange"
                                  />
                                  <Star
                                    className="md:size-5 size-[18px]"
                                    color="orange"
                                    fill="orange"
                                  />
                                  <Star
                                    className="md:size-5 size-[18px]"
                                    color="orange"
                                    fill="orange"
                                  />
                                </div>
                                <p className="text-center md:text-lg text-sm ">
                                  {item?.productName}
                                </p>
                                <p className="text-center md:text-lg text-sm">
                                  Brand: {item?.brand}
                                </p>
                                <div className="flex gap-4 items-center justify-center">
                                  <p className="text-lg font-bold text-[#1abfdc]">
                                    ${discountPrice}
                                  </p>
                                  <p className="text-center text-lg font-semibold text-gray-400 line-through">
                                    $ {item?.price}
                                  </p>
                                </div>
                                <div className="hidden group-hover:block transition-transform duration-500 ease-in-out ">
                                  <div className="flex sm:justify-around  justify-center items-center lg:space-x-1 space-x-1 ">
                                    <div className="md:w-10 w-9 md:h-10 h-9 cursor-pointer hover:text-white hover:bg-[#00cde5] rounded-full transition-all  duration-500 md:hover:scale-110 hover:scale-90 ease-in-out flex items-center justify-center p-2">
                                      <Heart className=" w-8  h-8" />
                                    </div>
                                    <Link to={`/singleProduct/${item?._id}`}>
                                      <Button className="bg-gradient-to-r from-[#00cde5] to-[#10798b] sm:text-xs text-[10px] md:text-sm text-white h-[38px] w-[78px] sm:h-[40px] sm:w-[84px] md:w-[110px] md:h-[45px]">
                                        View Details
                                      </Button>
                                    </Link>
                                    <div className="md:w-10 w-9 md:h-10 h-9 cursor-pointer hover:text-white hover:bg-[#00cde5] rounded-full transition-all  duration-500 md:hover:scale-110 hover:scale-90 ease-in-out flex items-center justify-center p-2">
                                      <ShoppingCart className="w-8   h-8" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="absolute md:left-[25%] left-[12%] xl:-top-16 -top-14  transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full cursor-pointer hover:bg-opacity-75 transition-opacity duration-300">
              &#9664;
            </CarouselPrevious>
            <CarouselNext className="absolute md:right-[25%] right-[12%] xl:-top-16  -top-14  transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full cursor-pointer hover:bg-opacity-75 transition-opacity duration-300">
              &#9654;
            </CarouselNext>
          </Carousel>
        </div>
      </div>
    </Container>
  );
};

export default FlashDeals;
