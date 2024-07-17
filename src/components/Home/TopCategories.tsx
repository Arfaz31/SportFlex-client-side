import LGTopCategories from "../shared/ResponsiveTopCategory/LGTopCategories";
import MdTopCategories from "../shared/ResponsiveTopCategory/MdTopCategories";
import SmTopCategories from "../shared/ResponsiveTopCategory/SmTopCategories";
import XlTopCategories from "../shared/ResponsiveTopCategory/XlTopCategories";

const TopCategories = () => {
  return (
    <div>
      <div className="xl:block hidden">
        <XlTopCategories />
      </div>
      <div className="xl:hidden lg:block hidden">
        <LGTopCategories />
      </div>
      <div className="lg:hidden md:block hidden">
        <MdTopCategories />
      </div>
      <div className="md:hidden block ">
        <SmTopCategories />
      </div>
    </div>
  );
};

export default TopCategories;
