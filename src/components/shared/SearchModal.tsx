import { Button } from "../ui/button";
import { Search } from "lucide-react";
import Typewriter from "typewriter-effect";
import Container from "./Container";
import { useEffect, useRef, useState } from "react";
import { useGetAllCatagoryQuery } from "@/redux/api/Catagory/CatagoryApi";
import { Link, useNavigate } from "react-router-dom";
import { TCatagory } from "@/type/Type";

const SearchModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const searchInputRef = useRef<HTMLInputElement>(null);

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

  const { data: categories } = useGetAllCatagoryQuery(undefined);

  const handleSearchClick = () => {
    if (searchInputRef.current) {
      navigate(`/products?searchTerm=${searchInputRef.current.value}`);
      setIsModalOpen(false); // Close the modal after navigating
    }
  };
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
          className={`fixed z-50 top-0 left-0 w-full h-[300px] bg-white px-2 py-6 shadow-lg transition-transform duration-500 transform ${
            isModalOpen ? "translate-y-0" : "-translate-y-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <Container>
            <div className="relative w-full mt-3">
              <input
                type="text"
                ref={searchInputRef}
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
                onClick={handleSearchClick}
              >
                <p className="hover:text-[#10798b] font-semibold text-[#222]">
                  SEARCH
                </p>
              </div>
            </div>

            <p className="text-[#222] text-lg font-semibold xl:mt-20 mt-12">
              HOT SEARCHES :
            </p>
            <div className="flex gap-3">
              {categories?.data?.slice(0, 3).map((cat: TCatagory) => (
                <Link to={`/products?categoryId=${cat._id}`} key={cat._id}>
                  <Button className="cursor-pointer bg-gradient-to-r from-[#00cde5] to-[#10798b] mt-4 text-sm text-white w-[100px] h-[43px]">
                    {cat.catagoryName}
                  </Button>
                </Link>
              ))}
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
