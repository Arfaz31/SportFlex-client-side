import Container from "../shared/Container";
import { Star, Heart, ShoppingCart, MoveRight } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { useGetAllProductsQuery } from "@/redux/features/product/productApi";
import Lottie from "lottie-react";
import spinner from "@/assets/pIR8Sd9Ib1.json";
import { TInputs } from "@/type/Type";
const FeaturedProducts = () => {
  const { data, isLoading } = useGetAllProductsQuery(undefined);

  return (
    <div className="mb-28">
      <Container>
        <h1 className="xl:text-4xl lg:text-3xl text-2xl font-bold text-center mb-16">
          FEATURED PRODUCTS
        </h1>
        <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:gap-6 md:grid-cols-3 grid-cols-2 gap-3  w-full">
          {isLoading
            ? [...Array(10)].map((_, index) => (
                <div
                  key={index}
                  className="col-span-1 flex flex-col md:h-[380px] h-[315px] relative group bg-[#f5f5f5] bg-opacity-50 w-full rounded-lg shadow-xl"
                >
                  <div className="flex items-center justify-center overflow-hidden relative w-full h-full">
                    <Lottie animationData={spinner} loop={true} />
                  </div>
                </div>
              ))
            : data?.data?.map((item: TInputs) => (
                <div
                  className="col-span-1 flex flex-col md:h-[380px] h-[315px] relative group bg-[#f5f5f5] hover:transition-transform md:hover:scale-105 hover:scale-100 hover:duration-500 hover:ease-in-out bg-opacity-50 w-full rounded-lg shadow-xl hover:border-2 hover:border-[rgb(0,205,229)] px-2"
                  key={item._id}
                >
                  <div className="flex items-center justify-center overflow-hidden relative group w-full md:h-[160px] h-[120px]">
                    <div>
                      <img
                        src={item.image[0]}
                        alt=""
                        className="md:w-[120px] w-[100px] md:h-[120px] h-[100px] object-cover md:group-hover:scale-125 group-hover:scale-110 transition-transform duration-500 ease-in-out"
                      />
                    </div>
                  </div>
                  <div className="px-0 space-y-2">
                    <div className="flex items-center justify-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="md:w-[20px] w-[18px] h-[18px]"
                          color="orange"
                          fill="orange"
                        />
                      ))}
                    </div>
                    <p className="text-center md:text-lg text-sm">
                      {item.productName}
                    </p>
                    <p className="text-center md:text-lg text-sm">
                      Brand: {item.brand}
                    </p>
                    <p className="text-center text-lg font-bold text-[#1abfdc]">
                      $ {item.price}
                    </p>
                    <div className="hidden group-hover:block transition-transform duration-500 ease-in-out">
                      <div className="flex sm:justify-around justify-center items-center lg:space-x-1 space-x-1">
                        <div className="md:w-10 w-9 md:h-10 h-9 cursor-pointer hover:text-white hover:bg-[#00cde5] rounded-full transition-all duration-500 md:hover:scale-110 hover:scale-90 ease-in-out flex items-center justify-center p-2">
                          <Heart className="w-8 h-8" />
                        </div>
                        <Link to={`/singleProduct/${item._id}`}>
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
              ))}
        </div>

        <div className="flex items-center justify-center mt-28">
          <Button className="bg-gradient-to-r from-[#00cde5] to-[#10798b] text-sm text-white w-[220px] h-[50px] font-semibold">
            VIEW MORE PRODUCTS{" "}
            <span className="text-white pl-2">
              <MoveRight />
            </span>
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default FeaturedProducts;
