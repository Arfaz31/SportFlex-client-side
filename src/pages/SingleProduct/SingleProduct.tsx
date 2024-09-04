/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetSingleProductQuery } from "@/redux/api/product/productApi";
import description from "@/assets/description.jpg";
import Container from "@/components/shared/Container";
import { CircleHelp, MessageSquareText, Share2, Star } from "lucide-react";
import { useEffect, useState } from "react";
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
import ShareModal from "./ShareModal";
import AskQuestion from "./AskQuestion";
import RelatedProduct from "./RelatedProduct";
import { useAppDispatch } from "@/redux/hook";
import { addToCart } from "@/redux/features/cartSlice";

const SingleProduct = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const [selectedImage, setSelectedImage] = useState<string>("");
  const [selectSize, setSelectSize] = useState<string | undefined>(undefined);
  const { data, isLoading } = useGetSingleProductQuery(id);
  const dispatch = useAppDispatch();
  const item = data?.data;
  useEffect(() => {
    // Reset the selected image whenever the id changes
    if (item && item.image.length > 0) {
      setSelectedImage(item.image[0]);
    }
  }, [id, item]);

  const handleImageClick = (imgSrc: string) => {
    setSelectedImage(imgSrc);
  };
  const handleDrecase = () => {
    if (quantity <= 1) {
      alert("Qunatuity should be 1");
    } else {
      setQuantity((pv) => pv - 1);
    }
  };
  const handleSizeSelect = (size: string) => {
    setSelectSize(size);
  };

  const handleCart = (item: any) => {
    const {
      _id,
      productName,
      image,
      price,
      brand,
      stockQuantity,
      availability,
    } = item;
    const productData = {
      _id,
      productName,
      image,
      price,
      brand,
      stockQuantity,
      availability,
      selectedSize: selectSize || undefined,
      quantity: quantity,
    };

    dispatch(addToCart(productData));
  };

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };
  if (isLoading) {
    return <LoadingPage />;
  }
  // Check if the add to cart button should be disabled
  const isAddToCartDisabled = quantity >= (item?.stockQuantity || 0);
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

      <div className="xl:px-0 px-4">
        <Container className="md:my-24 mt-20 ">
          <div className="grid grid-cols-12 lg:gap-10 gap-5 ">
            <div className="md:col-span-6 col-span-full  order-1">
              <div className="flex md:flex-row flex-col-reverse md:gap-2 gap-10">
                <div className="flex md:flex-col flex-row md:gap-2 gap-3">
                  {item?.image?.map((imgSrc: string, index: number) => (
                    <div
                      key={index}
                      className={`flex items-center justify-center mb-5 border ${
                        selectedImage === imgSrc
                          ? "border-[#10798b] border-4"
                          : "border-[#00cde5] border-1"
                      } cursor-pointer`}
                      onClick={() => handleImageClick(imgSrc)}
                    >
                      <img
                        src={imgSrc}
                        alt={`Image ${index + 1}`}
                        className="md:w-[100px] md:h-[90px] w-[80px] h-[70px] mx-auto p-1"
                      />
                    </div>
                  ))}
                </div>

                <div className="w-full flex pt-12 px-4">
                  <img
                    src={selectedImage}
                    alt="Selected"
                    className="max-w-full lg:max-h-[471px] h-[400px] mx-auto"
                  />
                </div>
              </div>
            </div>

            <div className="md:col-span-6 col-span-full order-2">
              <p className="lg:text-2xl text-xl font-bold pb-2">
                {item?.productName}
              </p>
              <div className="flex items-center  pb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="lg:size-5 size-[18px]"
                    color="orange"
                    fill="orange"
                  />
                ))}
              </div>
              <p className="lg:text-2xl text-xl font-bold text-[#1abfdc] pb-4">
                ${item?.price}
              </p>
              <p className="lg:text-base text-sm text-[#797f89] pb-5 ">
                {item?.description?.length > 100
                  ? `${item?.description?.slice(0, 190)}...`
                  : item?.description}
              </p>
              <div className="flex items-center">
                <span className="bg-[#00cde5] w-24 h-1"></span>
                <hr className="bg-[#6f7276] w-full" />
              </div>
              <p className="lg:text-lg text-base pt-5">
                <span className="font-semibold">Brand:</span> {item?.brand}
              </p>
              <p className="lg:text-lg text-base pt-3">
                <span className="font-semibold">Category:</span>{" "}
                {item?.category?.catagoryName}
              </p>
              <p className="lg:text-lg text-base pt-3">
                <span className="font-semibold">Stock Quantity:</span>{" "}
                {item?.stockQuantity}
              </p>
              <p className="lg:text-lg text-base pt-3 pb-3">
                <span className="font-semibold">Availability:</span>{" "}
                {item?.availability ? (
                  "In Stock"
                ) : (
                  <span className="text-red-600">Out of Stock</span>
                )}
              </p>
              {item?.size &&
                item?.size.filter((sz: string) => sz.trim().length > 0).length >
                  0 && (
                  <div className="flex items-center gap-4 pb-4">
                    <p className="font-semibold lg:text-lg text-base">Size: </p>
                    {item?.size
                      .filter((sz: string) => sz.trim().length > 0) // Filter out empty strings
                      .map((sz: string, index: number) => (
                        <p
                          key={index}
                          className={`bg-transparent p-2 text-black lg:text-lg text-base border border-[#797f89] border-1 cursor-pointer ${
                            selectSize === sz
                              ? "bg-gradient-to-r from-[#00cde5] to-[#10798b] text-white" // Apply gradient when selected
                              : "hover:bg-gradient-to-r from-[#00cde5] to-[#10798b] hover:border-none hover:text-white" // Hover effect
                          }`}
                          onClick={() => handleSizeSelect(sz)}
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
                  disabled={isAddToCartDisabled}
                >
                  +
                </Button>
              </div>

              <div className="flex gap-8 items-center mt-8">
                <Button
                  className="bg-gradient-to-r from-[#00cde5] to-[#10798b]  text-white "
                  onClick={() => handleCart(item)}
                  disabled={quantity <= 0 || item?.stockQuantity === 0}
                >
                  ADD TO CART
                </Button>
                <Link to={`/checkout/${item?._id}`}>
                  <Button className="bg-gradient-to-r from-[#00cde5] to-[#10798b]  text-white">
                    BUY IT NOW
                  </Button>
                </Link>
              </div>

              <div className="flex items-center lg:gap-8 sm:gap-5 gap-3 mt-8">
                <div className="flex sm:gap-2 gap-1 hover:text-[#00cde5] cursor-pointer items-center">
                  <Share2 />
                  <div>
                    <ShareModal />
                  </div>
                </div>
                <div className="flex sm:gap-2 gap-1 hover:text-[#00cde5] cursor-pointe items-centerr">
                  <CircleHelp />
                  <div>
                    <AskQuestion />
                  </div>
                </div>
                <div className="flex sm:gap-2 gap-1 hover:text-[#00cde5] cursor-pointer">
                  <MessageSquareText />
                  <p className="sm:text-base text-sm">FAQ</p>
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

      <div className="bg-[#f5f5f5] w-full mt-28 py-20 xl:px-0 px-4">
        <Container>
          <div className="relative flex md:gap-16 sm:gap-8 gap-5 items-center">
            <div
              className={`relative cursor-pointer ${
                activeTab === "description"
                  ? "text-underline-color"
                  : "text-gray-500"
              }`}
              onClick={() => handleTabClick("description")}
            >
              <p className="md:text-xl sm:text-lg text-[15px] font-bold pb-2">
                Description
              </p>
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
              <p className="md:text-xl sm:text-lg text-[15px] font-bold pb-2">
                Shipping Info
              </p>

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
              <p className="md:text-xl sm:text-lg text-[15px] font-bold pb-2">
                Reviews
              </p>

              {activeTab === "reviews" && (
                <div className="absolute left-0 bottom-0 w-full h-1 bg-underline-color transition-transform duration-300 transform scale-x-100" />
              )}
            </div>
          </div>

          <div className="mt-10">
            {activeTab === "description" && item && (
              <div>
                <p className="text-base  md:p-10 p-6 ">{item?.description}</p>
              </div>
            )}
            {activeTab === "shipping" && (
              <div>
                <p className="text-base font-bold pb-3 pt-3">
                  Shipping Methods
                </p>
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
                <p className="lg:text-2xl text-xl font-bold md:pt-10 pt-3">
                  Customer Reviews
                </p>
                <div className="flex items-center  py-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="lg:size-6 size-[20px]"
                      color="orange"
                      fill="orange"
                    />
                  ))}
                </div>
                <div className="flex items-center  pb-12 pt-1">
                  <span className="bg-[#00cde5] w-28 h-1"></span>
                  <hr className="bg-[#6f7276] w-full" />
                </div>
                <div className="flex md:flex-row flex-col md:gap-10 gap-5">
                  <div className="flex flex-col md:items-center items-start md:justify-center justify-start gap-1">
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

                <p className="lg:text-2xl text-xl font-bold mt-28 pb-6">
                  Add A Review
                </p>
                <div className="bg-white   px-8 py-14 pt-6 ">
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
      <div className="xl:px-0 px-4">
        <RelatedProduct />
      </div>
    </div>
  );
};

export default SingleProduct;
