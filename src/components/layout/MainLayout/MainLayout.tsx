import Footer from "@/components/shared/Footer";
import LoadingPage from "@/components/shared/LoadingPage";
import Navbar from "@/components/shared/Navbar";
import { Outlet } from "react-router-dom";

interface MainLayoutProps {
  isLoading: boolean;
}
const MainLayout = ({ isLoading }: MainLayoutProps) => {
  return (
    <div>
      {isLoading ? (
        <LoadingPage />
      ) : (
        <>
          <Navbar />
          <Outlet />
          <Footer />
        </>
      )}
    </div>
  );
};

export default MainLayout;
