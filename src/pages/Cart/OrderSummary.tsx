/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetAllProductsQuery } from "@/redux/api/product/productApi";
import { clearCart } from "@/redux/features/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { CreditCard, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

const OrderSummary = () => {
  const { data } = useGetAllProductsQuery(undefined);
  const allProducts = data?.data?.products || [];

  const dispatch = useAppDispatch();

  const { tax, taxRate, grandTotal, totalPrice, selectedItems, products } =
    useAppSelector((store) => store.cart);

  // Determine if any cart product is out of stock or unavailable based on the latest data
  const isCheckoutDisabled = products.some((cartProduct: any) => {
    // Find the corresponding product in the database
    const matchedProduct = allProducts.find(
      (dbProduct: any) => dbProduct._id === cartProduct._id
    );

    // Check if the product is out of stock or unavailable
    return (
      matchedProduct?.stockQuantity === 0 ||
      matchedProduct?.availability === false
    );
  });

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div>
      <div className=" md:w-80 lg:mx-0 mx-auto w-full h-[450px] border border-gray-600 transition-transform transform hover:scale-105 hover:shadow-2xl duration-500">
        <div className="px-6 py-4 space-y-6">
          <h1 className="text-2xl text-center font-bold pb-4">Order Summary</h1>
          <p className="text-base text-gray-600 mt-2">
            Selected Items : {selectedItems}
          </p>
          <p className="text-base text-gray-600 mt-2">
            Total Price : ${totalPrice.toFixed(2)}
          </p>
          <p className="text-base text-gray-600 mt-2">
            Tax ({taxRate * 100}): ${tax.toFixed(3)}
          </p>
          <h3 className="text-lg font-semibold text-gray-600 mt-4">
            Grand Total ${grandTotal.toFixed(3)}
          </h3>
        </div>
        <div className="px-4 py-6">
          {" "}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleClearCart();
            }}
            className="bg-red-500 hover:bg-red-600 px-3 py-3 text-white  mt-2 rounded-md w-full text-base flex justify-center items-center mb-4 gap-3"
          >
            <span>Clear Cart</span>

            <Trash2 className="text-white w-6 h-6" />
          </button>
          <Link to={"/payment"}>
            <button
              onClick={(e) => {
                e.stopPropagation();
                // Proceed to checkout logic
              }}
              disabled={isCheckoutDisabled}
              className={`px-3 py-3 mt-2 mb-6 rounded-md w-full text-base flex justify-center items-center gap-3 ${
                isCheckoutDisabled
                  ? "bg-[#10798b] hover:bg-[#0f6271] text-white opacity-50 cursor-not-allowed"
                  : "bg-[#10798b] hover:bg-[#0f6271] text-white"
              }`}
              title={isCheckoutDisabled ? "Some items are out of stock" : ""}
            >
              <span>Proceed To Checkout</span>
              <CreditCard className="w-6 h-6" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
