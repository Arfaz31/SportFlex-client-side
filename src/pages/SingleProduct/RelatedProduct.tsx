import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { TInputs } from "@/type/Type";
import Lottie from "lottie-react";
import spinner from "@/assets/pIR8Sd9Ib1.json";
import { Star, Heart, ShoppingCart } from "lucide-react";
import Container from "@/components/shared/Container";
import { useGetRelatedProductsQuery } from "@/redux/api/product/productApi";
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
const RelatedProduct = () => {
  const { id } = useParams();
  const {
    data: relatedProductData,
    isLoading: isRelatedProductLoading,
    error,
  } = useGetRelatedProductsQuery(id);
  console.log(relatedProductData);

  if (error) {
    console.log(error);
  }
  return (
    <div>
      <Container className="my-28">
        <div className="relative">
          <h1 className="xl:text-4xl lg:text-3xl text-2xl font-bold text-center mb-10">
            RELATED PRODUCTS
          </h1>

          <div>
            <Carousel
              opts={{
                align: "start",
              }}
              className="w-full"
            >
              <CarouselContent>
                {isRelatedProductLoading
                  ? [...Array(8)].map((_, index) => (
                      <CarouselItem
                        key={index}
                        className="basis-1/2 md:basis-1/3 lg:basis-1/4"
                      >
                        <Card className="border-0 h-full rounded-none">
                          <CardContent className="relative overflow-hidden">
                            <div className="md:h-[380px] h-[315px] bg-[#f5f5f5] bg-opacity-50 w-full rounded-lg shadow-xl">
                              <div className="flex items-center justify-center h-full">
                                <Lottie animationData={spinner} loop={true} />
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </CarouselItem>
                    ))
                  : relatedProductData?.data
                      ?.slice(0, 8)
                      .map((product: TInputs) => (
                        <CarouselItem
                          key={product?._id}
                          className="basis-1/2 md:basis-1/3 lg:basis-1/4"
                        >
                          <div className="p-1">
                            <Card className="border-none">
                              <CardContent className="flex flex-col relative aspect-square items-center justify-center sm:p-2 p-1">
                                <div className="w-full">
                                  <div className="flex flex-col md:h-[380px] h-[315px] px-2 relative group bg-[#f5f5f5] hover:transition-transform md:hover:scale-105 hover:scale-100 hover:duration-500 hover:ease-in-out bg-opacity-50 w-full rounded-lg shadow-xl hover:border-2 hover:border-[rgb(0,205,229)]">
                                    <div className="flex items-center justify-center overflow-hidden relative group w-full md:h-[160px] h-[120px]">
                                      <img
                                        src={product?.image[0]}
                                        alt=""
                                        className="md:w-[120px] w-[100px] md:h-[120px] h-[100px] object-cover md:group-hover:scale-125 group-hover:scale-110 transition-transform duration-500 ease-in-out"
                                      />
                                    </div>
                                    <div className="px-0 space-y-2">
                                      <div className="flex items-center justify-center">
                                        {[...Array(5)].map((_, i) => (
                                          <Star
                                            key={i}
                                            className="md:size-5 size-[18px]"
                                            color="orange"
                                            fill="orange"
                                          />
                                        ))}
                                      </div>
                                      <p className="text-center md:text-lg text-sm">
                                        {product?.productName}
                                      </p>
                                      <p className="text-center md:text-lg text-sm">
                                        Brand: {product.brand}
                                      </p>
                                      <p className="text-center text-lg font-bold text-[#1abfdc]">
                                        $ {product.price}
                                      </p>
                                      <div className="hidden group-hover:block transition-transform duration-500 ease-in-out">
                                        <div className="flex sm:justify-around justify-center items-center lg:space-x-1 space-x-1">
                                          <div className="md:w-10 w-9 md:h-10 h-9 cursor-pointer hover:text-white hover:bg-[#00cde5] rounded-full transition-all duration-500 md:hover:scale-110 hover:scale-90 ease-in-out flex items-center justify-center p-2">
                                            <Heart className="w-8 h-8" />
                                          </div>
                                          <Link
                                            to={`/singleProduct/${product?._id}`}
                                          >
                                            <Button className="bg-gradient-to-r from-[#00cde5] to-[#10798b] text-xs md:text-sm text-white h-[40px] w-[84px] md:w-[110px] md:h-[45px]">
                                              View Details
                                            </Button>
                                          </Link>
                                          <div className="md:w-10 w-9 md:h-10 h-9 cursor-pointer hover:text-white hover:bg-[#00cde5] rounded-full transition-all duration-500 md:hover:scale-110 hover:scale-90 ease-in-out flex items-center justify-center p-2">
                                            <ShoppingCart className="w-8 h-8" />
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
                      ))}
              </CarouselContent>
              <CarouselPrevious className="absolute md:left-[25%] left-[0%] xl:-top-16 -top-14 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full cursor-pointer hover:bg-opacity-75 transition-opacity duration-300">
                &#9664;
              </CarouselPrevious>
              <CarouselNext className="absolute md:right-[25%] right-[0%] xl:-top-16 -top-14 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full cursor-pointer hover:bg-opacity-75 transition-opacity duration-300">
                &#9654;
              </CarouselNext>
            </Carousel>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default RelatedProduct;
