import { CornerUpLeft, Phone, Truck } from "lucide-react";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const SmPolicy = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 6000, stopOnInteraction: true })
  );
  const sliderData = [
    {
      id: 1,
      icon: (className: string) => <Truck className={className} />,
      title: "FREE SHIPPING",
      offer:
        "Enjoy free shipping on all orders. Discover the best deals today.",
    },
    {
      id: 2,
      icon: (className: string) => <Phone className={className} />,
      title: "24/7 SUPPORT",
      offer: "Get help anytime you need it. We're always here for you .",
    },
    {
      id: 3,
      icon: (className: string) => <CornerUpLeft className={className} />,
      title: "30d FREE RETURN",
      offer:
        "Return items hassle-free within 30 days. Shop with confidence today",
    },
  ];

  return (
    <div>
      <Carousel
        plugins={[plugin.current]}
        className="overflow-hidden w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {sliderData.map((item) => (
            <CarouselItem key={item.id} className="  h-[220px]">
              <Card className="border-0 h-full w-[450px] mx-auto bg-[#f5f5f5] rounded-none ">
                <CardContent className="relative  p-0  overflow-hidden">
                  <div className="grid grid-cols-12 ">
                    <div className="col-span-full flex items-center justify-center gap-3 sm:pr-6 pr-20  pt-[70px] ">
                      <div className="border-2 border-[#00cde5] rounded-full w-20 h-20 flex items-center justify-center overflow-hidden relative group">
                        <div className="absolute inset-0 bg-[#00cde5] rounded-full transform scale-0 transition-transform duration-500 ease-in-out group-hover:scale-100"></div>
                        <div className="relative group-hover:scale-110 transition-transform duration-500 ease-in-out">
                          {item.icon(
                            "group-hover:text-white text-[#12b3c5] transition-colors duration-300 ease-in-out"
                          )}
                        </div>
                      </div>
                      <div>
                        <p className="text-lg font-bold">{item.title}</p>
                        <p className="w-60 text-sm pt-2 text-gray-600">
                          {item.offer}
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
    </div>
  );
};

export default SmPolicy;
