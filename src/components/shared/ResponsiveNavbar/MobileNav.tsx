import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Heart, ShoppingCart } from "lucide-react";
import SearchModal from "@/components/shared/SearchModal";
import logo from "@/assets/Sports.png";
import { useAppSelector } from "@/redux/hook";
const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const products = useAppSelector((store) => store.cart.products);
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

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const Links = [
    { name: "HOME", link: "/" },
    { name: "PRODUCTS", link: "/products" },
    { name: "DASHBOARD", link: "/admin-dashboard" },
    { name: "BLOG", link: "/blog" },
    { name: "ABOUT", link: "/about" },
    { name: "CONTACT", link: "/contact" },
  ];

  return (
    <div className="block xl:hidden">
      <div
        className={`fixed inset-0 h-[200vh] bg-black/30  z-50 transition-opacity duration-500 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      >
        <div
          className={`fixed top-0 left-0 md:w-[40%] w-[60%]  shadow-lg transition-transform duration-500 transform  ${
            isOpen ? "translate-x-0 " : "-translate-x-full"
          } ${isScrolled ? "translate-y-[75px] fixed" : "translate-y-0 fixed"}`}
        >
          <ul className="flex flex-col divide-y divide-gray-400 bg-slate-200 h-[200vh]">
            {Links.map((link) => (
              <li
                key={link.name}
                className=" pl-6  lg:text-lg text-base  py-4 cursor-pointer relative group hover:bg-gray-400 transition-all duration-500 ease-in-out   xl:hover:bg-transparent"
                onClick={() => setIsOpen(false)}
              >
                <Link
                  to={link.link}
                  className="relative  lg:block w-full h-full"
                >
                  {link.name}
                </Link>
              </li>
            ))}

            <div className="xl:hidden  pl-6  text-lg  py-4 cursor-pointer ">
              <Link to="/wishlist">
                <h1 className="">WISHLIST</h1>
              </Link>
            </div>
            <div className="flex items-center gap-2 xl:hidden  pl-6  text-lg py-4 cursor-pointer">
              <Link to="/login">
                <h1 className="">LOGIN</h1>
              </Link>
              <span className="text-gray-700 ">|</span>
              <Link to="/signup">
                <h1 className="">SIGNUP</h1>
              </Link>
            </div>
          </ul>
        </div>
      </div>

      <div className="xl:hidden flex  justify-between  items-center text-white w-full relative ">
        <div className=" flex items-center gap-1">
          <div className="text-white cursor-pointer xl:hidden ">
            {isOpen ? (
              <span onClick={handleToggle}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 md:w-7 md:h-7  cursor-pointer"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </span>
            ) : (
              <span onClick={handleToggle}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 md:w-7 md:h-7  cursor-pointer"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                  />
                </svg>
              </span>
            )}
          </div>
          <div>
            <SearchModal />
          </div>
        </div>

        <div className=" ">
          <Link className="flex items-center gap-1 " to="/">
            <img className=" w-[22px] md:w-[30px]" src={logo} alt="logo" />
            <span className=" text-2xl md:text-2xl lg:text-3xl font-bold">
              SPORT<span className="text-[#00cde5]">FLEX</span>
            </span>
          </Link>
        </div>

        <div className=" relative flex pr-2">
          <div className="xl:hidden lg:block hidden">
            <div className=" w-10 h-10 cursor-pointer hover:bg-[#00cde5] rounded-full transition-all  duration-500 hover:scale-110 ease-in-out flex items-center justify-center p-2">
              <Heart className="w-8 h-8" />
            </div>
          </div>

          <div>
            <Link to={"/cart"}>
              <div className="w-[35px] h-[35px] md:w-9 md:h-9 cursor-pointer hover:bg-[#00cde5] rounded-full transition-all duration-500 hover:scale-110 ease-in-out flex items-center justify-center relative group">
                <ShoppingCart className="w-6 h-6  text-white transition-colors duration-500" />
                <span className="rounded-full absolute top-0 right-0 translate-x-[30%] translate-y-[-30%] bg-[#10798b] text-white text-xs min-w-[18px] min-h-[18px] px-[3px] flex items-center justify-center group-hover:bg-white group-hover:text-[#10798b] transition-colors duration-500">
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

export default MobileNav;
