import MdClientReviews from "../shared/ResponsiveClientReviews.tsx/MdClientReviews";
import XlClientReviews from "../shared/ResponsiveClientReviews.tsx/XlClientReviews";

const ClientReviews = () => {
  return (
    <div>
      <div className="lg:block hidden">
        <XlClientReviews />
      </div>
      <div className="lg:hidden block">
        <MdClientReviews />
      </div>
    </div>
  );
};

export default ClientReviews;
