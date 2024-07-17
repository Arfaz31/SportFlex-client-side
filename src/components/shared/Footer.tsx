import Container from "./Container";
import LargeDevice from "./ResponsiveFooter/LargeDevice";
import MediumDevice from "./ResponsiveFooter/MediumDevice";
import SmallDevice from "./ResponsiveFooter/SmallDevice";

const Footer = () => {
  return (
    <div className="bg-[#0c0c0c] mt-48">
      <Container>
        <div>
          <div className="hidden md:block lg:block">
            {/* for lg to xl device */}
            <LargeDevice />
            {/* for medium device */}
            <MediumDevice />
          </div>

          <div className="block md:hidden lg:hidden">
            {/* for small device */}
            <SmallDevice />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
