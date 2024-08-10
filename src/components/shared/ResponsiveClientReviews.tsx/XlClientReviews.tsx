import banner from "@/assets/reviewBanner.jpg";
import user1 from "@/assets/review/user1.jpg";
import user2 from "@/assets/review/user2.jpg";
import user3 from "@/assets/review/user3.jpg";
import user5 from "@/assets/review/user5.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import Container from "../Container";
import { Star } from "lucide-react";

const XlClientReviews = () => {
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

  // Grouping the data to show pairs of items
  const groupedData = [
    [ReviewData[0], ReviewData[1]],
    [ReviewData[2], ReviewData[3]],
  ];

  return (
    <div className=" mb-28 relative">
      <img
        className="w-full h-[560px] object-cover object-center"
        src={banner}
        alt=""
      />
      <div className="bg-black absolute top-0  h-[560px] w-full bg-opacity-45"></div>
      <div className="absolute top-16 text-center right-4 w-full">
        <h1 className="text-white font-bold xl:text-4xl lg:text-3xl tracking-wider leading-tight">
          TOP <br />
          CLIENT REVIEWS
        </h1>
        <div className="flex items-center justify-center pt-2">
          <Star className="size-6" color="orange" fill="orange" />
          <Star className="size-6" color="orange" fill="orange" />
          <Star className="size-6" color="orange" fill="orange" />
          <Star className="size-6" color="orange" fill="orange" />
          <Star className="size-6" color="orange" fill="orange" />
          <Star className="size-6" color="orange" fill="orange" />
        </div>
      </div>
      <div className="absolute top-56 w-full mx-auto ">
        <Container className="px-0">
          <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            {groupedData.map((group, index) => (
              <SwiperSlide key={index} className="m-0">
                <div className="grid grid-cols-2  h-[300px] ">
                  {group.map((item) => (
                    <div
                      key={item.id}
                      className="flex bg-white shadow-lg rounded-lg lg:h-[220px]  xl:w-[75%] lg:w-[89%] mx-auto   items-center px-4 "
                    >
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
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
      </div>
    </div>
  );
};

export default XlClientReviews;
