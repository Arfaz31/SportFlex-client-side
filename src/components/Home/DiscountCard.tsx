import gymGirl from "../../assets/card/gym.jpg";
import shoe from "../../assets/card/shoes3.jpg";
import Container from "../shared/Container";
import { Button } from "../ui/button";

const DiscountCard = () => {
  return (
    <Container className="mb-28">
      <div className="grid grid-cols-12 lg:gap-5 gap-4">
        <div className="md:col-span-6 col-span-12">
          <div className="relative overflow-hidden group w-full xl:h-[395px] lg:[350px]">
            <img
              className=" group-hover:scale-110 transition-transform duration-500 w-full xl:h-[395px] lg:[350px]"
              src={gymGirl}
              alt=""
            />
            <div className="absolute xl:top-20 lg:top-14 md:top-12 top-12 xl:left-12 lg:left-10 md:left-8 left-6 w-full xl:space-y-5 lg:space-y-3 md:space-y-1 space-y-2">
              <p className="text-white xl:text-xl lg:text-lg  md:text-sm text-xs flex items-center font-bold">
                <span className="bg-[#1abfdc] xl:text-lg lg:text-base text-xs rounded-full xl:w-14 xl:h-14 lg:w-12 lg:h-12 md:w-10 md:h-10 w-8 h-8 flex items-center justify-center animate-bounce">
                  20%
                </span>
                <span className="ml-2">DISCOUNT</span>
              </p>
              <h1 className="xl:text-4xl lg:text-3xl xl text-white font-bold lg:max-w-[10ch] max-w-[15ch] xl:pb-0 md:pb-4 pb-2 ">
                WOMEN'S GYM GEAR
              </h1>
              <Button className="bg-gradient-to-r from-[#00cde5] to-[#10798b]  lg:text-lg  text-xs text-white  h-[38px] w-[82px] lg:w-[120px] lg:h-[50px]">
                SHOP NOW
              </Button>
            </div>
          </div>
        </div>

        <div className="md:col-span-6 col-span-12">
          <div className="relative overflow-hidden group w-full xl:h-[395px] lg:[350px]">
            <img
              className=" group-hover:scale-110 transition-transform duration-500 w-full xl:h-[395px] lg:[350px]"
              src={shoe}
              alt=""
            />
            <div className="absolute xl:top-20 lg:top-14 md:top-12 top-12 xl:left-12 lg:left-10 md:left-8 left-6 w-full xl:space-y-5 lg:space-y-3 md:space-y-1 space-y-2">
              <p className="text-white xl:text-xl lg:text-lg  md:text-sm text-xs flex items-center font-bold">
                <span className="bg-[#1abfdc] xl:text-lg lg:text-base text-xs rounded-full xl:w-14 xl:h-14 lg:w-12 lg:h-12 md:w-10 md:h-10 w-8 h-8 flex items-center justify-center animate-bounce">
                  20%
                </span>
                <span className="ml-2">DISCOUNT</span>
              </p>
              <h1 className="xl:text-4xl lg:text-3xl xl text-white font-bold xl:max-w-[12ch] lg:max-w-[12ch] max-w-[15ch] xl:pb-0 md:pb-4 pb-2 ">
                UNISEX SPORT'S SHOES
              </h1>
              <Button className="bg-gradient-to-r from-[#00cde5] to-[#10798b] lg:text-lg  text-xs text-white  h-[38px] w-[82px] lg:w-[120px] lg:h-[50px]">
                SHOP NOW
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default DiscountCard;
