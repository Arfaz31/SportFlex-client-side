import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Container from "../Container";
import jersey from "@/assets/newProduct/jersey2.jpg";
import bag from "@/assets/newProduct/bagg.jpg";
import bike from "@/assets/newProduct/bikes.jpg";
import sports from "@/assets/newProduct/spot.jpg";
import shoesB from "../../../assets/shoesB.jpg";
import { Star, Heart, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useGetAllCatagoryQuery } from "@/redux/api/Catagory/CatagoryApi";
import { useGetAllProductsQuery } from "@/redux/api/product/productApi";
import { useEffect, useState } from "react";
import { TCatagory, TInputs } from "@/type/Type";
import LoadingPage from "../LoadingPage";
import Lottie from "lottie-react";
import spinner from "@/assets/pIR8Sd9Ib1.json";
import { useAppDispatch } from "@/redux/hook";
import { addToCart } from "@/redux/features/cartSlice";

type TMidlleDivImage = {
  image?: string;
  status?: string;
  title?: string;
  discount?: number;
};

const XlNewProducts = () => {
  const { data: categoryData, isLoading: isCategoryLoading } =
    useGetAllCatagoryQuery(undefined);
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(
    undefined
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (categoryData?.data.length >= 3) {
      setSelectedCategory(categoryData.data[2]._id);
    }
  }, [categoryData]);

  const {
    data: allProductData,
    isLoading,
    error,
  } = useGetAllProductsQuery({
    categoryId: selectedCategory,
  });

  if (error) {
    console.log(error);
  }

  const middleDivImages: TMidlleDivImage[] = [
    {},
    {},
    {
      image: jersey,
      status: "BRAND NEW",
      title: "JERSEY",
      discount: 30,
    },
    {
      image: shoesB,
      status: "BRAND NEW",
      title: "SHOES",
      discount: 30,
    },
    {},
    {},
    {},
    {},

    {
      image: bike,
      status: "BRAND NEW",
      title: "BIKE",
      discount: 35,
    },
    {
      image: bag,
      status: "BRAND NEW",
      title: "BAG",
      discount: 20,
    },
  ];

  // Find the index of the selected category
  const selectedIndex = categoryData?.data.findIndex(
    (category: TCatagory) => category._id === selectedCategory
  );

  // Get the corresponding middle image based on the selected index
  const currentMiddleImage = middleDivImages[selectedIndex || 0];

  return (
    <Container>
      <div>
        <h1 className="xl:text-4xl lg:text-3xl text-center font-bold mb-7">
          NEW PRODUCTS
        </h1>
        <div>
          <div>
            {categoryData?.data?.slice(2, 3).map((category: TCatagory) => (
              <div key={category?._id}>
                <Tabs
                  defaultValue={categoryData?.data[2]?._id}
                  className="w-full"
                  onValueChange={setSelectedCategory}
                >
                  <TabsList className="w-full mx-auto space-x-16 mb-10">
                    {isCategoryLoading ? (
                      <>
                        <LoadingPage />
                        <LoadingPage />
                        <LoadingPage />
                        <LoadingPage />
                      </>
                    ) : (
                      <>
                        {categoryData?.data
                          ?.slice(2, 3)
                          .map((category: TCatagory) => (
                            <div key={category?._id} className="group relative">
                              <TabsTrigger value={category?._id}>
                                {category?.catagoryName.toUpperCase()}
                              </TabsTrigger>
                            </div>
                          ))}
                        {categoryData?.data
                          ?.slice(3, 4)
                          .map((category: TCatagory) => (
                            <div key={category?._id} className="group relative">
                              <TabsTrigger value={category?._id}>
                                {category?.catagoryName.toUpperCase()}
                              </TabsTrigger>
                            </div>
                          ))}
                        {categoryData?.data
                          ?.slice(8, 9)
                          .map((category: TCatagory) => (
                            <div key={category?._id} className="group relative">
                              <TabsTrigger value={category?._id}>
                                {category?.catagoryName.toUpperCase()}
                              </TabsTrigger>
                            </div>
                          ))}
                        {categoryData?.data
                          ?.slice(9, 10)
                          .map((category: TCatagory) => (
                            <div key={category?._id} className="group relative">
                              <TabsTrigger value={category?._id}>
                                {category?.catagoryName.toUpperCase()}
                              </TabsTrigger>
                            </div>
                          ))}
                      </>
                    )}
                  </TabsList>

                  {categoryData?.data?.map((category: TCatagory) => (
                    <TabsContent key={category?._id} value={category?._id}>
                      <div className="grid grid-cols-12 gap-6">
                        <div className="col-span-4">
                          <div className="grid grid-rows-2 gap-8 w-[300px] mx-auto">
                            {isLoading
                              ? [...Array(2)].map((_, index) => (
                                  <div
                                    className="col-span-1 flex flex-col md:h-[360px] h-[290px] relative group bg-[#f5f5f5] bg-opacity-50 rounded-lg shadow-xl"
                                    key={index}
                                  >
                                    <div className="flex items-center justify-center overflow-hidden relative w-full h-full">
                                      <Lottie
                                        animationData={spinner}
                                        loop={true}
                                      />
                                    </div>
                                  </div>
                                ))
                              : allProductData?.data?.products
                                  ?.slice(0, 2)
                                  .map((item: TInputs) => (
                                    <div
                                      className="col-span-1 flex flex-col md:h-[380px] h-[290px] relative group bg-[#f5f5f5] hover:transition-transform md:hover:scale-105 hover:scale-100 hover:duration-500 hover:ease-in-out bg-opacity-50 rounded-lg shadow-xl hover:border-2 hover:border-[rgb(0,205,229)]"
                                      key={item._id}
                                    >
                                      <div className="flex items-center justify-center overflow-hidden relative group w-full md:h-[160px] h-[120px]">
                                        <div>
                                          <img
                                            src={item.image[0]}
                                            className="md:w-[130px] w-[100px] md:h-[120px] h-[100px] object-cover md:group-hover:scale-125 group-hover:scale-110 transition-transform duration-500 ease-in-out"
                                            alt=""
                                          />
                                        </div>
                                      </div>
                                      <div className="px-3 space-y-2">
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
                                        <p className="text-center md:text-lg text-sm ">
                                          {item.productName}
                                        </p>
                                        <p className="text-center md:text-lg text-sm">
                                          Brand: {item.brand}
                                        </p>
                                        <p className="text-center text-lg font-bold text-[#1abfdc]">
                                          $ {item.price}
                                        </p>
                                        <div className="hidden group-hover:block transition-transform duration-500 ease-in-out ">
                                          <div className="flex md:justify-between justify-center items-center lg:space-x-1 space-x-1">
                                            <div className="md:w-10 w-9 md:h-10 h-9 cursor-pointer hover:text-white hover:bg-[#00cde5] rounded-full transition-all duration-500 md:hover:scale-110 hover:scale-90 ease-in-out flex items-center justify-center p-2">
                                              <Heart className="w-8 h-8" />
                                            </div>
                                            <Link
                                              to={`/singleProduct/${item._id}`}
                                            >
                                              <Button className="bg-gradient-to-r from-[#00cde5] to-[#10798b] text-xs md:text-sm text-white h-[40px] w-[84px] md:w-[110px] md:h-[45px]">
                                                View Details
                                              </Button>
                                            </Link>
                                            <div
                                              className="md:w-10 w-9 md:h-10 h-9 cursor-pointer hover:text-white hover:bg-[#00cde5] rounded-full transition-all duration-500 md:hover:scale-110 hover:scale-90 ease-in-out flex items-center justify-center p-2"
                                              onClick={() =>
                                                dispatch(addToCart(item))
                                              }
                                            >
                                              <ShoppingCart className="w-8 h-8" />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  ))}
                          </div>
                        </div>

                        {/* middle image div*/}
                        <div className="col-span-4">
                          <div className="relative group overflow-hidden">
                            <img
                              className="h-[794px] w-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                              src={currentMiddleImage?.image || sports}
                              alt={currentMiddleImage?.title || "sports"}
                            />
                            <div className="bg-black absolute top-0 h-[794px] w-full bg-opacity-35"></div>
                            <div className="absolute top-36 space-y-1 left-12 ">
                              <p className="text-white font-bold xl:text-2xl text-xl tracking-wide ">
                                {currentMiddleImage?.status || "BRAND NEW"}
                              </p>
                              <h2 className="xl:text-4xl text-3xl text-white font-bold tracking-wide">
                                {currentMiddleImage?.title || "SPORT'S ITEM"}
                              </h2>
                              <p className="text-white xl:text-4xl text-3xl font-bold pb-4 tracking-wide">
                                SAVE <br />
                                UP TO
                              </p>
                              <span className="bg-gradient-to-r from-[#00cde5] to-[#10798b] xl:text-xl text-lg rounded-full xl:w-16 xl:h-16 w-14 h-14 flex items-center justify-center animate-bounce text-white font-semibold">
                                {currentMiddleImage?.discount || "30"}%
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="col-span-4">
                          <div className="grid grid-rows-2 gap-8 w-[300px] mx-auto">
                            {isLoading
                              ? [...Array(2)].map((_, index) => (
                                  <div
                                    className="col-span-1 flex flex-col md:h-[360px] h-[290px] relative group bg-[#f5f5f5] bg-opacity-50 rounded-lg shadow-xl"
                                    key={index}
                                  >
                                    <div className="flex items-center justify-center overflow-hidden relative w-full h-full">
                                      <Lottie
                                        animationData={spinner}
                                        loop={true}
                                      />
                                    </div>
                                  </div>
                                ))
                              : allProductData?.data?.products
                                  ?.slice(2, 4)
                                  .map((item: TInputs) => (
                                    <div
                                      className="col-span-1 flex flex-col md:h-[380px] h-[290px] relative group bg-[#f5f5f5] hover:transition-transform md:hover:scale-105 hover:scale-100 hover:duration-500 hover:ease-in-out bg-opacity-50 rounded-lg shadow-xl hover:border-2 hover:border-[rgb(0,205,229)]"
                                      key={item._id}
                                    >
                                      <div className="flex items-center justify-center overflow-hidden relative group w-full md:h-[160px] h-[120px]">
                                        <div>
                                          <img
                                            src={item.image[0]}
                                            className="md:w-[130px] w-[100px] md:h-[120px] h-[100px] object-cover md:group-hover:scale-125 group-hover:scale-110 transition-transform duration-500 ease-in-out"
                                            alt=""
                                          />
                                        </div>
                                      </div>
                                      <div className="px-3 space-y-2">
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
                                        <p className="text-center md:text-lg text-sm ">
                                          {item.productName}
                                        </p>
                                        <p className="text-center md:text-lg text-sm">
                                          Brand: {item.brand}
                                        </p>
                                        <p className="text-center text-lg font-bold text-[#1abfdc]">
                                          $ {item.price}
                                        </p>
                                        <div className="hidden group-hover:block transition-transform duration-500 ease-in-out ">
                                          <div className="flex md:justify-between justify-center items-center lg:space-x-1 space-x-1">
                                            <div className="md:w-10 w-9 md:h-10 h-9 cursor-pointer hover:text-white hover:bg-[#00cde5] rounded-full transition-all duration-500 md:hover:scale-110 hover:scale-90 ease-in-out flex items-center justify-center p-2">
                                              <Heart className="w-8 h-8" />
                                            </div>
                                            <Link
                                              to={`/singleProduct/${item._id}`}
                                            >
                                              <Button className="bg-gradient-to-r from-[#00cde5] to-[#10798b] text-xs md:text-sm text-white h-[40px] w-[84px] md:w-[110px] md:h-[45px]">
                                                View Details
                                              </Button>
                                            </Link>
                                            <div
                                              className="md:w-10 w-9 md:h-10 h-9 cursor-pointer hover:text-white hover:bg-[#00cde5] rounded-full transition-all duration-500 md:hover:scale-110 hover:scale-90 ease-in-out flex items-center justify-center p-2"
                                              onClick={() =>
                                                dispatch(addToCart(item))
                                              }
                                            >
                                              <ShoppingCart className="w-8 h-8" />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  ))}
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                  ))}
                </Tabs>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default XlNewProducts;
