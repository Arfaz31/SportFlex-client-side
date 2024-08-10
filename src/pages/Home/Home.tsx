import Blogs from "@/components/Home/Blogs";
import ClientReviews from "@/components/Home/ClientReviews";
import DiscountCard from "@/components/Home/DiscountCard";
import FeaturedProducts from "@/components/Home/FeaturedProducts";
import FlashDiscountBanner from "@/components/Home/FlashDiscountBanner";
import HeroSection from "@/components/Home/HeroSection";
import NewProducts from "@/components/Home/NewProducts";
import Policy from "@/components/Home/Policy";
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
      <ClientReviews />
      <Blogs />
    </div>
  );
};

export default Home;
