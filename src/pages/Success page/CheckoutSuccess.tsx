import Lottie from "lottie-react";
import success from "@/assets/Animation - 1725392048317.json";
import successicon from "@/assets/logos/Animation - 1725394073052.json";
import { Link } from "react-router-dom";
const CheckoutSuccess = () => {
  return (
    <div className="w-[700px] h-[600px] bg-slate-50 mx-auto p-12 mt-12">
      <div className="flex items-center  gap-3 pb-4">
        <p className="text-lg text-green-500">
          Your order is placed succcessfully.
        </p>
        <div>
          <Lottie
            animationData={successicon}
            loop={true}
            className="w-16 h-16"
          />
        </div>
      </div>
      <p className="text-lg pb-4">
        <Link to={"/"}>
          <span className="text-[#00cde5] cursor-pointer font-semibold">
            Go To Home
          </span>{" "}
        </Link>
        to shop more.
      </p>
      <p className="text-lg pb-6">
        <Link to={"/admin-dashboard/orders"}>
          <span className="text-[#00cde5] cursor-pointer font-semibold">
            Click To
          </span>{" "}
        </Link>
        View Your Recent Orders & Submit Your Precious Review
      </p>
      <div>
        <Lottie
          animationData={success}
          loop={true}
          className="w-full h-[400px]"
        />
      </div>
    </div>
  );
};

export default CheckoutSuccess;
