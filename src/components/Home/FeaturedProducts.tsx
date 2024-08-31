import Container from "../shared/Container";
import { MoveRight } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { useGetAllProductsQuery } from "@/redux/api/product/productApi";
import Lottie from "lottie-react";
import spinner from "@/assets/pIR8Sd9Ib1.json";
import { TInputs } from "@/type/Type";

import FeaturedProductCard from "./FeaturedProductCard";

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
            : data?.data?.products
                ?.slice(0, 10)
                .map((item: TInputs) => (
                  <FeaturedProductCard key={item._id} item={item} />
                ))}
        </div>

        <div className="flex items-center justify-center mt-28">
          <Link to={`/products`}>
            <Button className="bg-gradient-to-r from-[#00cde5] to-[#10798b] text-sm text-white w-[220px] h-[50px] font-semibold">
              VIEW MORE PRODUCTS{" "}
              <span className="text-white pl-2">
                <MoveRight />
              </span>
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default FeaturedProducts;
