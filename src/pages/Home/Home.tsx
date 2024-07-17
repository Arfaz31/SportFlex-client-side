import HeroSection from "@/components/Home/HeroSection";
import Policy from "@/components/Home/Policy";
import TopCategories from "@/components/Home/TopCategories";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <HeroSection />,
      <Policy />,
      <TopCategories />
    </div>
  );
};

export default Home;
