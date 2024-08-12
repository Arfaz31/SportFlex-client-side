import { Link } from "react-router-dom";
import logo from "@/assets/Sports.png";
import { Mail, MapPin, Phone } from "lucide-react";
import fb from "@/assets/icon/fb.png";
import insta from "@/assets/icon/insta.png";
import twitter from "@/assets/icon/twit.png";
import youtube from "@/assets/icon/tube.png";
import card1 from "@/assets/icon/card-1.png";
import card2 from "@/assets/icon/card-1.png";
import card3 from "@/assets/icon/card-3.png";
import card4 from "@/assets/icon/card-4.png";
import card5 from "@/assets/icon/card-5.png";

const SmFooter = () => {
  return (
    <div>
      <div className="py-16 px-3 ">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col space-y-5">
            <div>
              <Link className="flex items-center gap-2 " to="/">
                <img
                  className=" xl:w-[40px] w-[22px] md:w-[30px]"
                  src={logo}
                  alt="logo"
                />
                <span className=" xl:text-4xl text-white text-xl md:text-2xl font-bold">
                  SPORT<span className="text-[#00cde5]">FLEX</span>
                </span>
              </Link>
              <p className="text-white pt-6 xl:text-base text-xs">
                Your Ultimate Destination for Premium Sports Gear and Equipment.
                Shop with us for the best in quality and performance.
              </p>
            </div>

            <div className="flex space-x-2 text-white xl:text-base text-xs">
              <Phone className="text-[#00cde5] h-4 xl:h-6" />
              <p>+880 1799-370138</p>
            </div>
            <div className="flex space-x-2 text-white xl:text-base text-xs">
              <MapPin className="text-[#00cde5] h-4 xl:h-6" />
              <p>38 Kemal Ataturk Ave, Dhaka 1213, Bangladesh</p>
            </div>
            <div className="flex space-x-2 text-white xl:text-base text-xs">
              <Mail className="text-[#00cde5] h-4 xl:h-6" />
              <p>sportFlex@gmail.com</p>
            </div>
          </div>

          <div className="flex justify-between">
            <div className="flex flex-col gap-16">
              <div>
                <div className="flex flex-col space-y-5 text-white">
                  <p className="font-bold  text-base">MY ACCOUNT</p>
                  <p className=" pt-0  text-xs">My Account</p>
                  <p className="xl:text-base text-xs">Shopping Cart</p>
                  <p className="xl:text-base text-xs">Wishlist</p>
                  <p className="xl:text-base text-xs">Tracking Info</p>
                  <p className="xl:text-base text-xs">Order History</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col space-y-5  text-white">
              <p className="font-bold xl:text-lg text-base">INFORMATION</p>
              <p className=" pt-0 xl:text-base text-xs">Delivery & Returns</p>
              <p className="xl:text-base text-xs">FAQ's</p>
              <p className="xl:text-base text-xs">Specials Offers</p>
              <p className="xl:text-base text-xs">Terms & Condition</p>
              <p className="xl:text-base text-xs">Privacy Policy</p>
            </div>
          </div>

          <div>
            <div className="flex flex-col space-y-5 text-white">
              <p className="font-bold xl:text-lg text-base">NEWSLETTER</p>
              <div className="flex w-full max-w-sm items-center ">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="p-2 w-full border border-[#222] rounded-l focus:outline-none  focus:border-[#1abfdc]"
                />
                <button
                  className="bg-[#10798b] px-4 py-2 h-full text-white rounded-r border border-[#222] -ml-px"
                  type="submit"
                >
                  Subscribe
                </button>
              </div>

              <p className=" xl:text-base text-xs">
                Sign up get 20% sale off for first time, Get all the latest
                deals and special offers, first.
              </p>
              <div className="flex items-center  gap-2 ">
                <p className="pr-5 xl:text-base text-xs">Follow us:</p>
                <div className="flex space-x-3">
                  <img className="xl:w-8 w-6" src={fb} alt="" />
                  <img className="xl:w-8 w-6" src={insta} alt="" />
                  <img className="xl:w-8 w-6" src={twitter} alt="" />
                  <img className="xl:w-8 w-6" src={youtube} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="xl:pt-24 pt-20">
          <hr className="h-[1px] bg-gray-200" />
          <div className="flex flex-col gap-4 xl:pt-8 pt-6">
            <p className="text-white xl:text-base text-xs">
              Copyright © 2024 SPORTFLEX Ltd. All rights reserved.
            </p>
            <div className="flex gap-2">
              <img className="xl:w-8 w-7" src={card1} alt="" />
              <img className="xl:w-8 w-7" src={card2} alt="" />
              <img className="xl:w-8 w-7" src={card3} alt="" />
              <img className="xl:w-8 w-7" src={card4} alt="" />
              <img className="xl:w-8 w-7" src={card5} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmFooter;
