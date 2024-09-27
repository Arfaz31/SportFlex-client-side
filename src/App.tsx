import { useEffect, useState } from "react";
import MainLayout from "./components/layout/MainLayout/MainLayout";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulate data fetching
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <MainLayout isLoading={isLoading} />
    </div>
  );
};

export default App;
