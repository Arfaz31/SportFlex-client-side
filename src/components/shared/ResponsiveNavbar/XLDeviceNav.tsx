import { Link } from "react-router-dom";
import logo from "@/assets/Sports.png";
import { Heart, ShoppingCart, UserRound } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import SearchModal from "../SearchModal";
import { useAppSelector } from "@/redux/hook";
import { Button } from "@/components/ui/button";

const XLDeviceNav = () => {
  const products = useAppSelector((store) => store.cart.products);
  const Links = [
    { name: "HOME", link: "/" },
    { name: "PRODUCTS", link: "/products" },
    { name: "DASHBOARD", link: "/admin-dashboard" },
    { name: "BLOG", link: "/blog" },
    { name: "ABOUT", link: "/about" },
    { name: "CONTACT", link: "/contact" },
  ];

  return (
    <div className="xl:block hidden">
      <div className="flex justify-between items-center ">
        <div>
          <Link className="flex items-center gap-2 " to="/">
            <img className=" w-[40px] " src={logo} alt="logo" />
            <span className=" text-4xl text-white  font-bold">
              SPORT<span className="text-[#00cde5]">FLEX</span>
            </span>
          </Link>
        </div>

        <div className={`flex items-center`}>
          <ul className="flex text-white">
            {Links.map((link) => (
              <li
                key={link.name}
                className="xl:pl-8 pl-6  lg:text-lg text-base xl:py-6 py-4 cursor-pointer relative group transition-all duration-500 ease-in-out"
              >
                <Link
                  to={link.link}
                  className="relative  lg:block w-full h-full"
                >
                  {link.name}
                  <span className="hidden xl:block absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 group-hover:w-full h-0.5 bg-[#00cde5] transition-all duration-500 ease-in-out top-8"></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className=" xl:flex items-center space-x-6 text-white">
          <div>
            <SearchModal />
          </div>
          <div>
            <HoverCard>
              <HoverCardTrigger>
                <Button className="w-10 h-10 cursor-pointer bg-transparent hover:bg-[#00cde5] rounded-full transition-all  duration-500 hover:scale-110 ease-in-out flex items-center justify-center p-2">
                  <UserRound className="w-8 h-8" />
                </Button>
              </HoverCardTrigger>
              <HoverCardContent className="w-[170px] text-center ">
                <div className="flex justify-center gap-2">
                  <p className="hover:text-[#00cde5]">LOGIN</p>
                  <p>|</p>
                  <p className="hover:text-[#00cde5]">SIGNUP</p>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
          <div className="w-10 h-10 cursor-pointer hover:bg-[#00cde5] rounded-full transition-all  duration-500 hover:scale-110 ease-in-out flex items-center justify-center p-2">
            <Heart className="w-8 h-8" />
          </div>
          <div>
            <Link to={"/cart"}>
              <div className="w-10 h-10 cursor-pointer hover:bg-[#00cde5] rounded-full transition-all duration-500 hover:scale-110 ease-in-out flex items-center justify-center p-2 relative group">
                <ShoppingCart className="w-8 h-8 text-white transition-colors duration-500" />
                <span className="rounded-full absolute top-[-5px] right-[-5px] bg-[#10798b] text-white text-xs w-5 h-5 flex items-center justify-center group-hover:bg-white group-hover:text-[#10798b] transition-colors duration-500">
                  {products.length}
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default XLDeviceNav;
