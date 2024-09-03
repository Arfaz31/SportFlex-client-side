/* eslint-disable @typescript-eslint/no-explicit-any */
import cart from "@/assets/cart.jpg";
import Container from "@/components/shared/Container";
import { useAppSelector } from "@/redux/hook";
import CartDetails from "./CartDetails";
import OrderSummary from "./OrderSummary";
const Cart = () => {
  const products = useAppSelector((store) => store.cart.products);
  return (
    <div className="mb-32">
      <div className="relative">
        <img
          className="object-cover md:h-[500px] h-[400px] w-full"
          src={cart}
          alt=""
        />
        <div className="bg-black opacity-45 md:h-[500px] h-[400px] w-full absolute top-0 z-1"></div>
        <div className="flex items-center gap-3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <span className="bg-[#00cde5] w-16 h-1"></span>
          <h1 className="lg:text-4xl text-2xl text-white font-bold text-center">
            SHOPPING CART
          </h1>
          <span className="bg-[#00cde5] w-16 h-1"></span>
        </div>
      </div>
      <Container className="mt-16 mx-auto">
        <div className="flex lg:flex-row flex-col-reverse justify-center lg:gap-44 gap-14 ">
          <div className="space-y-5  pt-8">
            <h2 className="text-2xl font-bold mb-6 lg:text-left text-center">
              Your Total Cart Product
            </h2>
            {products.length ? (
              products.map((product: any) => (
                <CartDetails key={product._id} product={product} />
              ))
            ) : (
              <p className="text-xl text-red-500">
                There is no product in your cart
              </p>
            )}
          </div>

          <OrderSummary />
        </div>
      </Container>
    </div>
  );
};

export default Cart;
