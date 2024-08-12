import Blogs from "@/components/Home/Blogs";
import DiscountCard from "@/components/Home/DiscountCard";
import FeaturedProducts from "@/components/Home/FeaturedProducts";
import FlashDiscountBanner from "@/components/Home/FlashDiscountBanner";
import HeroSection from "@/components/Home/HeroSection";
import NewProducts from "@/components/Home/NewProducts";
import Policy from "@/components/Home/Policy";
import Testimonials from "@/components/Home/Testimonials";
import TopCategories from "@/components/Home/TopCategories";

const Home = () => {
  return (
    <div>
      <HeroSection />,
      <Policy />,
      <TopCategories />,
      <DiscountCard />
      <FeaturedProducts />
      <FlashDiscountBanner />
      <NewProducts />
      <Testimonials />
      <Blogs />
    </div>
  );
};

export default Home;
