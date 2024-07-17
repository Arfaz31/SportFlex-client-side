import Container from "../shared/Container";
import MdPolicy from "../shared/ResponsivePolicy/MdPolicy";
import SmPolicy from "../shared/ResponsivePolicy/SmPolicy";
import XLPolicy from "../shared/ResponsivePolicy/XLPolicy";

const Policy = () => {
  return (
    <div className=" bg-[#f5f5f5]">
      <Container>
        <div className="lg:block hidden">
          <XLPolicy />
        </div>
      </Container>
      <div className="lg:hidden md:block hidden">
        <MdPolicy />
      </div>
      <div className="block md:hidden">
        <SmPolicy />
      </div>
    </div>
  );
};

export default Policy;
