import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Container from "../shared/Container";
import football from "@/assets/category/football.png";

const TopCategories = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 6000, stopOnInteraction: true })
  );

  const categoriesData = [
    {
      id: 1,
      iamge: football,
      categoryName: "Football",
      button: "View More",
    },
  ];

  return (
    <div className="my-24">
      <h1 className="text-4xl font-bold text-center">TOP CATEGORIES</h1>
      <div>
        <Container>
          <Carousel
            plugins={[plugin.current]}
            className="overflow-hidden w-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              {categoriesData.map((item) => (
                <CarouselItem key={item.id} className="  h-[220px]">
                  <Card className="border-0 h-full w-[450px]  bg-[#f5f5f5] rounded-none">
                    <CardContent className="relative  pt-[70px]  overflow-hidden">
                      <div className="grid grid-cols-12 ">
                        <div className="col-span-2 flex items-center justify-center gap-4">
                          <div className="border-2 border-[#00cde5] rounded-full w-20 h-20 flex items-center justify-center overflow-hidden relative group">
                            <div className="absolute inset-0 bg-[#00cde5] rounded-full transform scale-0 transition-transform duration-500 ease-in-out group-hover:scale-100"></div>
                            <div className="relative group-hover:scale-110 transition-transform duration-500 ease-in-out">
                              {item.iamge}
                            </div>
                          </div>
                          <div>
                            <p className="text-lg font-bold">
                              {item.categoryName}
                            </p>
                            <p className="w-60 text-sm pt-2 text-gray-600">
                              {item.button}
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </Container>
      </div>
    </div>
  );
};

export default TopCategories;
