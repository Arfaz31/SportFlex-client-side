import Blogs from "@/components/Home/Blogs";
import DiscountCard from "@/components/Home/DiscountCard";
import FeaturedProducts from "@/components/Home/FeaturedProducts";
import FlashDeals from "@/components/Home/FlashDeals";
import FlashDiscountBanner from "@/components/Home/FlashDiscountBanner";
import HeroSection from "@/components/Home/HeroSection";
import NewProducts from "@/components/Home/NewProducts";
import Policy from "@/components/Home/Policy";
import Scroll from "@/components/Home/Scroll";
import Sponser from "@/components/Home/Sponser";
import Testimonials from "@/components/Home/Testimonials";
import TopCategories from "@/components/Home/TopCategories";
import NewsletterBannner from "@/components/shared/NewsletterBannner";

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
      <FlashDeals />
      <NewsletterBannner />
      <Blogs />
      <Sponser />
      <Scroll />
    </div>
  );
};

export default Home;
