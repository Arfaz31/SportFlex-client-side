import DashboardContainer from "@/components/shared/DashboardContainer";
import { Button } from "@/components/ui/button";
import { Mail, Search } from "lucide-react";
import { Link } from "react-router-dom";
import Notification from "./TopNavDropDown/Notification";
const TopNav = () => {
  return (
    <div className="h-[60px] w-full bg-[#112143] shadow-2xl sticky top-0 z-20 border-b border-[#59647c] pt-3">
      <DashboardContainer>
        <div className="flex justify-between items-center ">
          <div className="ml-5">
            <Link to="/">
              {" "}
              <Button className="bg-gradient-to-r from-[#00cde5] to-[#10798b] text-xs md:text-sm text-white  h-[40px] w-[100px] md:w-[130px] md:h-[42px]">
                Go To Home
              </Button>
            </Link>
          </div>
          <div>
            <div className="flex items-center  space-x-10 xl:pr-0 pr-6 pt-2">
              <div>
                <Search />
              </div>
              <Notification />

              <div className="relative cursor-pointer">
                <Mail />
                <div className="absolute xl:-top-4 -top-3 -right-3 bg-[#dc3545] xl:w-6 w-5 xl:h-6 h-5 rounded-full flex items-center justify-center">
                  <p className="ml-1 xl:text-base text-xs">6+</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DashboardContainer>
    </div>
  );
};

export default TopNav;
