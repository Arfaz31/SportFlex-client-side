import banner from "@/assets/reviewBanner.jpg";
import user1 from "@/assets/review/user1.jpg";
import user2 from "@/assets/review/user2.jpg";
import user3 from "@/assets/review/user3.jpg";
import user5 from "@/assets/review/user5.jpg";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

const MdClientReviews = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );
  const ReviewData = [
    {
      id: 1,
      image: (className: string) => (
        <img src={user1} alt="shoes" className={className} />
      ),

      name: "John Doe",
      review:
        "SportFlex has an amazing range of sports goods. The quality is top-notch, and the customer service is excellent. I recently bought a pair of running shoes and they are incredibly comfortable and durable.",
    },
    {
      id: 2,
      image: (className: string) => (
        <img src={user2} alt="shoes" className={className} />
      ),
      name: "Michael Smith",
      review:
        "I am very impressed with the variety of sports equipment available at SportFlex. The prices are competitive, and the delivery was quick. I bought a new basketball, and it's perfect for my training sessions.",
    },
    {
      id: 3,
      image: (className: string) => (
        <img src={user3} alt="shoes" className={className} />
      ),
      name: "Emily Johnson",
      review:
        "SportFlex is my go-to website for all my sports needs. The product descriptions are accurate, and the items I have purchased so far have exceeded my expectations. The yoga mat I ordered is perfect for my daily practice.",
    },
    {
      id: 4,
      image: (className: string) => (
        <img src={user5} alt="shoes" className={className} />
      ),
      name: "Sarah Williams",
      review:
        "I love shopping at SportFlex. The website is user-friendly, and the product quality is excellent. I recently bought a set of tennis rackets, and they have greatly improved my game. Highly recommended!",
    },
  ];

  return (
    <div className=" mt-20 relative">
      <img
        className="w-full h-[560px] object-cover object-center"
        src={banner}
        alt=""
      />
      <div className="bg-black absolute top-0  h-[560px] w-full bg-opacity-45"></div>
      <div className="absolute top-20 text-center right-4 w-full">
        <h1 className="text-white font-bold text-2xl  tracking-wider leading-tight">
          TOP <br />
          CLIENT REVIEWS
        </h1>
        <div className="flex items-center justify-center pt-2">
          <Star className="size-5" color="orange" fill="orange" />
          <Star className="size-5" color="orange" fill="orange" />
          <Star className="size-5" color="orange" fill="orange" />
          <Star className="size-5" color="orange" fill="orange" />
          <Star className="size-5" color="orange" fill="orange" />
          <Star className="size-5" color="orange" fill="orange" />
        </div>
      </div>
      <div className="absolute top-48 w-full mx-auto ">
        <div>
          <Carousel
            plugins={[plugin.current]}
            className="overflow-hidden w-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              {ReviewData.map((item) => (
                <CarouselItem
                  key={item.id}
                  className="  md:h-[220px] sm:h-[230px] h-[265px] "
                >
                  <Card className="border-0 h-full md:w-[500px] sm:w-[380px] w-[350px] bg-[#f5f5f5] rounded-none mx-auto ">
                    <CardContent className="relative overflow-hidden p-0">
                      <div className="grid grid-cols-12 ">
                        <div className="col-span-full flex items-center justify-center">
                          <div className="flex bg-white shadow-lg rounded-lg sm:h-[220px] h-[265px] w-full justify-center items-center px-4">
                            <div>
                              <div className="border-2 border-[#00cde5] rounded-full w-24 h-24 flex items-center justify-center overflow-hidden relative group">
                                <div className="relative group-hover:scale-110 transition-transform duration-500 ease-in-out">
                                  {item.image("")}
                                </div>
                              </div>
                            </div>
                            <div className="ml-6">
                              <p className="text-lg font-bold">{item.name}</p>
                              <p className="text-sm pt-2 text-gray-600 w-full ">
                                {item.review}
                              </p>
                            </div>
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
      </div>
    </div>
  );
};

export default MdClientReviews;
