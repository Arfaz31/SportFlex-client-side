import DashboardContainer from "@/components/shared/DashboardContainer";

const Dashboard = () => {
  return (
    <div className="bg-[#081939] pt-7 pb-10 ">
      <DashboardContainer>
        <div className="bg-[#112143] w-[97%] mx-auto  h-[80px]  rounded-sm mb-4">
          <h1 className="text-2xl font-bold pt-4 ml-5">
            Welcome To Admin Dashboard
          </h1>
        </div>
      </DashboardContainer>
    </div>
  );
};

export default Dashboard;
