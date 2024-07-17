import { Button } from "../ui/button";
import { Search } from "lucide-react";
import Typewriter from "typewriter-effect";
import Container from "./Container";
import { useEffect, useState } from "react";

const SearchModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
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
    <div>
      <div
        className="w-[35px] h-[35px] md:w-[40px] md:h-[40px] cursor-pointer hover:bg-[#00cde5] rounded-full transition-all duration-500 hover:scale-110 ease-in-out flex items-center justify-center p-2"
        onClick={() => setIsModalOpen(true)}
      >
        <Search className="w-6 h-6 md:w-8 md:h-8" />
      </div>
      <div
        className={`fixed inset-0 z-50 bg-black bg-opacity-50 h-[200vh]  transition-opacity duration-500 ${
          isModalOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        } ${isScrolled ? "translate-y-10 fixed" : "translate-y-0 fixed"}`}
        onClick={() => setIsModalOpen(false)}
      >
        <div
          className={`fixed z-50 top-0 left-0 w-full h-[300px] bg-white p-6  shadow-lg transition-transform duration-500 transform ${
            isModalOpen ? "translate-y-0" : "-translate-y-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <Container>
            <div className="relative w-full mt-3">
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded text-[#222] focus:placeholder-transparent"
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
              />
              {!isFocused && (
                <div className="absolute top-0 left-0 w-full h-full p-3 pointer-events-none text-[#b2b1b1]">
                  <Typewriter
                    options={{
                      strings: ["Enter your keywords"],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </div>
              )}
              <div
                className="absolute top-0 right-0 p-3 cursor-pointer"
                onClick={() => {
                  setIsModalOpen(false);
                }}
              >
                <p className="hover:text-[#10798b] font-semibold text-[#222]">
                  SEARCH
                </p>
              </div>
            </div>

            <p className="text-[#222] text-lg font-semibold xl:mt-20 mt-12">
              HOT SEARCHES :
            </p>
            <div className="flex gap-2">
              <Button className="bg-[#10798b] mt-4 text-xs text-white w-[100px] h-[43px]">
                CRICKET BAT
              </Button>
              <Button className="bg-[#10798b] mt-4 text-xs text-white w-[100px] h-[43px]">
                FOOTBALL
              </Button>
              <Button className="bg-[#10798b] mt-4 text-xs text-white w-[100px] h-[43px]">
                VOLLEYBALL
              </Button>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
