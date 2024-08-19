import { useGetSingleProductQuery } from "@/redux/features/product/productApi";
import description from "@/assets/description.jpg";
import Container from "@/components/shared/Container";
import {
  CircleHelp,
  MessageSquareText,
  Share2,
  Star,
  // Heart,
  // ShoppingCart,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link, useParams } from "react-router-dom";
import card1 from "@/assets/icon/card-1.png";
import card2 from "@/assets/icon/card-2.png";
import card3 from "@/assets/icon/card-3.png";
import card4 from "@/assets/icon/card-4.png";
import card5 from "@/assets/icon/card-5.png";
import LoadingPage from "@/components/shared/LoadingPage";
import user from "@/assets/testimonal/avatar1.jpg";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
// import { Card, CardContent } from "@/components/ui/card";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
// import { TInputs } from "@/type/Type";

const SingleProduct = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const [selectedImage, setSelectedImage] = useState<string>("");
  const { data, isLoading } = useGetSingleProductQuery(id);
  // const { data: allProductData } = useGetAllProductsQuery(undefined);
  const item = data?.data;
  if (item && item.image.length > 0 && !selectedImage) {
    setSelectedImage(item.image[0]);
  }
  // !selectedImage: Checks if selectedImage is empty (not set yet). This prevents resetting the selectedImage if it’s already been set.

  // const filteredProducts = item
  //   ? allProductData?.data?.filter((p: TInputs) => p.category === item.category)
  //   : [];

  const handleDrecase = () => {
    if (quantity <= 1) {
      alert("Qunatuity should be 1");
    } else {
      setQuantity((pv) => pv - 1);
    }
  };

  const handleImageClick = (imgSrc: string) => {
    setSelectedImage(imgSrc);
  };
  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };
  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <div>
      <div className="relative">
        <img
          className="object-cover md:h-[500px] h-[400px] w-full"
          src={description}
          alt=""
        />
        <div className="bg-black opacity-45 md:h-[500px] h-[400px] w-full absolute top-0 z-1"></div>
        <div className="flex items-center gap-3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <span className="bg-[#00cde5] w-16 h-1"></span>
          <h1 className="lg:text-4xl text-2xl text-white font-bold text-center">
            PRODUCT DETAILS
          </h1>
          <span className="bg-[#00cde5] w-16 h-1"></span>
        </div>
      </div>

      <div>
        <Container className="md:my-24 mt-20">
          <div className="grid grid-cols-12 gap-6 ">
            <div className="col-span-6 flex gap-2">
              <div className="flex flex-col gap-2">
                {item?.image?.map((imgSrc: string, index: number) => (
                  <div
                    key={index}
                    className="flex items-center justify-center mb-5 border border-1 border-[#00cde5] cursor-pointer"
                    onClick={() => handleImageClick(imgSrc)}
                  >
                    <img
                      src={imgSrc}
                      alt={`Image ${index + 1}`}
                      className="w-[100px] h-[90px] mx-auto"
                    />
                  </div>
                ))}
              </div>

              <div className="bg-[#f5f5f5] w-full flex pt-12 ">
                <img
                  src={selectedImage}
                  alt="Selected"
                  className="w-[450px] h-[450px] mx-auto"
                />
              </div>
            </div>
            <div className="col-span-6">
              <p className="text-2xl font-bold pb-2">{item?.productName}</p>
              <div className="flex items-center  pb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="md:size-5 size-[18px]"
                    color="orange"
                    fill="orange"
                  />
                ))}
              </div>
              <p className="text-2xl font-bold text-[#1abfdc] pb-4">
                ${item?.price}
              </p>
              <p className="text-base text-[#797f89] pb-5 ">
                {item?.description?.length > 100
                  ? `${item?.description?.slice(0, 190)}...`
                  : item?.description}
              </p>
              <div className="flex items-center">
                <span className="bg-[#00cde5] w-24 h-1"></span>
                <hr className="bg-[#6f7276] w-full" />
              </div>
              <p className="text-lg pt-5">
                <span className="font-semibold">Brand:</span> {item?.brand}
              </p>
              <p className="text-lg pt-3">
                <span className="font-semibold">Category:</span>{" "}
                {item?.category?.catagoryName}
              </p>
              <p className="text-lg pt-3">
                <span className="font-semibold">Stock Quantity:</span>{" "}
                {item?.stockQuantity}
              </p>
              <p className="text-lg pt-3 pb-3">
                <span className="font-semibold">Availability:</span>{" "}
                {item?.availability ? "In Stock" : "Out of Stock"}
              </p>
              {item?.size && item?.size.length > 0 && (
                <div className="flex items-center gap-4 pb-4">
                  <p className="font-semibold text-lg">Size: </p>
                  {item?.size.map((sz: string, index: number) => (
                    <p
                      key={index}
                      className="bg-transparent p-2 text-black text-xl border border-[#797f89] border-1 hover:bg-gradient-to-r from-[#00cde5] to-[#10798b] hover:border-none hover:text-white cursor-pointer"
                    >
                      {sz}
                    </p>
                  ))}
                </div>
              )}

              <div className="flex items-center gap-4 mt-3 border border-[#797f89] border-1 w-fit">
                <Button
                  className="bg-transparent text-black text-xl hover:bg-gradient-to-r from-[#00cde5] to-[#10798b] hover:border-none hover:text-white cursor-pointer"
                  onClick={handleDrecase}
                >
                  -
                </Button>
                <p className="text-lg font-semibold">{quantity}</p>
                <Button
                  className="bg-transparent text-black text-xl hover:bg-gradient-to-r from-[#00cde5] to-[#10798b] hover:border-none hover:text-white cursor-pointer"
                  onClick={() => setQuantity((pv) => pv + 1)}
                >
                  +
                </Button>
              </div>

              <div className="flex gap-8 items-center mt-8">
                <Button className="bg-gradient-to-r from-[#00cde5] to-[#10798b]  text-white ">
                  ADD TO CART
                </Button>
                <Link to={`/checkout/${item?._id}`}>
                  <Button className="bg-gradient-to-r from-[#00cde5] to-[#10798b]  text-white">
                    BUY IT NOW
                  </Button>
                </Link>
              </div>

              <div className="flex items-center gap-8 mt-8">
                <div className="flex gap-2 hover:text-[#00cde5] cursor-pointer">
                  <Share2 />
                  <p>Share</p>
                </div>
                <div className="flex gap-2 hover:text-[#00cde5] cursor-pointer">
                  <CircleHelp />
                  <p>Ask A Question</p>
                </div>
                <div className="flex gap-2 hover:text-[#00cde5] cursor-pointer">
                  <MessageSquareText />
                  <p>FAQ</p>
                </div>
              </div>
              <div className="flex items-center my-7">
                <span className="bg-[#00cde5] w-24 h-1"></span>
                <hr className="bg-[#6f7276] w-full" />
              </div>
              <p className="text-base">Guaranteed safe checkout:</p>
              <div className="flex gap-4 mt-4">
                <img className="xl:w-8 w-7 cursor-pointer" src={card1} alt="" />
                <img className="xl:w-8 w-7 cursor-pointer" src={card2} alt="" />
                <img className="xl:w-8 w-7 cursor-pointer" src={card3} alt="" />
                <img className="xl:w-8 w-7 cursor-pointer" src={card4} alt="" />
                <img className="xl:w-8 w-7 cursor-pointer" src={card5} alt="" />
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className="bg-[#f5f5f5] w-full mt-28 py-20">
        <Container>
          <div className="relative flex gap-16 items-center">
            <div
              className={`relative cursor-pointer ${
                activeTab === "description"
                  ? "text-underline-color"
                  : "text-gray-500"
              }`}
              onClick={() => handleTabClick("description")}
            >
              <p className="text-xl font-bold pb-2">Description</p>
              {activeTab === "description" && (
                <div className="absolute left-0 bottom-0 w-full h-1 bg-underline-color transition-transform duration-300 transform scale-x-100" />
              )}
            </div>
            <div
              className={`relative cursor-pointer ${
                activeTab === "shipping"
                  ? "text-underline-color"
                  : "text-gray-500"
              }`}
              onClick={() => handleTabClick("shipping")}
            >
              <p className="text-xl font-bold pb-2">Shipping Info</p>

              {activeTab === "shipping" && (
                <div className="absolute left-0 bottom-0 w-full h-1 bg-underline-color transition-transform duration-300 transform scale-x-100" />
              )}
            </div>
            <div
              className={`relative cursor-pointer ${
                activeTab === "reviews"
                  ? "text-underline-color"
                  : "text-gray-500"
              }`}
              onClick={() => handleTabClick("reviews")}
            >
              <p className="text-xl font-bold pb-2">Reviews</p>

              {activeTab === "reviews" && (
                <div className="absolute left-0 bottom-0 w-full h-1 bg-underline-color transition-transform duration-300 transform scale-x-100" />
              )}
            </div>
          </div>

          <div className="mt-10">
            {activeTab === "description" && item && (
              <div>
                <p className="text-base p-10 ">{item?.description}</p>
              </div>
            )}
            {activeTab === "shipping" && (
              <div>
                <p className="text-base font-bold pb-3">Shipping Methods</p>
                <p>
                  We offer reliable shipping methods to ensure your order
                  reaches you in a timely manner. Our preferred shipping
                  partners are known for their efficiency and commitment to
                  customer satisfaction.
                </p>
                <p className="text-base font-bold pb-3 pt-6">
                  Order Processing Time
                </p>
                <p>
                  Once your order is placed, our dedicated team works diligently
                  to process and prepare it for shipping. Most orders are
                  processed within 1-2 business days. Please allow additional
                  time during peak seasons or promotional periods.
                </p>
                <p className="text-base font-bold pb-3 pt-6">
                  Tracking Your Order
                </p>
                <p>
                  We provide tracking information for all orders, allowing you
                  to stay updated on the status of your shipment. Once your
                  order is shipped, you will receive a confirmation email with a
                  tracking number. Simply click on the provided link to track
                  your package.
                </p>
                <p className="text-base font-bold pb-3 pt-6">Shipping Costs</p>
                <p>
                  Shipping costs are calculated based on the weight and
                  dimensions of your order, as well as the shipping method
                  selected. The exact shipping cost will be displayed at
                  checkout before you finalize your purchase.
                </p>
                <p className="text-base font-bold pb-3 pt-6">
                  Shipping Restrictions
                </p>
                <p>
                  While we strive to offer worldwide shipping, there may be
                  certain restrictions on specific products due to international
                  regulations or manufacturer limitations. If a product is not
                  eligible for shipping to your location, you will be notified
                  during the checkout process.
                </p>
                <p>
                  At bt-Happy Feet, we are committed to providing a seamless
                  shipping experience. If you have any further questions or
                  concerns regarding shipping, please don't hesitate to contact
                  our customer support team. We are here to assist you every
                  step of the way.
                </p>
              </div>
            )}
            {activeTab === "reviews" && (
              <div>
                <p className="text-2xl font-bold pt-10">Customer Reviews</p>
                <div className="flex items-center  py-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="md:size-6 size-[18px]"
                      color="orange"
                      fill="orange"
                    />
                  ))}
                </div>
                <div className="flex items-center  pb-12 pt-1">
                  <span className="bg-[#00cde5] w-28 h-1"></span>
                  <hr className="bg-[#6f7276] w-full" />
                </div>
                <div className="flex gap-10">
                  <div className="flex flex-col items-center justify-center gap-1">
                    <img src={user} className="w-14 h-14 rounded-full" alt="" />
                    <p className="text-base font-semibold">Halinson</p>
                    <div className="flex items-center  ">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="md:size-4 size-[18px]"
                          color="orange"
                          fill="orange"
                        />
                      ))}
                    </div>
                    <p className="text-sm">17/8/2014</p>
                  </div>

                  <div>
                    <p className="text-base font-semibold pb-2">
                      Very Comfortable
                    </p>
                    <p className="text-sm">
                      If you can avoid getting hung up on needing to have a
                      brand name on your sneak, give these a try. A friend of
                      mine has many foot problems and his podiatrist suggested
                      these shoes. He sang their praises when he bought a pair
                      and has since bought several more. I haven't been happy
                      with my walking shoes so I ordered a pair and now I'm a
                      fan. I have a slightly wide foot so if I bought a regular
                      size in a Sketcher it was too narrow. When I went to a
                      wide it was too wide. The Fitville is the perfect width in
                      a wide size and they are well made and very comfortable.
                      The price is right and I now own three pair!
                    </p>
                  </div>
                </div>

                <p className="text-2xl font-bold mt-28 pb-6">Add A Review</p>
                <div className="bg-white   px-8 lg:py-14 pt-6 ">
                  <div className="flex gap-5 pb-6">
                    <Input type="text" placeholder="Review Title" />
                    <Input id="picture" type="file" />
                  </div>
                  <Textarea placeholder="Type your comments here." />
                  <div className="flex gap-5 py-6">
                    <Input type="text" placeholder="Your Name" />
                    <Input type="email" placeholder="Email" />
                  </div>

                  <Button className="  bg-gradient-to-r from-[#00cde5] to-[#10798b] text-base  text-white   w-[180px] h-[50px] font-semibold mt-8">
                    Submit Now
                  </Button>
                </div>
              </div>
            )}
          </div>
        </Container>
      </div>

      {/* Related product */}
      {/* <div>
        <Container className=" my-28">
          <div className="relative">
            <h1 className="xl:text-4xl lg:text-3xl text-2xl font-bold text-center mb-10 ">
              RELATED PRODUCTS
            </h1>

            <div>
              <Carousel
                opts={{
                  align: "start",
                }}
                className="w-full "
              >
                <CarouselContent>
                  {filteredProducts?.slice(0, 8).map((product: TInputs) => {
                    <CarouselItem
                      key={product?._id}
                      className="basis-1/2 md:basis-1/3 lg:basis-1/4"
                    >
                      <div className="p-1">
                        <Card className="border-none ">
                          <CardContent className="flex flex-col relative aspect-square items-center justify-center sm:p-2 p-1">
                            <div className="w-full">
                              <div className=" flex flex-col md:h-[380px] h-[315px] px-2 relative group bg-[#f5f5f5] hover:transition-transform md:hover:scale-105 hover:scale-100 hover:duration-500 hover:ease-in-out bg-opacity-50 w-full rounded-lg shadow-xl hover:border-2 hover:border-[rgb(0,205,229)]">
                                <div className="flex items-center justify-center overflow-hidden relative group w-full md:h-[160px] h-[120px]">
                                  <div>
                                    <img
                                      src={product?.image[0]}
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
                                    {product?.productName}
                                  </p>
                                  <p className="text-center md:text-lg text-sm">
                                    Brand: {product.brand}
                                  </p>
                                  <p className="text-center text-lg font-bold text-[#1abfdc]">
                                    $ {product.price}
                                  </p>
                                  <div className="hidden group-hover:block transition-transform duration-500 ease-in-out">
                                    <div className="flex sm:justify-around justify-center items-center lg:space-x-1 space-x-1">
                                      <div className="md:w-10 w-9 md:h-10 h-9 cursor-pointer hover:text-white hover:bg-[#00cde5] rounded-full transition-all duration-500 md:hover:scale-110 hover:scale-90 ease-in-out flex items-center justify-center p-2">
                                        <Heart className=" w-8  h-8" />
                                      </div>
                                      <Link
                                        to={`/singleProduct/${product?._id}`}
                                      >
                                        <Button className="bg-gradient-to-r from-[#00cde5] to-[#10798b] text-xs md:text-sm text-white h-[40px] w-[84px] md:w-[110px] md:h-[45px]">
                                          View Details
                                        </Button>
                                      </Link>
                                      <div className="md:w-10 w-9 md:h-10 h-9 cursor-pointer hover:text-white hover:bg-[#00cde5] rounded-full transition-all duration-500 md:hover:scale-110 hover:scale-90 ease-in-out flex items-center justify-center p-2">
                                        <ShoppingCart className="w-8   h-8" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>;
                  })}
                </CarouselContent>
                <CarouselPrevious className="absolute md:left-[25%] left-[12%] xl:-top-16 -top-14  transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full cursor-pointer hover:bg-opacity-75 transition-opacity duration-300">
                  &#9664;
                </CarouselPrevious>
                <CarouselNext className="absolute md:right-[25%] right-[12%] xl:-top-16  -top-14  transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full cursor-pointer hover:bg-opacity-75 transition-opacity duration-300">
                  &#9654;
                </CarouselNext>
              </Carousel>
            </div>
          </div>
        </Container>
      </div> */}
    </div>
  );
};

export default SingleProduct;
