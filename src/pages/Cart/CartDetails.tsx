import { removeProduct, updateQuantity } from "@/redux/features/cartSlice";
import { useAppDispatch } from "@/redux/hook";
import { Minus, Plus, Trash2 } from "lucide-react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CartDetails = ({ product }: any) => {
  const dispatch = useAppDispatch();
  const handleQuantity = (type: string, _id: string) => {
    const payload = { type, _id };
    dispatch(updateQuantity(payload));
  };

  return (
    <div className="grid grid-cols-12 border border-gray-300 rounded-lg p-4 bg-white shadow-md transition-transform transform hover:scale-105 hover:shadow-lg w-full max-w-md mx-auto duration-500 gap-6">
      <div className="col-span-4 flex items-center justify-center">
        <img
          src={product.image[0]}
          alt={product.productName}
          className="w-full md:h-28 h-24 object-cover rounded-md"
        />
      </div>
      <div className="col-span-8">
        <h3 className="md:text-lg  text-base font-bold pb-2">
          {product.productName}
        </h3>
        <div className="flex justify-between items-center">
          <div>
            <p className="md:text-base text-sm  font-medium text-gray-600 pb-2">
              ${product.price}
            </p>
            <p className="md:text-base text-sm font-medium text-gray-600 pb-5">
              Quantity: {product.quantity}
            </p>
          </div>
          <div>
            <button
              onClick={() => dispatch(removeProduct(product._id))}
              className="bg-red-600 text-white p-2 rounded-full hover:bg-red-700"
            >
              <Trash2 size={18} />
            </button>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={() => handleQuantity("decrement", product._id)}
            className="bg-[#00cde5] text-white p-2 rounded-full hover:bg-[#10798b]"
          >
            <Minus size={18} />
          </button>
          <span className="text-lg font-semibold">{product.quantity}</span>
          <button
            onClick={() => handleQuantity("increment", product._id)}
            className="bg-[#00cde5] text-white p-2 rounded-full hover:bg-[#10798b]"
          >
            <Plus size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartDetails;
