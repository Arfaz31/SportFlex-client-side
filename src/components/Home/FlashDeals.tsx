import Container from "../shared/Container";
import shoe from "@/assets/flash/p1.png";
import bag from "@/assets/flash/p3.png";
import pad from "@/assets/flash/p4.png";
import jersey1 from "@/assets/flash/p5.png";
import jersey2 from "@/assets/flash/p6.png";
import bat from "@/assets/flash/p7.png";
import gloves from "@/assets/flash/p8.png";
import hoddie from "@/assets/flash/p9.png";
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
import CountDown from "../shared/CountDown";
const FlashDeals = () => {
  const flashData = [
    {
      id: 1,
      productName: "Bangladesh official Jersey",
      image: (className: string) => (
        <img src={jersey1} alt="Category 1" className={className} />
      ),
      brand: "Franklin",
      price: 20,
      category: "Jersey",
      description:
        "This soccer ball features a soft foam cover for a comfortable feel and reduced impact from headers. Its water-resistant PVC cover ensures durability in all weather conditions. Available in official sizes 3, 4, and 5, it's perfect for all skill levels. The high-quality air retention bladder prevents leaks and deflation, and it arrives fully inflated, ready for play.",
      stockQuantity: "10",
      availability: true,
      endDate: `2024-12-30T00:00:00`,
    },
    {
      id: 2,
      productName: "Sylhet Strikers Official Fan Jersey",
      image: (className: string) => (
        <img src={jersey2} alt="Category 1" className={className} />
      ),
      brand: "Franklin",
      price: 20,
      category: "Jersey",
      description:
        "These kits were crafted from lightweight, breathable mesh fabric, making them ideal for the hot Qatari climate. This material allowed for optimal airflow and kept players cool and comfortable during matches. Disclaimer: Product color may slightly vary due to photographic lighting sources or your monitor settings. Elastane fabric size may be more or less. All measurements are in inches. Size may vary by +/- 0.5 inches. Size Measurement: M – Chest: 40 inch, Length: 28, Sleeve: 7.5; L – Chest: 42inch, Length: 29, Sleeve: 8; XL – Chest: 44inch, Length: 30, Sleeve: 8.5; XXL – Chest: 46inch, Length: 31, Sleeve: 9;",
      stockQuantity: "10",
      availability: true,
      endDate: `2024-11-30T00:00:00`,
    },
    {
      id: 3,
      productName: "MKS Legend Pads Green",
      image: (className: string) => (
        <img src={pad} alt="Category 1" className={className} />
      ),
      brand: "Franklin",
      price: 20,
      category: "Cricket",
      description:
        "Engineered with high-density foam for superior impact absorption and protection. Crafted to provide maximum mobility without compromising safety. Ergonomically designed for a snug and secure fit, ensuring comfort during long hours at the crease.",
      stockQuantity: "10",
      availability: true,
      endDate: `2024-11-25T00:00:00`,
    },
    {
      id: 4,
      productName: "Zip Up Hoodie",
      image: (className: string) => (
        <img src={hoddie} alt="Category 1" className={className} />
      ),
      brand: "Franklin",
      price: 20,
      category: "Women's Wear",
      description:
        "Stylish Design: Our FKEEP womens zip up hoodies is designed to keep you looking trendy and fashionable wherever you go. Versatile Zip Closure: The zip closure not only adds a modern touch to the girls zip up hoodie but also allows for easy and adjustable wearing. Flattering Fit: With its cropped length, this cropped zip up hoodie women accentuates your figure and adds a touch of sophistication to any outfit.",
      stockQuantity: "10",
      availability: true,
      endDate: `2024-12-15T00:00:00`,
    },
    {
      id: 5,
      productName: "white Batting Gloves",
      image: (className: string) => (
        <img src={gloves} alt="Category 1" className={className} />
      ),
      brand: "Franklin",
      price: 20,
      category: "Cricket",
      description:
        "Lightweight split-finger design for excellent fit and comfort. Duo-layer: Lightweight high-impact foam, diffuser foam. Lightweight synthetic, grade three leather palm, double-sided wristband",
      stockQuantity: "10",
      availability: true,
      endDate: `2024-12-05T00:00:00`,
    },
    {
      id: 6,
      productName: "Unisex Duffel Bag",
      image: (className: string) => (
        <img src={bag} alt="Category 1" className={className} />
      ),
      brand: "Franklin",
      price: 20,
      category: "Bag",
      description:
        "This foldable duffle bag is made of water resistant and wear resistant fabric, with SBS premium zippers. It weighs only 1 pound and can be folded into a small pouch when not in use. It has a large size of 23.5 x 9.5 x 12 inch with 40 liters",
      stockQuantity: "10",
      availability: true,
      endDate: `2024-11-30T00:00:00`,
    },
    {
      id: 7,
      productName: "Men’s Air Athletic Running Shoes",
      image: (className: string) => (
        <img src={shoe} alt="Category 1" className={className} />
      ),
      brand: "Franklin",
      price: 20,
      category: "Shoes",
      description:
        "This soccer ball features a soft foam cover for a comfortable feel and reduced impact from headers. Its water-resistant PVC cover ensures durability in all weather conditions. Available in official sizes 3, 4, and 5, it's perfect for all skill levels. The high-quality air retention bladder prevents leaks and deflation, and it arrives fully inflated, ready for play.",
      stockQuantity: "10",
      availability: true,
      endDate: `2024-12-10T00:00:00`,
    },
    {
      id: 8,
      productName: "MKS Cricket Bat",
      image: (className: string) => (
        <img src={bat} alt="Category 1" className={className} />
      ),
      brand: "Franklin",
      price: 20,
      category: "Cricket",
      description:
        "This soccer ball features a soft foam cover for a comfortable feel and reduced impact from headers. Its water-resistant PVC cover ensures durability in all weather conditions. Available in official sizes 3, 4, and 5, it's perfect for all skill levels. The high-quality air retention bladder prevents leaks and deflation, and it arrives fully inflated, ready for play.",
      stockQuantity: "10",
      availability: true,
      endDate: `2024-12-25T00:00:00`,
    },
  ];

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
              {flashData.map((item) => {
                const { days, hours, minutes, seconds } = CountDown(
                  item.endDate
                );
                return (
                  <CarouselItem
                    key={item.id}
                    className="basis-1/2 md:basis-1/3 lg:basis-1/4"
                  >
                    <div className="p-1">
                      <Card className="border-none ">
                        <CardContent className="flex flex-col relative aspect-square items-center justify-center sm:p-2 p-1">
                          <div className="w-full">
                            <div className=" flex flex-col  lg:h-[450px] md:h-[460px] sm:h-[380px] h-[395px] relative group  bg-[#f5f5f5] hover:transition-transform md:hover:scale-105 hover:scale-100 hover:duration-500 hover:ease-in-out  bg-opacity-50  w-full rounded-lg shadow-xl hover:border-2 hover:border-[rgb(0,205,229)]">
                              <div className="flex items-center justify-center overflow-hidden relative group w-full md:h-[160px] h-[130px]">
                                <div>
                                  {item.image(
                                    "md:w-[130px] w-[120px]  md:h-[120px] h-[130px] object-cover md:group-hover:scale-125 group-hover:scale-110 transition-transform duration-500 ease-in-out"
                                  )}
                                </div>
                              </div>

                              <div className="px-3 space-y-2 ">
                                <div className="bg-white z-[1] md:w-[200px] w-full  h-[40px] mx-auto ">
                                  <div className=" grid grid-cols-4 gap-1 pt-1 divide-y-1  items-center ">
                                    <div className="bg-[#f5f5f5] rounded-xl py-1">
                                      <p className="text-center  font-semibold md:text-sm text-[10px]">
                                        {days}
                                      </p>
                                      <p className="text-center text-[10px] ">
                                        Days
                                      </p>
                                    </div>
                                    <div className="bg-[#f5f5f5] rounded-xl py-1">
                                      <p className="text-center  font-semibold md:text-sm text-[10px]">
                                        {hours}
                                      </p>
                                      <p className="text-center text-[10px] ">
                                        Hours
                                      </p>
                                    </div>
                                    <div className="bg-[#f5f5f5] rounded-xl py-1">
                                      <p className="text-center  font-semibold md:text-sm text-[10px]">
                                        {minutes}
                                      </p>
                                      <p className="text-center text-[10px] ">
                                        Min
                                      </p>
                                    </div>
                                    <div className="bg-[#f5f5f5] rounded-xl py-1">
                                      <p className="text-center font-semibold md:text-sm text-[10px]">
                                        {seconds}
                                      </p>
                                      <p className="text-center text-[10px] ">
                                        Sec
                                      </p>
                                    </div>
                                  </div>
                                </div>
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
                                  {item.productName}
                                </p>
                                <p className="text-center md:text-lg text-sm">
                                  Brand: {item.brand}
                                </p>
                                <p className="text-center text-lg font-bold text-[#1abfdc]">
                                  $ {item.price}
                                </p>
                                <div className="hidden group-hover:block transition-transform duration-500 ease-in-out ">
                                  <div className="flex sm:justify-around  justify-center items-center lg:space-x-1 space-x-1 ">
                                    <div className="md:w-10 w-9 md:h-10 h-9 cursor-pointer hover:text-white hover:bg-[#00cde5] rounded-full transition-all  duration-500 md:hover:scale-110 hover:scale-90 ease-in-out flex items-center justify-center p-2">
                                      <Heart className=" w-8  h-8" />
                                    </div>
                                    <Link to={`/singleProduct/${item.id}`}>
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
