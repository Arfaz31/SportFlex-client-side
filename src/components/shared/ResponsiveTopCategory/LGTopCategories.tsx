import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Container from "@/components/shared/Container";
import football from "@/assets/category/football.png";
import basketball from "@/assets/category/Basketball.png";
import volleyball from "@/assets/category/Volleyball.png";
import shoes from "@/assets/category/shoes.png";
import cricket from "@/assets/category/Bat.png";
import badminton from "@/assets/category/Badminton.png";
import hockey from "@/assets/category/Hockey.png";
import rugby from "@/assets/category/Rugby-Ball.png";
import bag from "@/assets/category/Bag.jpg";
import bike from "@/assets/category/bicycle.png";
import men from "@/assets/category/men-jacket.jpg";
import women from "@/assets/category/Women's-sportswear (2).png";

const LGTopCategories = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  const categoriesData = [
    {
      id: 1,
      image: (className: string) => (
        <img src={football} alt="Category 1" className={className} />
      ),
      categoryName: "Football",
      button: "View More",
    },
    {
      id: 2,
      image: (className: string) => (
        <img src={basketball} alt="Category 2" className={className} />
      ),
      categoryName: "Basketball",
      button: "View More",
    },
    {
      id: 3,
      image: (className: string) => (
        <img src={volleyball} alt="Category 3" className={className} />
      ),
      categoryName: "Volleyball",
      button: "View More",
    },
    {
      id: 4,
      image: (className: string) => (
        <img src={shoes} alt="Category 4" className={className} />
      ),
      categoryName: "Shoes",
      button: "View More",
    },
    {
      id: 5,
      image: (className: string) => (
        <img src={cricket} alt="Category 5" className={className} />
      ),
      categoryName: "Cricket",
      button: "View More",
    },
    {
      id: 6,
      image: (className: string) => (
        <img src={badminton} alt="Category 6" className={className} />
      ),
      categoryName: "Badminton",
      button: "View More",
    },
    {
      id: 7,
      image: (className: string) => (
        <img src={hockey} alt="Category 7" className={className} />
      ),
      categoryName: "Hockey",
      button: "View More",
    },
    {
      id: 8,
      image: (className: string) => (
        <img src={rugby} alt="Category 8" className={className} />
      ),
      categoryName: "Rugby Ball",
      button: "View More",
    },
    {
      id: 9,
      image: (className: string) => (
        <img src={bike} alt="Category 9" className={className} />
      ),
      categoryName: "Sport's Bike",
      button: "View More",
    },
    {
      id: 10,
      image: (className: string) => (
        <img src={bag} alt="Category 10" className={className} />
      ),
      categoryName: "Sport's Bag",
      button: "View More",
    },
    {
      id: 11,
      image: (className: string) => (
        <img src={women} alt="Category 11" className={className} />
      ),
      categoryName: "Women's Wear",
      button: "View More",
    },
    {
      id: 12,
      image: (className: string) => (
        <img src={men} alt="Category 12" className={className} />
      ),
      categoryName: "Men's Wear",
      button: "View More",
    },
  ];

  // Generate carousel items
  const slides = [];
  for (let i = 0; i < categoriesData.length; i += 6) {
    slides.push(categoriesData.slice(i, i + 6));
  }
  return (
    <div className="my-24">
      <h1 className="text-3xl font-bold text-center mb-16">TOP CATEGORIES</h1>
      <div>
        <Container>
          <Carousel
            plugins={[plugin.current]}
            className="overflow-hidden w-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              {slides.map((slide, index) => (
                <CarouselItem key={index} className="h-[250px]">
                  <Card className="border-0 h-full rounded-none">
                    <CardContent className="relative overflow-hidden">
                      <div className="grid grid-cols-6 gap-2">
                        {slide.map((item) => (
                          <div
                            className="col-span-1 flex flex-col items-center justify-center gap-4  h-[250px] "
                            key={item.id}
                          >
                            <div className="border-2 border-[#00cde5] bg-[#f5f5f5] rounded-full w-32 h-32 flex items-center justify-center overflow-hidden relative group ">
                              <div>
                                {item.image(
                                  "w-[80px] h-[80px] object-cover group-hover:scale-125 transition-transform duration-500 ease-in-out"
                                )}
                              </div>
                            </div>
                            <div>
                              <p className="text-xl font-semibold text-center pt-2">
                                {item.categoryName}
                              </p>
                              <p className="w-60 text-center text-sm text-gray-600 hover:text-[#00cde5] transition-all duration-500 ease-in-out cursor-pointer">
                                {item.button}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-1 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full cursor-pointer hover:bg-opacity-75 transition-opacity duration-300">
              &#9664;
            </CarouselPrevious>
            <CarouselNext className="absolute right-1 top-1/2  transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full cursor-pointer hover:bg-opacity-75 transition-opacity duration-300">
              &#9654;
            </CarouselNext>
          </Carousel>
        </Container>
      </div>
    </div>
  );
};

export default LGTopCategories;
