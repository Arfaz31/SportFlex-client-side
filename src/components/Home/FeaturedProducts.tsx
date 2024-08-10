import Container from "../shared/Container";
import football from "../../assets/category/football.png";
import shoe from "../../assets/shoes.png";
import { Star, Heart, ShoppingCart, MoveRight } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
const FeaturedProducts = () => {
  const featuredData = [
    {
      id: 1,
      productName: "Sports Soccer Balls",
      image: (className: string) => (
        <img src={football} alt="Category 1" className={className} />
      ),
      brand: "Franklin",
      price: 20,
      category: "Football",
      description:
        "This soccer ball features a soft foam cover for a comfortable feel and reduced impact from headers. Its water-resistant PVC cover ensures durability in all weather conditions. Available in official sizes 3, 4, and 5, it's perfect for all skill levels. The high-quality air retention bladder prevents leaks and deflation, and it arrives fully inflated, ready for play.",
      stockQuantity: "10",
      availability: true,
    },
    {
      id: 2,
      productName: "Sports Soccer Balls",
      image: (className: string) => (
        <img src={shoe} alt="Category 1" className={className} />
      ),
      brand: "Franklin",
      price: 20,
      category: "Football",
      description:
        "This soccer ball features a soft foam cover for a comfortable feel and reduced impact from headers. Its water-resistant PVC cover ensures durability in all weather conditions. Available in official sizes 3, 4, and 5, it's perfect for all skill levels. The high-quality air retention bladder prevents leaks and deflation, and it arrives fully inflated, ready for play.",
      stockQuantity: "10",
      availability: true,
    },
    {
      id: 3,
      productName: "Sports Soccer Balls",
      image: (className: string) => (
        <img src={football} alt="Category 1" className={className} />
      ),
      brand: "Franklin",
      price: 20,
      category: "Football",
      description:
        "This soccer ball features a soft foam cover for a comfortable feel and reduced impact from headers. Its water-resistant PVC cover ensures durability in all weather conditions. Available in official sizes 3, 4, and 5, it's perfect for all skill levels. The high-quality air retention bladder prevents leaks and deflation, and it arrives fully inflated, ready for play.",
      stockQuantity: "10",
      availability: true,
    },
    {
      id: 4,
      productName: "Sports Soccer Balls",
      image: (className: string) => (
        <img src={football} alt="Category 1" className={className} />
      ),
      brand: "Franklin",
      price: 20,
      category: "Football",
      description:
        "This soccer ball features a soft foam cover for a comfortable feel and reduced impact from headers. Its water-resistant PVC cover ensures durability in all weather conditions. Available in official sizes 3, 4, and 5, it's perfect for all skill levels. The high-quality air retention bladder prevents leaks and deflation, and it arrives fully inflated, ready for play.",
      stockQuantity: "10",
      availability: true,
    },
    {
      id: 5,
      productName: "Sports Soccer Balls",
      image: (className: string) => (
        <img src={football} alt="Category 1" className={className} />
      ),
      brand: "Franklin",
      price: 20,
      category: "Football",
      description:
        "This soccer ball features a soft foam cover for a comfortable feel and reduced impact from headers. Its water-resistant PVC cover ensures durability in all weather conditions. Available in official sizes 3, 4, and 5, it's perfect for all skill levels. The high-quality air retention bladder prevents leaks and deflation, and it arrives fully inflated, ready for play.",
      stockQuantity: "10",
      availability: true,
    },
    {
      id: 6,
      productName: "Sports Soccer Balls",
      image: (className: string) => (
        <img src={football} alt="Category 1" className={className} />
      ),
      brand: "Franklin",
      price: 20,
      category: "Football",
      description:
        "This soccer ball features a soft foam cover for a comfortable feel and reduced impact from headers. Its water-resistant PVC cover ensures durability in all weather conditions. Available in official sizes 3, 4, and 5, it's perfect for all skill levels. The high-quality air retention bladder prevents leaks and deflation, and it arrives fully inflated, ready for play.",
      stockQuantity: "10",
      availability: true,
    },
    {
      id: 7,
      productName: "Sports Soccer Balls",
      image: (className: string) => (
        <img src={football} alt="Category 1" className={className} />
      ),
      brand: "Franklin",
      price: 20,
      category: "Football",
      description:
        "This soccer ball features a soft foam cover for a comfortable feel and reduced impact from headers. Its water-resistant PVC cover ensures durability in all weather conditions. Available in official sizes 3, 4, and 5, it's perfect for all skill levels. The high-quality air retention bladder prevents leaks and deflation, and it arrives fully inflated, ready for play.",
      stockQuantity: "10",
      availability: true,
    },
    {
      id: 8,
      productName: "Sports Soccer Balls",
      image: (className: string) => (
        <img src={football} alt="Category 1" className={className} />
      ),
      brand: "Franklin",
      price: 20,
      category: "Football",
      description:
        "This soccer ball features a soft foam cover for a comfortable feel and reduced impact from headers. Its water-resistant PVC cover ensures durability in all weather conditions. Available in official sizes 3, 4, and 5, it's perfect for all skill levels. The high-quality air retention bladder prevents leaks and deflation, and it arrives fully inflated, ready for play.",
      stockQuantity: "10",
      availability: true,
    },
    {
      id: 9,
      productName: "Sports Soccer Balls",
      image: (className: string) => (
        <img src={football} alt="Category 1" className={className} />
      ),
      brand: "Franklin",
      price: 20,
      category: "Football",
      description:
        "This soccer ball features a soft foam cover for a comfortable feel and reduced impact from headers. Its water-resistant PVC cover ensures durability in all weather conditions. Available in official sizes 3, 4, and 5, it's perfect for all skill levels. The high-quality air retention bladder prevents leaks and deflation, and it arrives fully inflated, ready for play.",
      stockQuantity: "10",
      availability: true,
    },
    {
      id: 10,
      productName: "Sports Soccer Balls",
      image: (className: string) => (
        <img src={football} alt="Category 1" className={className} />
      ),
      brand: "Franklin",
      price: 20,
      category: "Football",
      description:
        "This soccer ball features a soft foam cover for a comfortable feel and reduced impact from headers. Its water-resistant PVC cover ensures durability in all weather conditions. Available in official sizes 3, 4, and 5, it's perfect for all skill levels. The high-quality air retention bladder prevents leaks and deflation, and it arrives fully inflated, ready for play.",
      stockQuantity: "10",
      availability: true,
    },
  ];
  return (
    <div className="mb-28">
      <Container>
        <h1 className="xl:text-4xl lg:text-3xl text-2xl font-bold text-center mb-16">
          FEATURED PRODUCTS
        </h1>
        <div className="grid xl:grid-cols-5 xl:gap-9 lg:grid-cols-4 lg:gap-5 md:grid-cols-3 md:gap-5 grid-cols-2 gap-4 xl:px-0 px-2  ">
          {featuredData.map((item) => (
            <div
              className="col-span-1 flex flex-col md:h-[360px] h-[290px] relative group  bg-[#f5f5f5] hover:transition-transform md:hover:scale-105 hover:scale-100 hover:duration-500 hover:ease-in-out  bg-opacity-50  w-full rounded-lg shadow-xl hover:border-2 hover:border-[rgb(0,205,229)]"
              key={item.id}
            >
              <div className="flex items-center justify-center overflow-hidden relative group w-full md:h-[160px] h-[120px]">
                <div>
                  {item.image(
                    "md:w-[120px] w-[100px] md:h-[120px] h-[100px] object-cover md:group-hover:scale-125 group-hover:scale-110 transition-transform duration-500 ease-in-out"
                  )}
                </div>
              </div>
              <div className="px-3 space-y-2">
                <div className="flex items-center justify-center">
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
                  <Star
                    className="md:size-5 size-[18px]"
                    color="orange"
                    fill="orange"
                  />
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
                <div className="hidden group-hover:block transition-transform duration-500 ease-in-out ">
                  <div className="flex md:justify-between  justify-center items-center lg:space-x-1 space-x-1 ">
                    <div className="md:w-10 w-9 md:h-10 h-9 cursor-pointer hover:text-white hover:bg-[#00cde5] rounded-full transition-all  duration-500 md:hover:scale-110 hover:scale-90 ease-in-out flex items-center justify-center p-2">
                      <Heart className=" w-8  h-8" />
                    </div>
                    <Link to={`/singleProduct/${item.id}`}>
                      <Button className="bg-gradient-to-r from-[#00cde5] to-[#10798b] text-xs md:text-sm text-white  h-[40px] w-[84px] md:w-[110px] md:h-[45px]">
                        View Details
                      </Button>
                    </Link>
                    <div className="md:w-10 w-9 md:h-10 h-9 cursor-pointer hover:text-white hover:bg-[#00cde5] rounded-full transition-all  duration-500 md:hover:scale-110 hover:scale-90 ease-in-out flex items-center justify-center p-2">
                      <ShoppingCart className="w-8   h-8" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className=" flex items-center justify-center mt-28">
          <Button className="  bg-gradient-to-r from-[#00cde5] to-[#10798b] text-sm  text-white   w-[220px] h-[50px] font-semibold">
            VIEW MORE PRODUCTS{" "}
            <span className="text-white pl-2">
              <MoveRight />
            </span>
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default FeaturedProducts;
