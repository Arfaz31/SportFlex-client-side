import Lottie from "lottie-react";
import spinner from "@/assets/pIR8Sd9Ib1.json";

const LoadingPage = () => {
  return (
    <div className=" flex flex-col  h-full relative group bg-[#f5f5f5] bg-opacity-50 w-full ">
      <div className="flex items-center justify-center overflow-hidden relative w-full h-full">
        <Lottie animationData={spinner} loop={true} />
      </div>
    </div>
  );
};

export default LoadingPage;
