import OrderTable from "./OrderTable";

const Orders = () => {
  return (
    <div className="">
      <div className=" p-5  h-full overflow-auto">
        <div className="bg-[#1a2c52]  rounded-md  p-2 h-full">
          <div className=" bg-[#14274e]  p-4 rounded-md w-full h-full flex flex-col">
            <div className=" h-full w-full rounded-lg">
              <div className="border-b  h-[70px] flex justify-between items-center">
                <div>
                  <h1 className="xl:text-3xl text-2xl font-semibold">
                    ALL ORDERS
                  </h1>
                </div>
              </div>
              <div className="  mt-3 ">
                <div className="flex justify-between flex-col"></div>
                <div className="bg-white bg-opacity-10 border border-gray-300 border-t-0 border-opacity-10 w-full rounded-lg backdrop-blur-md shadow-2xl backdrop-filter  flex-1 overflow-auto ">
                  <div className="p-10 h-full">
                    <OrderTable />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
