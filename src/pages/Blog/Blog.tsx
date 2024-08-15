import blog from "@/assets/blogs/blog.jpg";
import author from "@/assets/review/user1.jpg";
import recent1 from "@/assets/blogs/blog3.jpg";
import blog1 from "@/assets/blogs/blog1.jpg";
import blog2 from "@/assets/blogs/blog2.jpg";
import blog3 from "@/assets/blogs/blog3.jpg";
import blog4 from "@/assets/blogs/blog4.jpg";
import blog5 from "@/assets/blogs/blog5.jpg";
import blog6 from "@/assets/blogs/blog6.jpg";
import blog7 from "@/assets/blogs/blog7.jpg";
import blog8 from "@/assets/blogs/blog8.jpg";

import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaSquareXTwitter,
} from "react-icons/fa6";
import { CalendarDays, Heart, MessageCircleMore } from "lucide-react";
import Container from "@/components/shared/Container";
const Blog = () => {
  const blogData = [
    {
      id: 1,
      image: (className: string) => (
        <img
          src={blog1}
          alt="Government cycling target"
          className={className}
        />
      ),
      title: "Basketball Basics Instructions",
      description:
        "Master the fundamentals and elevate your game with our expert tips. Learn essential techniques and drills to improve your skills on the court.",
      date: "18 JULY 2024",
    },
    {
      id: 2,
      image: (className: string) => (
        <img src={blog2} alt="Fitness Trends 2024" className={className} />
      ),
      title: "Effective Exercise Routines",
      description:
        "Discover top exercises to enhance your fitness and boost overall health. Our routines are designed to target all major muscle groups for a balanced.",
      date: "20 JULY 2024",
    },
    {
      id: 3,
      image: (className: string) => (
        <img
          src={blog3}
          alt="Sports Gear for Beginners"
          className={className}
        />
      ),
      title: "Jogging For Health",
      description:
        "Learn how jogging can improve your cardiovascular health and stamina. Our routines are designed to target all major muscle groups for a balanced workout.",
      date: "22 JULY 2024",
    },
    {
      id: 4,
      image: (className: string) => (
        <img src={blog7} alt="Supplements for Athletes" className={className} />
      ),
      title: "Top Supplements for Athletes",
      description:
        "An exploration of the best supplements available for athletes, focusing on how they can improve performance and support overall health.",
      date: "02 AUG 2024",
    },
    {
      id: 5,
      image: (className: string) => (
        <img
          src={blog5}
          alt="Staying Motivated to Workout"
          className={className}
        />
      ),
      title: "How to Stay Motivated to Workout",
      description:
        "Learn effective strategies to keep your workout routine exciting and stay committed to your fitness goals, even when motivation wanes.",
      date: "28 JULY 2024",
    },
    {
      id: 6,
      image: (className: string) => (
        <img
          src={blog6}
          alt="Diet and Athletic Performance"
          className={className}
        />
      ),
      title: "How Diet Affects Athletic Performance",
      description:
        "Discover how a balanced diet can enhance your athletic performance, including tips on nutrition that supports your training and recovery.",
      date: "30 JULY 2024",
    },
    {
      id: 7,
      image: (className: string) => (
        <img src={blog4} alt="Top 10 Running Shoes" className={className} />
      ),
      title: "Top 10 Running Shoes of the Year",
      description:
        "Find the perfect pair with our list of the top 10 running shoes for 2024, featuring reviews and insights to help you make an informed.",
      date: "25 JULY 2024",
    },

    {
      id: 8,
      image: (className: string) => (
        <img
          src={blog8}
          alt="Benefits of Morning Workouts"
          className={className}
        />
      ),
      title: "Benefits of Morning Workouts",
      description:
        "Discover the physical and mental benefits of working out in the morning, including tips on how to establish a successful morning routine.",
      date: "05 AUG 2024",
    },
    {
      id: 9,
      image: (className: string) => (
        <img
          src={blog3}
          alt="Injury Prevention Practices"
          className={className}
        />
      ),
      title: "Best Practices for Injury Prevention",
      description:
        "Explore essential tips and techniques for preventing injuries during workouts, ensuring you stay safe while pursuing your fitness goals.",
      date: "10 AUG 2024",
    },
    {
      id: 10,
      image: (className: string) => (
        <img
          src={blog4}
          alt="Choosing the Right Sports Gear"
          className={className}
        />
      ),
      title: "How to Choose the Right Sports Gear",
      description:
        "A helpful guide on selecting the best sports gear tailored to your specific needs and activities, ensuring optimal performance and comfort.",
      date: "12 AUG 2024",
    },
  ];

  return (
    <div>
      <div className="relative">
        <img
          className="object-cover md:h-[500px] h-[400px] w-full"
          src={blog}
          alt=""
        />
        <div className="bg-black opacity-45 md:h-[500px] h-[400px] w-full absolute top-0 z-1"></div>
        <div className="flex items-center gap-3 absolute md:top-64 top-48   xl:left-[40%]  md:left-[38%] sm:left-[25%] left-[21%]  mx-auto">
          <span className="bg-[#00cde5] w-16 h-1  "></span>
          <h1 className="lg:text-4xl text-2xl text-white font-bold ">BLOGS</h1>
          <span className="bg-[#00cde5] w-16 h-1   "></span>
        </div>
      </div>
      <div className="md:my-24 my-20">
        <Container>
          <div className="grid md:grid-cols-12 grid-rows-12 gap-10 xl:px-0 md:px-5 px-3">
            <div className="xl:col-span-3 md:col-span-4 row-span-12">
              <p className="text-lg font-bold mb-1">AUTHOR OF THE BLOG</p>
              <div className="flex items-center">
                <span className="bg-[#00cde5] w-24 h-1"></span>
                <hr className="bg-[#6f7276] w-full" />
              </div>
              <div className=" mt-7">
                <img className="w-40 h-40 mx-auto" src={author} alt="author" />
                <p className="my-2 text-xl font-bold text-center">
                  Arfaz Ahamed
                </p>
                <p className="text-sm text-center text-[#797f89]">
                  Full-Stack Developer
                </p>
                <p className="text-sm text-center text-[#474848] my-4">
                  I am a highly passionate and dedicated full-stack web
                  developer committed to continuous learning in coding, with a
                  focus on maintaining high coding standards.
                </p>
                <div className=" flex gap-3 items-center justify-center ">
                  <span className="inline-block bg-[#00cde5] rounded-full p-2 cursor-pointer hover:bg-[#10798b]">
                    <FaGithub className="text-white w-4 h-4" />
                  </span>
                  <span className="inline-block bg-[#00cde5] rounded-full p-2 cursor-pointer hover:bg-[#10798b]">
                    <FaFacebookF className="text-white w-4 h-4" />
                  </span>
                  <span className="inline-block bg-[#00cde5] rounded-full p-2 cursor-pointer hover:bg-[#10798b]">
                    <FaInstagram className="text-white w-4 h-4" />
                  </span>
                  <span className="inline-block bg-[#00cde5] rounded-full p-2 cursor-pointer hover:bg-[#10798b]">
                    <FaSquareXTwitter className="text-white w-4 h-4" />
                  </span>
                </div>
              </div>
              <p className="text-lg font-bold mt-16 mb-1">CATEGORIES</p>
              <div className="flex items-center">
                <span className="bg-[#00cde5] w-24 h-1"></span>
                <hr className="bg-[#6f7276] w-full" />
              </div>
              <div>
                <ul className="text-base divide-y divide-[#d4d5d5] ">
                  <li className="py-5 cursor-pointer hover:text-[#00cde5]">
                    Exercise
                  </li>
                  <li className="py-5 cursor-pointer hover:text-[#00cde5]">
                    Bikes
                  </li>
                  <li className="py-5 cursor-pointer hover:text-[#00cde5]">
                    Gym
                  </li>
                  <li className="py-5 cursor-pointer hover:text-[#00cde5]">
                    Football
                  </li>
                  <li className="py-5 cursor-pointer hover:text-[#00cde5]">
                    Cricket
                  </li>
                  <li className="py-5 cursor-pointer hover:text-[#00cde5]">
                    Life style
                  </li>
                </ul>
              </div>
              <p className="text-lg font-bold mt-16 mb-1">RECENT POSTS</p>
              <div className="flex items-center">
                <span className="bg-[#00cde5] w-24 h-1"></span>
                <hr className="bg-[#6f7276] w-full" />
              </div>
              <div className="divide-y divide-[#d4d5d5] ">
                <div className="flex gap-5 py-5">
                  <img
                    className="lg:w-24 lg:h-24 w-20 h-20 object-cover object-center"
                    src={recent1}
                    alt=""
                  />
                  <div>
                    <p className="lg:text-base text-sm font-medium pb-3">
                      Jogging For Health
                    </p>
                    <div className="flex gap-2">
                      <CalendarDays className="text-[#00cde5]" />
                      <p className="lg:text-sm text-xs">26 JULY 2024</p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-5 py-5">
                  <img
                    className="lg:w-24 lg:h-24 w-20 h-20 object-cover object-center"
                    src={recent1}
                    alt=""
                  />
                  <div>
                    <p className="lg:text-base text-sm font-medium pb-3">
                      Jogging For Health
                    </p>
                    <div className="flex gap-2">
                      <CalendarDays className="text-[#00cde5]" />
                      <p className="lg:text-sm text-xs">26 JULY 2024</p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-5 py-5">
                  <img
                    className="lg:w-24 lg:h-24 w-20 h-20 object-cover object-center"
                    src={recent1}
                    alt=""
                  />
                  <div>
                    <p className="lg:text-base text-sm font-medium pb-3">
                      Jogging For Health
                    </p>
                    <div className="flex gap-2">
                      <CalendarDays className="text-[#00cde5]" />
                      <p className="lg:text-sm text-xs">26 JULY 2024</p>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-lg font-bold mt-16 mb-1">TAGS</p>
              <div className="flex items-center">
                <span className="bg-[#00cde5] w-24 h-1"></span>
                <hr className="bg-[#6f7276] w-full" />
              </div>
              <div className="mt-7 md:mb-0 mb-10">
                <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 grid-cols-3 gap-3">
                  <div className="border border-[#d4d5d5] rounded-full hover:bg-[#00cde5] hover:text-white p-2 cursor-pointer transition-all duration-500 ease-in-out">
                    <p className="text-sm text-center">Gear</p>
                  </div>
                  <div className="border border-[#d4d5d5] rounded-full hover:bg-[#00cde5] hover:text-white p-2 cursor-pointer transition-all duration-500 ease-in-out">
                    <p className="text-sm text-center">Jogging</p>
                  </div>
                  <div className="border border-[#d4d5d5] rounded-full hover:bg-[#00cde5] hover:text-white p-2 cursor-pointer transition-all duration-500 ease-in-out">
                    <p className="text-sm text-center">Events</p>
                  </div>
                  <div className="border border-[#d4d5d5] rounded-full hover:bg-[#00cde5] hover:text-white p-2 cursor-pointer transition-all duration-500 ease-in-out">
                    <p className="text-sm text-center">Workouts</p>
                  </div>
                  <div className="border border-[#d4d5d5] rounded-full hover:bg-[#00cde5] hover:text-white p-2 cursor-pointer transition-all duration-500 ease-in-out">
                    <p className="text-sm text-center">Training</p>
                  </div>
                  <div className="border border-[#d4d5d5] rounded-full hover:bg-[#00cde5] hover:text-white p-2 cursor-pointer transition-all duration-500 ease-in-out">
                    <p className="text-sm text-center">Health</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="xl:col-span-9 md:col-span-8 row-span-12">
              <div className="grid md:grid-cols-2 grid-cols-1 md:gap-10 gap-14">
                {blogData.slice(0, 8).map((data) => (
                  <div
                    className="relative w-full xl:h-[460px] lg:h-[500px] [460px] "
                    key={data.id}
                  >
                    <div className="group w-full lg:h-[300px] md:[220px] overflow-hidden relative">
                      {data.image(
                        "w-full lg:h-[300px] md:h-[220px]  group-hover:scale-110 transition-transform duration-500 object-cover object-center"
                      )}

                      <div className="bg-[#10798b] text-white font-semibold flex lg:w-[240px] w-[200px] text-base h-10 divide-x-2 divide-gray-400 space-x-4 pl-2 absolute bottom-0">
                        <p className="pt-2 lg:pr-2 pr-0 text-sm ">
                          {data.date}
                        </p>
                        <span className="lg:pl-3 pl-2 pt-2 ">
                          <MessageCircleMore className="w-4 h-4" />
                        </span>
                        <span className="pl-2 pt-2 cursor-pointer">
                          <Heart className="w-4 h-4" />
                        </span>
                      </div>
                    </div>

                    <div className="space-y-2 mt-6">
                      <p className="xl:text-xl lg:text-lg font-bold">
                        {data.title}
                      </p>
                      <p className="lg:text-sm text-[14px]  text-gray-600">
                        {data.description}
                      </p>
                      <div className="group relative w-[100px] cursor-pointer">
                        <p className="text-lg font-semibold group-hover:text-[#1abfdc]">
                          Read More
                        </p>
                        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 group-hover:w-full h-0.5 bg-[#00cde5] transition-all duration-500 ease-in-out top-8"></span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Blog;
