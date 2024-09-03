/* eslint-disable @typescript-eslint/no-explicit-any */
import Container from "@/components/shared/Container";
import payment from "@/assets/payment.jpg";
import { useForm, SubmitHandler } from "react-hook-form";
import { TOrder } from "@/type/Type";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import bkash from "@/assets/bkash.png";
import { toast } from "sonner";
import { useCreateOrderMutation } from "@/redux/api/Order/OrderApi";
import { clearCart } from "@/redux/features/cartSlice";
import Lottie from "lottie-react";
import spinner from "@/assets/pIR8Sd9Ib1.json";
const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState<string | null>(null);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [addOrder, { error, isLoading }] = useCreateOrderMutation();
  const dispatch = useAppDispatch();
  const handlePaymentMethod = (value: string) => {
    setPaymentMethod(value);
  };
  const { tax, taxRate, grandTotal, totalPrice, products } = useAppSelector(
    (store) => store.cart
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TOrder>();
  const onSubmit: SubmitHandler<TOrder> = async (data) => {
    if (!paymentMethod) {
      toast.error("Please select a payment method.");
      return;
    }

    if (!termsAccepted) {
      toast.error("You must accept the terms and conditions.");
      return;
    }
    const orderData = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      address: data.address,
      totalPrice: grandTotal,
      order: products.map((product: any) => ({
        productId: product._id,
        quantity: product.quantity,
        selectedSize: product.selectedSize,
      })),
    };
    console.log(orderData);

    try {
      const res = await addOrder(orderData).unwrap();

      if (res?.success && res?.data?.length > 0) {
        toast.success("Your order has been placed successfully");
        dispatch(clearCart());
        reset();
      }
    } catch (error) {
      console.error("Order creation error:", error);
      toast.error("Failed to create order");
    }
  };
  const handlePlaceOrderClick = () => {
    handleSubmit(onSubmit)();
  };
  if (error) {
    console.log(error);
  }

  return (
    <div className="mb-32">
      <div className="relative">
        <img
          className="object-cover md:h-[500px] h-[400px] w-full"
          src={payment}
          alt=""
        />
        <div className="bg-black opacity-55 md:h-[500px] h-[400px] w-full absolute top-0 z-1"></div>
        <div className="flex items-center gap-3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <span className="bg-[#00cde5] w-16 h-1"></span>
          <h1 className="lg:text-4xl text-2xl text-white font-bold text-center">
            CHECKOUT
          </h1>
          <span className="bg-[#00cde5] w-16 h-1"></span>
        </div>
      </div>
      <Container className="mt-16 mx-auto xl:px-0 lg:px-5 px-3">
        <div className="flex lg:flex-row flex-col-reverse justify-center xl:gap-32 lg:gap-20 gap-14">
          <div className=" border border-gray-500 p-8 w-full h-[600px] ">
            <h2 className="text-xl font-bold pb-8">SHIPPING INFORMATION</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-2 gap-10 pb-8">
                <div>
                  <input
                    type="text"
                    placeholder="First Name"
                    {...register("name.firstName", {
                      required: "First name is required",
                    })}
                    aria-invalid={errors.name?.firstName ? "true" : "false"}
                    className="border border-[#10798b] focus:outline-none  w-full  h-12 px-3"
                  />
                  {errors.name?.firstName && (
                    <p className="text-red-500" role="alert">
                      {errors.name?.firstName.message}
                    </p>
                  )}
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Last Name"
                    {...register("name.lastName", {
                      required: "Last name is required",
                    })}
                    aria-invalid={errors.name?.lastName ? "true" : "false"}
                    className="border border-[#10798b] focus:outline-none  w-full  h-12 px-3"
                  />
                  {errors.name?.lastName && (
                    <p className="text-red-500" role="alert">
                      {errors.name?.lastName.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="pb-8">
                <input
                  type="text"
                  placeholder="Type your full address"
                  {...register("address", {
                    required: "Address is required",
                  })}
                  aria-invalid={errors.address ? "true" : "false"}
                  className="border border-[#10798b] focus:outline-none  w-full  h-12 px-3"
                />
                {errors.address && (
                  <p className="text-red-500" role="alert">
                    {errors.address.message}
                  </p>
                )}
              </div>
              <div className="pb-8">
                <input
                  type="text"
                  placeholder="Phone Number"
                  {...register("phone", {
                    required: "Phone number is required",
                  })}
                  aria-invalid={errors.phone ? "true" : "false"}
                  className="border border-[#10798b] focus:outline-none  w-full  h-12 px-3"
                />
                {errors.phone && (
                  <p className="text-red-500" role="alert">
                    {errors.phone.message}
                  </p>
                )}
              </div>
              <div className="pb-8">
                <input
                  type="text"
                  placeholder="Your Email"
                  {...register("email", {
                    required: "Email is required",
                  })}
                  aria-invalid={errors.email ? "true" : "false"}
                  className="border border-[#10798b] focus:outline-none  w-full  h-12 px-3"
                />
                {errors.email && (
                  <p className="text-red-500" role="alert">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div>
                <p className="pb-2">Order Notes (Optional)</p>
                <textarea
                  cols={80}
                  placeholder="Notes for your order"
                  rows={4}
                  className="border border-[#10798b] focus:outline-none  w-full px-3 pt-3"
                />
              </div>
            </form>
          </div>

          <div>
            <div className="  border border-gray-500 p-6 w-full ">
              <h2 className="text-xl font-bold pb-8">YOUR ORDER DETAILS</h2>
              <div>
                <div>
                  <div className="flex justify-between">
                    <p className="text-lg font-bold">PRODUCT</p>
                    <p className="text-lg font-bold">SUBTOTAL</p>
                  </div>
                  {products.map((product: any) => (
                    <div key={product._id}>
                      <div className="flex justify-between py-5">
                        <div className="flex gap-3">
                          <p>{product.productName}</p>
                          <p>X</p>
                          <p>{product.quantity}</p>
                        </div>
                        <div>
                          <p>
                            $ {(product.quantity * product.price).toFixed(2)}
                          </p>
                        </div>
                      </div>

                      <hr className="bg-gray-500" />
                    </div>
                  ))}
                  <div className="flex justify-between pt-8 pb-5">
                    <p className="text-base font-bold">Total Price</p>
                    <p className="text-base font-bold">
                      $ {totalPrice.toFixed(2)}
                    </p>
                  </div>
                  <hr className="bg-gray-500" />
                  <div className="flex justify-between py-5">
                    <p className="text-base font-bold">Tax ({taxRate * 100})</p>
                    <p className="text-base font-bold">$ {tax.toFixed(3)}</p>
                  </div>
                  <hr className="bg-gray-600" />
                  <div className="flex justify-between py-5">
                    <p className="text-base font-bold"> Grand Total</p>
                    <p className="text-base font-bold">
                      $ {grandTotal.toFixed(3)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="  border border-gray-500 p-6 w-full mt-8">
              <div>
                <RadioGroup
                  value={paymentMethod || ""}
                  onValueChange={handlePaymentMethod}
                >
                  <div className="flex items-center text-lg pt-3 space-x-2">
                    <RadioGroupItem value="cashon" id="r1" />
                    <Label htmlFor="r1">Cash On Delivery</Label>
                  </div>
                  <div className="flex items-center text-lg pt-4 space-x-2">
                    <RadioGroupItem value="bKash" id="r2" />
                    <Label htmlFor="r2">bKash Payment</Label>
                    <img src={bkash} alt="" className="w-8 h-8" />
                  </div>
                </RadioGroup>
              </div>
              <p className="py-8 text-base">
                Your personal data will be used to process your order, support
                your experience throughout this website, and for other purposes
                described in our{" "}
                <span className="text-[#00cde5] underline underline-offset-1 cursor-pointer">
                  privacy policy
                </span>
                .
              </p>
              <div className="flex items-start space-x-2">
                <Checkbox
                  id="terms"
                  checked={termsAccepted}
                  onCheckedChange={(checked) =>
                    setTermsAccepted(checked === true)
                  }
                />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  I have read and agree to the website{" "}
                  <span className="text-[#00cde5] underline underline-offset-1 cursor-pointer">
                    terms and conditions
                  </span>
                </label>
              </div>
              <button
                onClick={handlePlaceOrderClick}
                className={`${
                  isLoading
                    ? "bg-[#2b2b5e]  w-full h-16 pb-2"
                    : "w-full h-14 rounded-sm  text-white text-xl flex justify-center items-center bg-gradient-to-r from-[#00cde5] to-[#10798b] cursor-pointer overflow-hidden relative group"
                } text-white cursor-pointer mt-10 flex items-center justify-center`}
              >
                {isLoading ? (
                  <Lottie
                    animationData={spinner}
                    loop={true}
                    className="w-full h-32"
                  />
                ) : (
                  <div>
                    <span className="relative z-10">PLACE ORDER</span>
                    <span className="absolute inset-0 bg-[#2b2b5e] opacity-20 transform skew-x-12 scale-x-0 group-hover:scale-x-150 transition-transform duration-500"></span>
                  </div>
                )}
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Payment;
