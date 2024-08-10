import Container from "./Container";
import LgFooter from "./ResponsiveFooter/LgFooter";
import MdFooter from "./ResponsiveFooter/MdFooter";
import SmFooter from "./ResponsiveFooter/SmFooter";

const Footer = () => {
  return (
    <div className="bg-[#0c0c0c] xl:translate-y-12 translate-y-[76px]">
      {/* #0c0c0c */}
      <Container>
        <div>
          <div className="hidden md:block lg:block">
            {/* for lg to xl device */}
            <LgFooter />
            {/* for medium device */}
            <MdFooter />
          </div>

          <div className="block md:hidden lg:hidden">
            {/* for small device */}
            <SmFooter />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
