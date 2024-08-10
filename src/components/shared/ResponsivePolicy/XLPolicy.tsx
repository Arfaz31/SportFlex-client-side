import { CornerUpLeft, Phone, Truck } from "lucide-react";

const XLPolicy = () => {
  return (
    <div className=" xl:px-0 lg:px-3 py-24">
      <div className="grid grid-cols-12 ">
        <div className="col-span-4">
          <div className="flex items-center justify-center xl:gap-5 lg:gap-4">
            <div className="border-2 border-[#00cde5] rounded-full xl:w-24 xl:h-24 w-20 h-20 flex items-center justify-center overflow-hidden relative group">
              <div className="absolute inset-0 bg-[#00cde5] rounded-full transform scale-0 transition-transform duration-500 ease-in-out group-hover:scale-100"></div>
              <div className="relative  group-hover:scale-110 transition-transform duration-500 ease-in-out ">
                <Truck className="group-hover:text-white text-[#12b3c5] transition-colors duration-300 ease-in-out xl:w-12 xl:h-12 w-10 h-10" />
              </div>
            </div>
            <div>
              <p className="xl:text-xl text-lg font-bold">FREE SHIPPING</p>
              <p className="xl:w-60 w-52 text-sm pt-2 text-gray-600">
                Enjoy free shipping on all orders. Discover the best deals
                today.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-4">
          <div className="flex items-center justify-center xl:gap-5 lg:gap-4">
            <div className="border-2 border-[#00cde5] rounded-full xl:w-24 xl:h-24 w-20 h-20 flex items-center justify-center overflow-hidden relative group">
              <div className="absolute inset-0 bg-[#00cde5] rounded-full transform scale-0 transition-transform duration-500 ease-in-out group-hover:scale-100"></div>
              <div className="relative  group-hover:scale-110 transition-transform duration-500 ease-in-out ">
                <Phone className="group-hover:text-white text-[#12b3c5] transition-colors duration-300 ease-in-out xl:w-12 xl:h-12 w-10 h-10" />
              </div>
            </div>
            <div>
              <p className="xl:text-xl text-lg font-bold">24/7 SUPPORT</p>
              <p className="xl:w-60 w-52 text-sm pt-2 text-gray-600">
                Get help anytime you need it. We're always here for you.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-4">
          <div className="flex items-center justify-center xl:gap-5 lg:gap-4">
            <div className="border-2 border-[#00cde5] rounded-full xl:w-24 xl:h-24 w-20 h-20 flex items-center justify-center overflow-hidden relative group">
              <div className="absolute inset-0 bg-[#00cde5] rounded-full transform scale-0 transition-transform duration-500 ease-in-out group-hover:scale-100"></div>
              <div className="relative  group-hover:scale-110 transition-transform duration-500 ease-in-out ">
                <CornerUpLeft className="group-hover:text-white text-[#12b3c5] transition-colors duration-300 ease-in-out xl:w-12 xl:h-12 w-10 h-10" />
              </div>
            </div>
            <div>
              <p className="xl:text-xl text-lg font-bold">30d FREE RETURN</p>
              <p className="xl:w-60 w-52 text-sm pt-2 text-gray-600">
                Return items hassle-free within 30 days. Shop with confidence
                today
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default XLPolicy;
