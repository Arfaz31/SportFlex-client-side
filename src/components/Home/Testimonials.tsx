import * as React from "react";
import testimonalBanner from "@/assets/testimonal/us2.jpg";
import user1 from "@/assets/testimonal/avatar2.jpg";
import user2 from "@/assets/testimonal/avatar4.jpg";
import user3 from "@/assets/testimonal/avatar3.jpg";
import user4 from "@/assets/testimonal/avatar1.jpg";
import Container from "../shared/Container";
import { Card, CardContent } from "@/components/ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Star } from "lucide-react";
const Testimonials = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );
  const testimonialData = [
    {
      id: 1,
      image: (className: string) => (
        <img src={user1} alt="shoes" className={className} />
      ),

      name: "John Doe",
      review:
        "SportFlex has an amazing range of sports goods. The quality is top-notch, and the customer service is excellent. I recently bought a pair of running shoes and they are incredibly comfortable and durable.",
      position: "Web Developer",
    },
    {
      id: 2,
      image: (className: string) => (
        <img src={user2} alt="shoes" className={className} />
      ),
      name: "Michael Smith",
      review:
        "I am very impressed with the variety of sports equipment available at SportFlex. The prices are competitive, and the delivery was quick. I bought a new basketball, and it's perfect for my training sessions.",
      position: "Web Developer",
    },
    {
      id: 3,
      image: (className: string) => (
        <img src={user3} alt="shoes" className={className} />
      ),
      name: "Cristiano Ronaldo",
      review:
        "SportFlex is my go-to website for all my sports needs. The product descriptions are accurate, and the items I have purchased so far have exceeded my expectations. The yoga mat I ordered is perfect for my daily practice.",
      position: "Web Developer",
    },
    {
      id: 4,
      image: (className: string) => (
        <img src={user4} alt="shoes" className={className} />
      ),
      name: "Sarah Williams",
      review:
        "I love shopping at SportFlex. The website is user-friendly, and the product quality is excellent. I recently bought a set of tennis rackets, and they have greatly improved my game. Highly recommended!",
      position: "Web Developer",
    },
  ];
  return (
    <div className=" mb-28 relative overflow-x-hidden">
      <img
        className="w-full h-[620px] object-cover object-center"
        src={testimonalBanner}
        alt=""
      />
      <div className="bg-[#0a5e6d] absolute top-0  h-[620px] w-full bg-opacity-90"></div>
      <div className=" absolute lg:top-32 md:top-24 top-10  w-full">
        <Container>
          <div className="flex lg:flex-row flex-col gap-6 items-center ">
            <div className=" space-y-4  xl:pl-0 md:pl-4 lg:w-[410px] w-full md:px-0 px-3">
              <div className="flex gap-3 items-center">
                <span className="bg-[#00cde5] w-2 xl:h-6 h-5"></span>
                <p className="xl:text-xl text-lg font-bold text-white">
                  OUR TESTIMONIALS
                </p>
              </div>
              <p className="xl:text-4xl lg:text-3xl text-2xl font-bold leading-none text-white">
                What they’re talking about our policy
              </p>
              <p className="text-[#d4d8db] lg:text-base text-sm">
                Our policy emphasizes transparency and fairness, aiming to
                create a trustworthy relationship with our valued customers.
              </p>
            </div>
            <div>
              <Carousel
                opts={{
                  align: "start",
                }}
                className="w-full "
                plugins={[plugin.current]}
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
              >
                <CarouselContent>
                  {testimonialData.map((member) => (
                    <CarouselItem
                      key={member.id}
                      className="xl:basis-1/2 xl:h-[360px] xl:w-[220px] lg:h-[330px] lg:w-[140px] md:h-[300px] md:w-[160px] h-[360px] w-[92px] "
                    >
                      <div className="p-4 ">
                        <Card className="border-none">
                          <CardContent className="relative group aspect-square p-8">
                            <div className="absolute inset-0 xl:left-[350px] lg:left-[470px] md:left-[550px] left-[300px] flex ">
                              <div className="bg-[#00cde5] rounded-bl-full z-10 md:h-[60px] h-[40px] w-[30px]"></div>
                              <div className="bg-[#e2f4f2] rounded-bl-full md:h-[80px] h-[60px] w-[30px]"></div>
                            </div>
                            <div className="relative z-10 flex gap-7">
                              <div>{member.image("w-[100px] h-[100px]")}</div>
                              <div>
                                <div className="flex pt-2">
                                  <Star
                                    className="size-5"
                                    color="orange"
                                    fill="orange"
                                  />
                                  <Star
                                    className="size-5"
                                    color="orange"
                                    fill="orange"
                                  />
                                  <Star
                                    className="size-5"
                                    color="orange"
                                    fill="orange"
                                  />
                                  <Star
                                    className="size-5"
                                    color="orange"
                                    fill="orange"
                                  />
                                  <Star
                                    className="size-5"
                                    color="orange"
                                    fill="orange"
                                  />
                                  <Star
                                    className="size-5"
                                    color="orange"
                                    fill="orange"
                                  />
                                </div>
                                <p className="xl:text-xl md:text-lg text-base font-bold pt-3 pb-1">
                                  {member.name}
                                </p>
                                <p className="md:text-base text-sm text-[#82828a]">
                                  {member.position}
                                </p>
                              </div>
                            </div>
                            <p className="lg:text-base text-sm text-[#797f89] pt-8">
                              {member.review}
                            </p>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Testimonials;
