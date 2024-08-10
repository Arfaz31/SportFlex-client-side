import Container from "../Container";
import blog1 from "@/assets/blogs/blog1.jpg";
import blog2 from "@/assets/blogs/blog2.jpg";
import blog3 from "@/assets/blogs/blog3.jpg";
import { Button } from "@/components/ui/button";
import { Heart, MessageCircleMore } from "lucide-react";
import { Link } from "react-router-dom";

const XlBlogs = () => {
  return (
    <div className="mb-10">
      <Container>
        <div className="flex  justify-center relative ">
          <h1 className="xl:text-4xl lg:text-3xl text-2xl text-center font-bold mb-10">
            LATEST ON BLOGS
          </h1>
          <div className="relative xl:left-[370px] lg:left-[270px] md:left-[195px] md:block hidden">
            <Link to={`/blog`}>
              <Button className="bg-gradient-to-r from-[#00cde5] to-[#10798b]  lg:text-lg  text-sm text-white  h-[40px] w-[95px] lg:w-[120px] lg:h-[50px]">
                View More
              </Button>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-12 xl:mr-12 lg:mr-7 mr-0">
          <div className="lg:col-span-8 col-span-7 xl:w-[750px] lg:w-[600px] w-[400px] lg:mx-auto mx-0">
            <div className="relative overflow-hidden group w-full lg:h-[700px] h-[675px]">
              <img
                className="lg:h-[700px] h-[675px]  group-hover:scale-110 transition-transform duration-500 object-cover object-center"
                src={blog1}
                alt=""
              />
              <div className="bg-[#10798b] text-white font-semibold flex w-[235px] text-base h-10 divide-x-2 divide-gray-400 space-x-4 pl-2 absolute bottom-0">
                <p className="pt-2">26 JULY 2024</p>
                <span className="pl-3 pt-2">
                  <MessageCircleMore />
                </span>
                <span className="pl-2 pt-2 cursor-pointer">
                  <Heart />
                </span>
              </div>
            </div>
            <div className="space-y-2 mt-6 h-[130px]">
              <p className="text-xl font-semibold">
                Basketball Basics Instructions
              </p>
              <p className="text-sm text-gray-600">
                Master the fundamentals and elevate your game with our expert
                tips. Learn essential techniques and drills to improve your
                skills on the court.
              </p>
              <div className="group relative w-[100px] cursor-pointer">
                <p className="text-lg font-semibold group-hover:text-[#1abfdc]">
                  Read More
                </p>
                <span className="absolute bottom-0 left-1/2  transform -translate-x-1/2 w-0 group-hover:w-full h-0.5 bg-[#00cde5] transition-all duration-500 ease-in-out top-8"></span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-4 col-span-5">
            <div className="grid grid-rows-2 gap-10 ">
              <div className="relative w-full lg:h-[400px] h-[400px]">
                <div className="  group xl:h-[240px] h-[210px] overflow-hidden">
                  <img
                    className="w-[428px] xl:h-[240px] h-[210px] group-hover:scale-110 transition-transform duration-500 object-cover object-center"
                    src={blog3}
                    alt=""
                  />
                  <div className="bg-[#10798b] text-white font-semibold flex w-[235px] text-base h-10 divide-x-2 divide-gray-400 space-x-4 pl-2 absolute xl:bottom-40 bottom-[190px]">
                    <p className="pt-2">26 JULY 2024</p>
                    <span className="pl-3 pt-2">
                      <MessageCircleMore />
                    </span>
                    <span className="pl-2 pt-2 cursor-pointer">
                      <Heart />
                    </span>
                  </div>
                </div>

                <div className="space-y-2 mt-6">
                  <p className="text-xl font-semibold">Jogging For Health</p>
                  <p className="text-sm text-gray-600">
                    Learn how jogging can improve your cardiovascular health and
                    stamina. Our routines are designed to target all major
                    muscle groups for a balanced workout.
                  </p>
                  <div className="group relative w-[100px] cursor-pointer">
                    <p className="text-lg font-semibold group-hover:text-[#1abfdc]">
                      Read More
                    </p>
                    <span className="absolute bottom-0 left-1/2  transform -translate-x-1/2 w-0 group-hover:w-full h-0.5 bg-[#00cde5] transition-all duration-500 ease-in-out top-8"></span>
                  </div>
                </div>
              </div>
              <div className="relative w-full lg:h-[400px] h-[400px]">
                <div className="  group xl:h-[240px] h-[210px] overflow-hidden">
                  <img
                    className="w-[428px] xl:h-[240px] h-[210px] group-hover:scale-110 transition-transform duration-500 object-cover object-center"
                    src={blog2}
                    alt=""
                  />
                  <div className="bg-[#10798b] text-white font-semibold flex w-[235px] text-base h-10 divide-x-2 divide-gray-400 space-x-4 pl-2 absolute xl:bottom-40 bottom-[190px]">
                    <p className="pt-2">26 JULY 2024</p>
                    <span className="pl-3 pt-2">
                      <MessageCircleMore />
                    </span>
                    <span className="pl-2 pt-2 cursor-pointer">
                      <Heart />
                    </span>
                  </div>
                </div>

                <div className="space-y-2 mt-6">
                  <p className="text-xl font-semibold">
                    Effective Exercise Routines
                  </p>
                  <p className="text-sm text-gray-600">
                    Discover top exercises to enhance your fitness and boost
                    overall health. Our routines are designed to target all
                    major muscle groups for a balanced workout.
                  </p>
                  <div className="group relative w-[100px] cursor-pointer">
                    <p className="text-lg font-semibold group-hover:text-[#1abfdc]">
                      Read More
                    </p>
                    <span className="absolute bottom-0 left-1/2  transform -translate-x-1/2 w-0 group-hover:w-full h-0.5 bg-[#00cde5] transition-all duration-500 ease-in-out top-8"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default XlBlogs;
