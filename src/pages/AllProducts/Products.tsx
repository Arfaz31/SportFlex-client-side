import Container from "@/components/shared/Container";
import { LayoutGrid, List, X } from "lucide-react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Lottie from "lottie-react";
import spinner from "@/assets/pIR8Sd9Ib1.json";
import { Star, Heart, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useSearchParams } from "react-router-dom";
import sports from "@/assets/sports.jpg";
import { useEffect, useRef, useState } from "react";
import Select from "react-select";
import { useGetAllProductsQuery } from "@/redux/api/product/productApi";
import { TCatagory, TInputs } from "@/type/Type";
import LoadingPage from "@/components/shared/LoadingPage";
import { useGetAllCatagoryQuery } from "@/redux/api/Catagory/CatagoryApi";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useAppDispatch } from "@/redux/hook";
import { addToCart } from "@/redux/features/cartSlice";
const options: Array<{ value: string; label: string }> = [
  { value: "price-low-high", label: "Lowest to Highest" },
  { value: "price-high-low", label: "Highest to Lowest" },
];

const Products = () => {
  const [isGridLayout, setIsGridLayout] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOption, setSelectedOption] = useState<{
    value: string;
    label: string;
  } | null>(null);
  const [availability, setAvailability] = useState<string | null>(null);
  const [minPrice, setMinPrice] = useState<number | null>(null);
  const [maxPrice, setMaxPrice] = useState<number | null>(null);
  const [brand, setBrand] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const [searchParams] = useSearchParams();
  const categoryId = searchParams.get("categoryId") || "";
  const urlSearchTerm = searchParams.get("searchTerm") || "";
  const sortBy = selectedOption?.value || ""; // Convert null to an empty string

  // Update searchTerm based on the URL parameter when the component mounts or the URL changes
  useEffect(() => {
    setSearchTerm(urlSearchTerm);
  }, [urlSearchTerm]);

  const { data, isLoading, error } = useGetAllProductsQuery({
    categoryId,
    sortBy,
    searchTerm,
    availability: availability ?? undefined,
    minPrice: minPrice ?? undefined,
    maxPrice: maxPrice ?? undefined,
    brand: brand ?? undefined,
    page: currentPage,
  });

  const { data: categories } = useGetAllCatagoryQuery(undefined);

  const dispatch = useAppDispatch();

  if (isLoading) {
    return <LoadingPage />;
  }

  const totalPages = data?.data?.totalPages || 1;
  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const handleSelectChange = (
    selectedOption: { value: string; label: string } | null
  ) => {
    setSelectedOption(selectedOption);
  };

  const handleSearchClick = () => {
    if (searchInputRef.current) {
      setSearchTerm(searchInputRef.current.value); // Update the search term
    }
  };

  const handleAvailabilityChange = (value: string) => {
    setAvailability(value);
  };

  const handleMinPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value ? Number(event.target.value) : null;
    setMinPrice(value);
  };

  const handleMaxPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value ? Number(event.target.value) : null;
    setMaxPrice(value);
  };

  const handleBrandChange = (brand: string) => {
    setBrand(brand);
  };

  const handleClearFilter = () => {
    setAvailability(null);
    setSelectedOption(null);
    setSearchTerm("");
    setMinPrice(null);
    setMaxPrice(null);
    setBrand(null);
  };

  if (error) {
    console.log(error);
  }
  const placeholderCount = data ? data.length : 12;
  return (
    <div>
      <div className="relative">
        <img
          className="object-cover md:h-[500px] h-[400px] w-full"
          src={sports}
          alt=""
        />
        <div className="bg-black opacity-45 md:h-[500px] h-[400px] w-full absolute top-0 z-1"></div>
        <div className="flex items-center gap-3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <span className="bg-[#00cde5] w-16 h-1"></span>
          <h1 className="lg:text-4xl text-2xl text-white font-bold text-center">
            ALL PRODUCTS
          </h1>
          <span className="bg-[#00cde5] w-16 h-1"></span>
        </div>
      </div>
      <div>
        <Container className="md:my-24 mt-20">
          <div className="grid md:grid-cols-12 grid-rows-1 xl:gap-20 md:gap-10 gap-36 xl:px-0  sm:px-3 px-1">
            <div className="xl:col-span-4 lg:col-span-3 md:col-span-4 row-span-1 md:order-1 order-2">
              <div className="flex w-full max-w-sm items-center ">
                <input
                  type="text"
                  placeholder="Search"
                  ref={searchInputRef}
                  className="p-2 w-full border border-[#222] rounded-l focus:outline-none focus:border-[#1abfdc]"
                />
                <button
                  className="bg-[#10798b] px-4 py-2 h-full text-white rounded-r border border-[#222] -ml-px"
                  type="submit"
                  onClick={handleSearchClick}
                >
                  Search
                </button>
              </div>

              <div>
                <p className="text-lg font-bold mt-14 mb-1">CATEGORIES</p>
                <div className="flex items-center">
                  <span className="bg-[#00cde5] w-24 h-1"></span>
                  <hr className="bg-[#6f7276] w-full" />
                </div>
                <div>
                  <ul className="text-base divide-y divide-[#d4d5d5] ">
                    {categories?.data?.map((cat: TCatagory) => (
                      <Link
                        to={`/products?categoryId=${cat._id}`}
                        key={cat._id}
                      >
                        <li className="py-5 cursor-pointer hover:text-[#00cde5]">
                          {cat.catagoryName}
                        </li>
                      </Link>
                    ))}
                  </ul>
                </div>
                <p className="text-lg font-bold mt-16 mb-1">FILTER BY</p>
                <div className="flex items-center">
                  <span className="bg-[#00cde5] w-24 h-1"></span>
                  <hr className="bg-[#6f7276] w-full" />
                </div>

                <div>
                  <div className="mt-10 mb-5">
                    <Button
                      className="bg-gradient-to-r from-[#00cde5] to-[#10798b] text-sm text-white w-[110px] h-[45px]"
                      onClick={handleClearFilter}
                    >
                      Clear Filter
                    </Button>
                  </div>
                  <div className="flex flex-col gap-2 my-5">
                    {availability !== null && (
                      <div className="bg-gray-200  px-3 py-1 text-sm font-semibold text-gray-700 flex items-center justify-between">
                        Availability:{" "}
                        {availability === "true" ? "In Stock" : "Out of Stock"}
                        <span
                          className="ml-2 cursor-pointer"
                          onClick={() => setAvailability(null)}
                        >
                          <X />
                        </span>
                      </div>
                    )}
                    {selectedOption && (
                      <div className="bg-gray-200  px-3 py-1 text-sm font-semibold text-gray-700 flex items-center justify-between">
                        {selectedOption.label}
                        <span
                          className="ml-2 cursor-pointer"
                          onClick={() => setSelectedOption(null)}
                        >
                          <X />
                        </span>
                      </div>
                    )}
                    {(minPrice !== null || maxPrice !== null) && (
                      <div className="bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700 flex items-center justify-between">
                        Price: ${minPrice ?? 0} - ${maxPrice ?? 1000}
                        <span
                          className="ml-2 cursor-pointer"
                          onClick={() => {
                            setMinPrice(null);
                            setMaxPrice(null);
                          }}
                        >
                          <X />
                        </span>
                      </div>
                    )}
                    {brand !== null && (
                      <div className="bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700 flex items-center justify-between">
                        Brand: {brand}
                        <span
                          className="ml-2 cursor-pointer"
                          onClick={() => setBrand(null)}
                        >
                          <X />
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center">
                    <span className="bg-[#00cde5] w-24 h-1"></span>
                    <hr className="bg-[#6f7276] w-full" />
                  </div>
                </div>

                <div>
                  <p className="text-lg font-bold mt-8">Availability</p>
                  <div>
                    <RadioGroup
                      value={availability || ""}
                      onValueChange={handleAvailabilityChange}
                    >
                      <div className="flex items-center text-base pt-3 space-x-2">
                        <RadioGroupItem value="true" id="r1" />
                        <Label htmlFor="r1">In stock</Label>
                      </div>
                      <div className="flex items-center text-base pt-3 space-x-2">
                        <RadioGroupItem value="false" id="r2" />
                        <Label htmlFor="r2">Out of stock</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
                <div>
                  <p className="text-lg font-bold mt-8">Price</p>
                  <div className="flex gap-4 items-center pt-3">
                    <div className="flex items-center border border-[#222] rounded p-2">
                      <span className="text-gray-600 mr-2">$</span>
                      <input
                        type="number"
                        placeholder="From"
                        onChange={handleMinPriceChange}
                        className="focus:outline-none w-full"
                      />
                    </div>
                    <div className="flex items-center border border-[#222] rounded p-2">
                      <span className="text-gray-600 mr-2">$</span>
                      <input
                        type="number"
                        placeholder="To"
                        onChange={handleMaxPriceChange}
                        className="focus:outline-none w-full"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-lg font-bold mt-8">Brand</p>
                  <div>
                    <RadioGroup
                      value={brand || ""}
                      onValueChange={handleBrandChange}
                    >
                      <div className="flex items-center text-sm my-2">
                        <RadioGroupItem value="Nike" id="Nike" />
                        <Label className="text-sm ml-3" htmlFor="Nike">
                          Nike
                        </Label>
                      </div>
                      <div className="flex items-center text-sm my-2">
                        <RadioGroupItem value="Adidas" id="Adidas" />
                        <Label className="text-sm ml-3" htmlFor="Adidas">
                          Adidas
                        </Label>
                      </div>
                      <div className="flex items-center text-sm my-2">
                        <RadioGroupItem value="Puma" id="Puma" />
                        <Label className="text-sm ml-3" htmlFor="Puma">
                          Puma
                        </Label>
                      </div>
                      <div className="flex items-center text-sm my-2">
                        <RadioGroupItem value="Fila" id="Fila" />
                        <Label className="text-sm ml-3" htmlFor="Fila">
                          Fila
                        </Label>
                      </div>
                      <div className="flex items-center text-sm my-2">
                        <RadioGroupItem value="MKS" id="MKS" />
                        <Label className="text-sm ml-3" htmlFor="MKS">
                          MKS
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
                <p className="text-lg font-bold mt-8 ">Rating</p>
                <div>
                  <RadioGroup>
                    <div className="flex items-center text-base pt-3 space-x-2">
                      <RadioGroupItem value="one-star" id="r1" />
                      <Label htmlFor="r1" className="flex">
                        <Star
                          className="md:size-5 size-[18px]"
                          color="orange"
                          fill="orange"
                        />
                      </Label>
                    </div>
                    <div className="flex items-center text-base pt-3 space-x-2">
                      <RadioGroupItem value="two-star" id="r2" />
                      <Label htmlFor="r2" className="flex space-x-1">
                        <Star
                          className="md:size-5 size-[18px]"
                          color="orange"
                          fill="orange"
                        />
                        <Star
                          className="md:size-5 size-[18px]"
                          color="orange"
                          fill="orange"
                        />
                      </Label>
                    </div>
                    <div className="flex items-center text-base pt-3 space-x-2">
                      <RadioGroupItem value="three-star" id="r2" />
                      <Label htmlFor="r2" className="flex space-x-1">
                        {" "}
                        <Star
                          className="md:size-5 size-[18px]"
                          color="orange"
                          fill="orange"
                        />
                        <Star
                          className="md:size-5 size-[18px]"
                          color="orange"
                          fill="orange"
                        />
                        <Star
                          className="md:size-5 size-[18px]"
                          color="orange"
                          fill="orange"
                        />
                      </Label>
                    </div>
                    <div className="flex items-center text-base pt-3 space-x-2">
                      <RadioGroupItem value="four-star" id="r2" />
                      <Label htmlFor="r2" className="flex space-x-1">
                        {" "}
                        <Star
                          className="md:size-5 size-[18px]"
                          color="orange"
                          fill="orange"
                        />
                        <Star
                          className="md:size-5 size-[18px]"
                          color="orange"
                          fill="orange"
                        />
                        <Star
                          className="md:size-5 size-[18px]"
                          color="orange"
                          fill="orange"
                        />
                        <Star
                          className="md:size-5 size-[18px]"
                          color="orange"
                          fill="orange"
                        />
                      </Label>
                    </div>
                    <div className="flex items-center text-base pt-3 space-x-2">
                      <RadioGroupItem value="five-star" id="r2" />
                      <Label htmlFor="r2" className="flex space-x-1">
                        <Star
                          className="md:size-5 size-[18px]"
                          color="orange"
                          fill="orange"
                        />
                        <Star
                          className="md:size-5 size-[18px]"
                          color="orange"
                          fill="orange"
                        />
                        <Star
                          className="md:size-5 size-[18px]"
                          color="orange"
                          fill="orange"
                        />
                        <Star
                          className="md:size-5 size-[18px]"
                          color="orange"
                          fill="orange"
                        />
                        <Star
                          className="md:size-5 size-[18px]"
                          color="orange"
                          fill="orange"
                        />
                      </Label>
                    </div>
                  </RadioGroup>
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
            </div>

            <div className="xl:col-span-8 lg:col-span-9 md:col-span-8 md:order-2 row-span-1 order-1">
              <div className="flex justify-between mb-14">
                <div className="form-control w-[220px]">
                  <label className="label"></label>
                  <Select
                    value={selectedOption}
                    onChange={handleSelectChange}
                    options={options}
                    placeholder="Sort By"
                  />
                </div>

                <div className="flex justify-between mb-2">
                  <div className="flex sm:gap-8 gap-4">
                    <div
                      className={`bg-[#00cde5] text-white p-2 cursor-pointer ${
                        isGridLayout ? "opacity-100" : "opacity-50"
                      }`}
                      onClick={() => setIsGridLayout(true)}
                    >
                      <LayoutGrid />
                    </div>
                    <div
                      className={`bg-[#00cde5] text-white p-2 cursor-pointer ${
                        !isGridLayout ? "opacity-100" : "opacity-50"
                      }`}
                      onClick={() => setIsGridLayout(false)}
                    >
                      <List />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                {isGridLayout ? (
                  // Grid layout
                  <div className="grid lg:grid-cols-3 md:gap-6 grid-cols-2 gap-3 w-full">
                    {isLoading
                      ? [...Array(placeholderCount)].map((_, index) => (
                          <div
                            key={index}
                            className="col-span-1 flex flex-col md:h-[380px] h-[315px] relative group bg-[#f5f5f5] bg-opacity-50 w-full rounded-lg shadow-xl"
                          >
                            <div className="flex items-center justify-center overflow-hidden relative w-full h-full">
                              <Lottie animationData={spinner} loop={true} />
                            </div>
                          </div>
                        ))
                      : data?.data?.products?.map((item: TInputs) => (
                          <div
                            className="col-span-1 flex flex-col md:h-[380px] h-[315px] px-2 relative group bg-[#f5f5f5] hover:transition-transform md:hover:scale-105 hover:scale-100 hover:duration-500 hover:ease-in-out bg-opacity-50 w-full rounded-lg shadow-xl hover:border-2 hover:border-[rgb(0,205,229)]"
                            key={item._id}
                          >
                            <div className="flex items-center justify-center overflow-hidden relative group w-full md:h-[160px] h-[120px]">
                              <div>
                                <img
                                  src={item.image[0]}
                                  alt=""
                                  className="md:w-[120px] w-[100px] md:h-[120px] h-[100px] object-cover md:group-hover:scale-125 group-hover:scale-110 transition-transform duration-500 ease-in-out"
                                />
                              </div>
                            </div>
                            <div className="px-0 space-y-2">
                              <div className="flex items-center justify-center">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className="md:size-5 size-[18px]"
                                    color="orange"
                                    fill="orange"
                                  />
                                ))}
                              </div>
                              <p className="text-center md:text-lg text-sm ">
                                {item.productName}
                              </p>
                              <p className="text-center md:text-lg text-sm">
                                Brand: {item.brand}
                              </p>
                              <p className="text-center text-lg font-bold text-[#1abfdc]">
                                $ {item.price}
                              </p>
                              <div className="hidden group-hover:block transition-transform duration-500 ease-in-out">
                                <div className="flex sm:justify-around justify-center items-center lg:space-x-1 space-x-1">
                                  <div className="md:w-10 w-9 md:h-10 h-9 cursor-pointer hover:text-white hover:bg-[#00cde5] rounded-full transition-all duration-500 md:hover:scale-110 hover:scale-90 ease-in-out flex items-center justify-center p-2">
                                    <Heart className=" w-8  h-8" />
                                  </div>
                                  <Link to={`/singleProduct/${item._id}`}>
                                    <Button className="bg-gradient-to-r from-[#00cde5] to-[#10798b] text-xs md:text-sm text-white h-[40px] w-[84px] md:w-[110px] md:h-[45px]">
                                      View Details
                                    </Button>
                                  </Link>
                                  <div
                                    className={`md:w-10 w-9 md:h-10 h-9 cursor-pointer rounded-full transition-all duration-500 ease-in-out flex items-center justify-center p-2 
    ${
      item?.stockQuantity === 0 || item?.availability === false
        ? "cursor-not-allowed bg-gray-300"
        : "hover:text-white hover:bg-[#00cde5] md:hover:scale-110 hover:scale-90"
    }`}
                                    onClick={() => {
                                      if (
                                        item?.stockQuantity > 0 &&
                                        item?.availability
                                      ) {
                                        dispatch(addToCart(item));
                                      }
                                    }}
                                    title={
                                      item?.stockQuantity === 0 ||
                                      item?.availability === false
                                        ? "Item is StockOut"
                                        : ""
                                    }
                                  >
                                    <ShoppingCart className="w-8 h-8" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                  </div>
                ) : (
                  // List layout
                  <div className="grid grid-cols-1 gap-10 xl:w-full lg:w-[710px] w-full mx-auto">
                    {isLoading
                      ? [...Array(6)].map((_, index) => (
                          <div
                            key={index}
                            className="cgrid lg:grid-cols-12 grid-rows-12 gap-5 lg:h-[315px] md:h-[435px] sm:h-[420px] h-[450px]  group relative group bg-[#f5f5f5] bg-opacity-50 w-full rounded-lg shadow-xl"
                          >
                            <div className="flex items-center justify-center overflow-hidden relative w-full h-full">
                              <Lottie animationData={spinner} loop={true} />
                            </div>
                          </div>
                        ))
                      : data?.data?.products
                          ?.slice(0, 6)
                          .map((item: TInputs) => (
                            <div
                              className="grid lg:grid-cols-12 grid-rows-12 gap-5 lg:h-[315px] md:h-[435px] sm:h-[420px] h-[450px] relative group bg-[#f5f5f5] hover:transition-transform  hover:duration-500 hover:ease-in-out bg-opacity-50 w-full rounded-lg shadow-xl hover:border-2 hover:border-[rgb(0,205,229)]"
                              key={item._id}
                            >
                              <div className="flex items-center justify-center overflow-hidden relative group   lg:col-span-4 row-span-4 lg:h-[300px]  w-full h-[180px]">
                                <div>
                                  <img
                                    src={item.image[0]}
                                    alt=""
                                    className="object-cover lg:group-hover:scale-125  group-hover:scale-110 transition-transform duration-500 ease-in-out w-full xl:h-[160px] h-[140px] mx-auto "
                                  />
                                </div>
                              </div>
                              <div className="py-6 px-4 lg:space-y-2 space-y-0 lg:col-span-8 row-span-8">
                                <p className="md:text-lg font-bold text-base ">
                                  {item.productName}
                                </p>
                                <p className="lg:text-lg text-[#797f89] md:text-base text-sm pt-1">
                                  Brand: {item.brand}
                                </p>
                                <div className="flex items-center justify-between lg:pt-1 pt-4 pb-1">
                                  <p className="text-xl font-bold text-[#1abfdc]">
                                    $ {item.price}
                                  </p>
                                  <div className="flex">
                                    {[...Array(5)].map((_, i) => (
                                      <Star
                                        key={i}
                                        className="md:size-5 size-[18px]"
                                        color="orange"
                                        fill="orange"
                                      />
                                    ))}
                                  </div>
                                </div>
                                <p className="text-base text-[#797f89] pt-2 ">
                                  {item.description.length > 100
                                    ? `${item.description.slice(0, 120)}...`
                                    : item.description}
                                </p>
                                <div className="hidden group-hover:block transition-transform duration-500 ease-in-out pt-4">
                                  <div className="flex justify-start items-center space-x-5 ">
                                    <div className="md:w-10 w-9 md:h-10 h-9 cursor-pointer hover:text-white hover:bg-[#00cde5] rounded-full transition-all duration-500 md:hover:scale-110 hover:scale-90 ease-in-out flex items-center justify-center p-2">
                                      <Heart className=" w-8  h-8" />
                                    </div>
                                    <Link to={`/singleProduct/${item._id}`}>
                                      <Button className="bg-gradient-to-r from-[#00cde5] to-[#10798b] text-xs md:text-sm text-white h-[40px] w-[90px] md:w-[110px] md:h-[45px]">
                                        View Details
                                      </Button>
                                    </Link>
                                    <div
                                      className="md:w-10 w-9 md:h-10 h-9 cursor-pointer hover:text-white hover:bg-[#00cde5] rounded-full transition-all duration-500 md:hover:scale-110 hover:scale-90 ease-in-out flex items-center justify-center p-2"
                                      onClick={() => dispatch(addToCart(item))}
                                    >
                                      <ShoppingCart className="w-8   h-8" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="pt-24">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    href="#"
                    onClick={(e) => {
                      if (currentPage === 1) {
                        e.preventDefault();
                      } else {
                        handlePageChange(currentPage - 1);
                      }
                    }}
                    className={
                      currentPage === 1 ? "cursor-not-allowed opacity-50" : ""
                    }
                  />
                </PaginationItem>

                {Array.from({ length: totalPages }).map((_, index) => (
                  <PaginationItem key={index}>
                    <PaginationLink
                      href="#"
                      isActive={currentPage === index + 1}
                      onClick={() => handlePageChange(index + 1)}
                    >
                      {index + 1}
                    </PaginationLink>
                  </PaginationItem>
                ))}

                <PaginationItem>
                  <PaginationNext
                    href="#"
                    onClick={(e) => {
                      if (currentPage === totalPages) {
                        e.preventDefault();
                      } else {
                        handlePageChange(currentPage + 1);
                      }
                    }}
                    className={
                      currentPage === totalPages
                        ? "cursor-not-allowed opacity-50"
                        : ""
                    }
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Products;
