import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Container from "../Container";

import { Star, Heart, ShoppingCart } from "lucide-react";

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useGetAllCatagoryQuery } from "@/redux/api/Catagory/CatagoryApi";
import { useEffect, useState } from "react";
import { useGetAllProductsQuery } from "@/redux/api/product/productApi";
import { TCatagory, TInputs } from "@/type/Type";
import { useAppDispatch } from "@/redux/hook";
import { addToCart } from "@/redux/features/cartSlice";
const MdNewProduct = () => {
  const { data: categoryData } = useGetAllCatagoryQuery(undefined);
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(
    undefined
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (categoryData?.data.length >= 3) {
      setSelectedCategory(categoryData.data[2]._id);
    }
  }, [categoryData]);

  const { data: allProductData, error } = useGetAllProductsQuery({
    categoryId: selectedCategory,
  });

  if (error) {
    console.log(error);
  }

  return (
    <Container>
      <div>
        <h1 className="text-2xl text-center font-bold lg:mb-10 mb-5">
          NEW PRODUCTS
        </h1>

        <div>
          {categoryData?.data?.slice(2, 3).map((category: TCatagory) => (
            <div key={category?._id}>
              <Tabs
                defaultValue={categoryData?.data[2]?._id}
                className="w-full"
                onValueChange={setSelectedCategory}
              >
                <TabsList className="w-full mx-auto md:space-x-16 space-x-6  mb-10">
                  {categoryData?.data
                    ?.slice(2, 3)
                    .map((category: TCatagory) => (
                      <div
                        key={category?._id}
                        className="group relative sm:text-base text-sm"
                      >
                        <TabsTrigger value={category?._id}>
                          {category?.catagoryName.toUpperCase()}
                        </TabsTrigger>
                      </div>
                    ))}
                  {categoryData?.data
                    ?.slice(3, 4)
                    .map((category: TCatagory) => (
                      <div
                        key={category?._id}
                        className="group relative sm:text-base text-xs"
                      >
                        <TabsTrigger value={category?._id}>
                          {category?.catagoryName.toUpperCase()}
                        </TabsTrigger>
                      </div>
                    ))}
                  {categoryData?.data
                    ?.slice(8, 9)
                    .map((category: TCatagory) => (
                      <div
                        key={category?._id}
                        className="group relative sm:text-base text-xs"
                      >
                        <TabsTrigger value={category?._id}>
                          {category?.catagoryName.toUpperCase()}
                        </TabsTrigger>
                      </div>
                    ))}
                  {categoryData?.data
                    ?.slice(9, 10)
                    .map((category: TCatagory) => (
                      <div
                        key={category?._id}
                        className="group relative sm:text-base text-xs"
                      >
                        <TabsTrigger value={category?._id}>
                          {category?.catagoryName.toUpperCase()}
                        </TabsTrigger>
                      </div>
                    ))}
                </TabsList>

                {categoryData?.data?.map((category: TCatagory) => (
                  <TabsContent key={category?._id} value={category?._id}>
                    <div className="grid  md:grid-cols-3 md:gap-5 grid-cols-2 gap-4 xl:px-0 sm:px-2 px-0 ">
                      {allProductData?.data?.products
                        ?.slice(0, 6)
                        .map((item: TInputs) => (
                          <div
                            className="col-span-1 flex flex-col md:h-[390px] sm:h-[310px] h-[320px] relative group  bg-[#f5f5f5] hover:transition-transform md:hover:scale-105 hover:scale-100 hover:duration-500 hover:ease-in-out  bg-opacity-50  w-full rounded-lg shadow-xl hover:border-2 hover:border-[rgb(0,205,229)]"
                            key={item?._id}
                          >
                            <div className="flex items-center justify-center overflow-hidden relative group w-full md:h-[160px] h-[120px]">
                              <div>
                                <img
                                  src={item?.image[0]}
                                  className="md:w-[120px] w-[100px] md:h-[120px] h-[100px] object-cover md:group-hover:scale-125 group-hover:scale-110 transition-transform duration-500 ease-in-out"
                                  alt=""
                                />
                              </div>
                            </div>
                            <div className="px-3 space-y-2">
                              <div className="flex items-center justify-center">
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
                              <p className="text-center text-lg font-bold text-[#1abfdc]">
                                $ {item?.price}
                              </p>
                              <div className="hidden group-hover:block transition-transform duration-500 ease-in-out ">
                                <div className="flex sm:justify-around  justify-center items-center lg:space-x-1 space-x-1 ">
                                  <div className="md:w-10 w-9 md:h-10 h-9 cursor-pointer hover:text-white hover:bg-[#00cde5] rounded-full transition-all  duration-500 md:hover:scale-110 hover:scale-90 ease-in-out flex items-center justify-center p-2">
                                    <Heart className=" w-8  h-8" />
                                  </div>
                                  <Link to={`/singleProduct/${item?._id}`}>
                                    <Button className="bg-gradient-to-r from-[#00cde5] to-[#10798b] text-xs md:text-sm text-white  h-[40px] w-[84px] md:w-[110px] md:h-[45px]">
                                      View Details
                                    </Button>
                                  </Link>
                                  <div
                                    className="md:w-10 w-9 md:h-10 h-9 cursor-pointer hover:text-white hover:bg-[#00cde5] rounded-full transition-all  duration-500 md:hover:scale-110 hover:scale-90 ease-in-out flex items-center justify-center p-2"
                                    onClick={() => dispatch(addToCart(item))}
                                  >
                                    <ShoppingCart className="w-8   h-8" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default MdNewProduct;
