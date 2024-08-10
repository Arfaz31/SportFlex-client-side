import MdNewProduct from "../shared/ResponsiveNewProducts/MdNewProduct";
import XlNewProducts from "../shared/ResponsiveNewProducts/XlNewProducts";

const NewProducts = () => {
  return (
    <div className="my-28">
      <div className="lg:block hidden">
        <XlNewProducts />
      </div>
      <div className="lg:hidden block ">
        <MdNewProduct />
      </div>
    </div>
  );
};

export default NewProducts;
