import { clearCart } from "@/redux/features/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { CreditCard, Trash2 } from "lucide-react";

const OrderSummary = () => {
  const dispatch = useAppDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  const { tax, taxRate, grandTotal, totalPrice, selectedItems } =
    useAppSelector((store) => store.cart);
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
            className="bg-red-500 px-3 py-3 text-white  mt-2 rounded-md w-full text-base flex justify-center items-center mb-4 gap-3"
          >
            <span>Clear Cart</span>

            <Trash2 className="text-white w-6 h-6" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="bg-[#10798b] px-3 py-3   text-white  mt-2 mb-6 rounded-md w-full text-base flex justify-center items-center gap-3"
          >
            <span>Proceed Checkout</span>
            <CreditCard className="text-white w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
