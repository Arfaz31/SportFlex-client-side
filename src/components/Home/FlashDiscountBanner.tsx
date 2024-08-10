import MdFlashDiscount from "../shared/ResponsiveFlashDiscountBanner/MdFlashDiscount";
import SmFlashDiscount from "../shared/ResponsiveFlashDiscountBanner/SmFlashDiscount";
import XlFlashDiscountBanner from "../shared/ResponsiveFlashDiscountBanner/XlFlashDiscountBanner";

const FlashDiscountBanner = () => {
  return (
    <div>
      <div className="xl:block lg:block hidden">
        <XlFlashDiscountBanner />
      </div>
      <div className="xl:hidden lg:hidden md:block hidden">
        <MdFlashDiscount />
      </div>
      <div className="md:hidden block">
        <SmFlashDiscount />
      </div>
    </div>
  );
};

export default FlashDiscountBanner;
