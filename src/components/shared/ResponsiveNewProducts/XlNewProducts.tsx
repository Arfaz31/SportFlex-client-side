import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Container from "../Container";
import shoes from "../../../assets/shoes.png";
import shoes2 from "../../../assets/shoes2.png";
import shoes3 from "../../../assets/shoes3.png";

import shoesB from "../../../assets/shoesB.jpg";
import { Star, Heart, ShoppingCart } from "lucide-react";

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const XlNewProducts = () => {
  const shoesData = [
    {
      id: 1,
      productName: "Men Trace-2 Running Shoe",
      image: (className: string) => (
        <img src={shoes} alt="shoes" className={className} />
      ),
      brand: "Brooks",
      price: 60,
      category: "Shoes",
      description: `The Trace 2 offers neutral support for runners who want a soft, smooth ride that they can depend on every time they lace up. The 3D Fit Print and air-mesh provide extra structure to hold your foot in place while also providing optimum airflow.`,
      stockQuantity: "10",
      availability: true,
    },
    {
      id: 2,
      productName: "Men's Charged Assert-10",
      image: (className: string) => (
        <img src={shoes2} alt="shoes" className={className} />
      ),
      brand: "Under Armour",
      price: 70,
      category: "Shoes",
      description: `Lightweight, breathable mesh upper with synthetic overlays for added durability & support.Charged Cushioning midsole uses compression molded foam for ultimate responsiveness & durability`,
      stockQuantity: "10",
      availability: true,
    },
    {
      id: 3,
      productName: "Men's Charged Assert-10",
      image: (className: string) => (
        <img src={shoes3} alt="shoes" className={className} />
      ),
      brand: "Under Armour",
      price: 70,
      category: "Shoes",
      description: `Lightweight, breathable mesh upper with synthetic overlays for added durability & support.Charged Cushioning midsole uses compression molded foam for ultimate responsiveness & durability`,
      stockQuantity: "10",
      availability: true,
    },
    {
      id: 4,
      productName: "Men's Charged Assert-10",
      image: (className: string) => (
        <img src={shoes2} alt="shoes" className={className} />
      ),
      brand: "Under Armour",
      price: 70,
      category: "Shoes",
      description: `Lightweight, breathable mesh upper with synthetic overlays for added durability & support.Charged Cushioning midsole uses compression molded foam for ultimate responsiveness & durability`,
      stockQuantity: "10",
      availability: true,
    },
  ];

  return (
    <Container>
      <div>
        <h1 className="xl:text-4xl lg:text-3xl text-center font-bold mb-7">
          NEW PRODUCTS
        </h1>
        <div>
          <Tabs defaultValue="shoes" className="w-full">
            <TabsList className="w-full mx-auto space-x-16 mb-10">
              <div className="group relative  ">
                <TabsTrigger value="shoes">SHOES</TabsTrigger>
              </div>
              <div className="group relative  ">
                <TabsTrigger value="bag">BAG</TabsTrigger>
              </div>
              <div className="group relative  ">
                <TabsTrigger value="bike">BIKE</TabsTrigger>
              </div>
              <div className="group relative  ">
                <TabsTrigger value="jersey">JERSEY</TabsTrigger>
              </div>
            </TabsList>
            <TabsContent value="shoes">
              <div className="grid grid-cols-12 gap-6">
                <div className="col-span-4">
                  <div className="grid grid-rows-2 gap-8  w-[300px] mx-auto">
                    {shoesData.slice(0, 2).map((item) => (
                      <div
                        className="col-span-1 flex flex-col md:h-[360px]  h-[290px] relative group  bg-[#f5f5f5] hover:transition-transform md:hover:scale-105 hover:scale-100 hover:duration-500 hover:ease-in-out  bg-opacity-50  rounded-lg shadow-xl hover:border-2 hover:border-[rgb(0,205,229)]"
                        key={item.id}
                      >
                        <div className="flex items-center justify-center overflow-hidden relative group w-full md:h-[160px] h-[120px]">
                          <div>
                            {item.image(
                              "md:w-[160px] w-[100px] md:h-[160px] h-[100px] object-cover md:group-hover:scale-125 group-hover:scale-110 transition-transform duration-500 ease-in-out"
                            )}
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
                            <div className="flex md:justify-between  justify-center items-center lg:space-x-1 space-x-1 ">
                              <div className="md:w-10 w-9 md:h-10 h-9 cursor-pointer hover:text-white hover:bg-[#00cde5] rounded-full transition-all  duration-500 md:hover:scale-110 hover:scale-90 ease-in-out flex items-center justify-center p-2">
                                <Heart className=" w-8  h-8" />
                              </div>
                              <Link to={`/singleProduct/${item.id}`}>
                                <Button className="bg-gradient-to-r from-[#00cde5] to-[#10798b] text-xs md:text-sm text-white  h-[40px] w-[84px] md:w-[110px] md:h-[45px]">
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
                    ))}
                  </div>
                </div>
                <div className="col-span-4">
                  <div className="relative group overflow-hidden">
                    <img
                      className="h-[752px] w-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                      src={shoesB}
                      alt=""
                    />
                    <div className="bg-black absolute top-0  h-[752px] w-full bg-opacity-35"></div>
                    <div className="absolute top-36 space-y-1 left-12 ">
                      <p className="text-white font-bold xl:text-2xl text-xl tracking-wide ">
                        BRAND NEW
                      </p>
                      <h2 className="xl:text-4xl text-3xl text-white font-bold  tracking-wide">
                        SPORT'S <br /> SHOES
                      </h2>
                      <p className="text-white xl:text-4xl text-3xl font-bold pb-4 tracking-wide">
                        SAVE <br />
                        UP TO
                      </p>
                      <span className=" bg-gradient-to-r from-[#00cde5] to-[#10798b] xl:text-xl text-lg  rounded-full xl:w-16 xl:h-16 w-14 h-14  flex items-center justify-center animate-bounce text-white font-semibold">
                        50%
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-span-4">
                  <div className="grid grid-rows-2 gap-8 w-[300px] mx-auto">
                    {shoesData.slice(2, 5).map((item) => (
                      <div
                        className="col-span-1 flex flex-col md:h-[360px]  h-[290px] relative group  bg-[#f5f5f5] hover:transition-transform md:hover:scale-105 hover:scale-100 hover:duration-500 hover:ease-in-out  bg-opacity-50  rounded-lg shadow-xl hover:border-2 hover:border-[rgb(0,205,229)]"
                        key={item.id}
                      >
                        <div className="flex items-center justify-center overflow-hidden relative group w-full md:h-[160px] h-[120px]">
                          <div>
                            {item.image(
                              "md:w-[160px] w-[100px] md:h-[160px] h-[100px] object-cover md:group-hover:scale-125 group-hover:scale-110 transition-transform duration-500 ease-in-out"
                            )}
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
                            <Star
                              className="md:size-5 size-[18px]"
                              color="orange"
                              fill="orange"
                            />
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
                            <div className="flex md:justify-between  justify-center items-center lg:space-x-1 space-x-1 ">
                              <div className="md:w-10 w-9 md:h-10 h-9 cursor-pointer hover:text-white hover:bg-[#00cde5] rounded-full transition-all  duration-500 md:hover:scale-110 hover:scale-90 ease-in-out flex items-center justify-center p-2">
                                <Heart className=" w-8  h-8" />
                              </div>
                              <Link to={`/singleProduct/${item.id}`}>
                                <Button className="bg-gradient-to-r from-[#00cde5] to-[#10798b] text-xs md:text-sm text-white  h-[40px] w-[84px] md:w-[110px] md:h-[45px]">
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
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Container>
  );
};

export default XlNewProducts;
