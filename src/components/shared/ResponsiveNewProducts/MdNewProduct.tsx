import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Container from "../Container";
import shoes from "../../../assets/shoes.png";
import shoes2 from "../../../assets/shoes2.png";
import shoes3 from "../../../assets/shoes3.png";
import { Star, Heart, ShoppingCart } from "lucide-react";

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
const MdNewProduct = () => {
  const shoesData = [
    {
      id: 1,
      productName: "Men Trace-2 Shoe",
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
      productName: "Men's Charged Assert",
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
      productName: "Men's Charged Assert",
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
      productName: "Men's Charged Assert",
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
        <h1 className="text-2xl text-center font-bold lg:mb-10 mb-5">
          NEW PRODUCTS
        </h1>
        <div>
          <Tabs defaultValue="shoes" className="w-full">
            <TabsList className="w-full mx-auto md:space-x-16 space-x-12 mb-10">
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
              <div className="grid  md:grid-cols-3 md:gap-5 grid-cols-2 gap-4 xl:px-0 px-2  ">
                {shoesData.map((item) => (
                  <div
                    className="col-span-1 flex flex-col md:h-[360px] sm:h-[300px] h-[310px] relative group  bg-[#f5f5f5] hover:transition-transform md:hover:scale-105 hover:scale-100 hover:duration-500 hover:ease-in-out  bg-opacity-50  w-full rounded-lg shadow-xl hover:border-2 hover:border-[rgb(0,205,229)]"
                    key={item.id}
                  >
                    <div className="flex items-center justify-center overflow-hidden relative group w-full md:h-[160px] h-[120px]">
                      <div>
                        {item.image(
                          "md:w-[120px] w-[100px] md:h-[120px] h-[100px] object-cover md:group-hover:scale-125 group-hover:scale-110 transition-transform duration-500 ease-in-out"
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
                            <Button className="bg-[#10798b] text-xs md:text-sm text-white  h-[40px] w-[84px] md:w-[110px] md:h-[45px]">
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
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Container>
  );
};

export default MdNewProduct;
