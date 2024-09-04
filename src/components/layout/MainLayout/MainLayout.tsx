import Footer from "@/components/shared/Footer";
import LoadingPage from "@/components/shared/LoadingPage";
import Navbar from "@/components/shared/Navbar";
import { Outlet, useLocation } from "react-router-dom";

interface MainLayoutProps {
  isLoading: boolean;
}
const MainLayout = ({ isLoading }: MainLayoutProps) => {
  const location = useLocation();

  const noHeader = location.pathname.includes("success");
  const noFooter = location.pathname.includes("success");

  return (
    <div>
      {isLoading ? (
        <LoadingPage />
      ) : (
        <>
          {noHeader || <Navbar />}
          <Outlet />
          {noFooter || <Footer />}
        </>
      )}
    </div>
  );
};

export default MainLayout;
