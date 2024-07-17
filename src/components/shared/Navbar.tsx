import Container from "./Container";

import { useEffect, useState } from "react";
import XLDeviceNav from "./ResponsiveNavbar/XLDeviceNav";
import MobileNav from "./ResponsiveNavbar/MobileNav";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 260) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative">
      <div
        className={`${
          isScrolled
            ? "bg-[#000000] fixed top-0 left-0 xl:-translate-y-12 h-36 xl:pt-14 pt-[92px] -translate-y-[76px]"
            : "bg-transparent absolute top-0 left-0 xl:py-3 py-6 px-3 xl-px-0"
        } w-full z-10 transition-all transform duration-500  ease-in-out`}
      >
        <Container>
          <div className=" shadow-lg  ">
            <div className=" ">
              {/* xl-device Navbar */}
              <XLDeviceNav />
              {/* Mobile-device Navbar */}
              <MobileNav />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
