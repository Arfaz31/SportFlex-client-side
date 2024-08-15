import Container from "../Container";
import blog1 from "@/assets/blogs/blog1.jpg";
import blog2 from "@/assets/blogs/blog2.jpg";
import blog3 from "@/assets/blogs/blog3.jpg";
import { Button } from "@/components/ui/button";
import { Heart, MessageCircleMore } from "lucide-react";
import { Link } from "react-router-dom";
const SmBlogs = () => {
  return (
    <div className="mt-28 mb-12">
      <Container>
        <h1 className="xl:text-4xl lg:text-3xl text-2xl text-center font-bold mb-10">
          LATEST ON BLOGS
        </h1>
        <div className="grid grid-rows-3 gap-14 ">
          <div className="mx-auto h-400px">
            <div className="relative overflow-hidden group w-full h-[300px]">
              <img
                className=" h-[300px] w-full  group-hover:scale-110 transition-transform duration-500 object-cover object-top "
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
          <div className="relative w-full h-400px">
            <div className="  group h-[300px] w-full overflow-hidden">
              <img
                className=" h-[300px] w-full group-hover:scale-110 transition-transform duration-500 object-cover object-center"
                src={blog3}
                alt=""
              />
              <div className="bg-[#10798b] text-white font-semibold flex w-[235px] text-base h-10 divide-x-2 divide-gray-400 space-x-4 pl-2 absolute  top-[260px]">
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
                stamina. Our routines are designed to target all major muscle
                groups for a balanced workout.
              </p>
              <div className="group relative w-[100px] cursor-pointer">
                <p className="text-lg font-semibold group-hover:text-[#1abfdc]">
                  Read More
                </p>
                <span className="absolute bottom-0 left-1/2  transform -translate-x-1/2 w-0 group-hover:w-full h-0.5 bg-[#00cde5] transition-all duration-500 ease-in-out top-8"></span>
              </div>
            </div>
          </div>
          <div className="relative w-full  h-[400px]">
            <div className="  group w-full  h-[300px] overflow-hidden">
              <img
                className=" w-full h-[300px] group-hover:scale-110 transition-transform duration-500 object-cover object-center"
                src={blog2}
                alt=""
              />
              <div className="bg-[#10798b] text-white font-semibold flex w-[235px] text-base h-10 divide-x-2 divide-gray-400 space-x-4 pl-2 absolute bottom-[100px]">
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
                Discover top exercises to enhance your fitness and boost overall
                health. Our routines are designed to target all major muscle
                groups for a balanced workout.
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
        <div className="mt-8 flex justify-center">
          <Link to={`/blog`}>
            <Button className="bg-gradient-to-r from-[#00cde5] to-[#10798b] text-sm text-white  h-[40px] w-[110px] text-center">
              View More
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default SmBlogs;
