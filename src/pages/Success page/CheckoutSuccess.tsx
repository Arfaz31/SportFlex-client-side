import Lottie from "lottie-react";
import success from "@/assets/Animation - 1725392048317.json";
import successicon from "@/assets/logos/Animation - 1725394073052.json";
import { Link } from "react-router-dom";
const CheckoutSuccess = () => {
  return (
    <div className=" bg-slate-50 mx-auto pt-8 flex flex-col items-center justify-center min-h-screen">
      <div className="w-full max-w-xl mx-auto px-4">
        <div className="flex items-center gap-3 pb-3">
          <p className="md:text-lg text-base text-green-500">
            Your order is placed successfully.
          </p>
          <div>
            <Lottie
              animationData={successicon}
              loop={true}
              className="md:w-14 md:h-14 w-12 h-12"
            />
          </div>
        </div>
        <p className="md:text-lg text-base pb-3">
          <Link to={"/"}>
            <span className="text-[#00cde5] cursor-pointer font-semibold pr-2">
              Go To Home
            </span>
          </Link>
          to shop more.
        </p>
        <p className="md:text-lg text-base pb-6">
          <Link to={"/admin-dashboard/orders"}>
            <span className="text-[#00cde5] cursor-pointer font-semibold pr-2">
              Click To
            </span>
          </Link>
          View Your Recent Orders & Submit Your Precious Review
        </p>
        <div>
          <Lottie
            animationData={success}
            loop={true}
            className="w-full xl:h-[360px] md:h-[300px] h-[250px]"
          />
        </div>
      </div>
    </div>
  );
};

export default CheckoutSuccess;
