import useCountDown from "../shared/CountDown";

const FlashCountDownDiv = ({ endDate }: { endDate: string }) => {
  const { days, hours, minutes, seconds } = useCountDown(endDate);

  return (
    <div className="bg-white z-[1] md:w-[200px] w-full  h-[40px] mx-auto ">
      <div className=" grid grid-cols-4 gap-1 pt-1 divide-y-1  items-center ">
        <div className="bg-[#f5f5f5] rounded-xl py-1">
          <p className="text-center  font-semibold md:text-sm text-[10px]">
            {days}
          </p>
          <p className="text-center text-[10px] ">Days</p>
        </div>
        <div className="bg-[#f5f5f5] rounded-xl py-1">
          <p className="text-center  font-semibold md:text-sm text-[10px]">
            {hours}
          </p>
          <p className="text-center text-[10px] ">Hours</p>
        </div>
        <div className="bg-[#f5f5f5] rounded-xl py-1">
          <p className="text-center  font-semibold md:text-sm text-[10px]">
            {minutes}
          </p>
          <p className="text-center text-[10px] ">Min</p>
        </div>
        <div className="bg-[#f5f5f5] rounded-xl py-1">
          <p className="text-center font-semibold md:text-sm text-[10px]">
            {seconds}
          </p>
          <p className="text-center text-[10px] ">Sec</p>
        </div>
      </div>
    </div>
  );
};

export default FlashCountDownDiv;
