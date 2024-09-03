import { useGetAllOrdersQuery } from "@/redux/api/Order/OrderApi";

import Lottie from "lottie-react";
import spinner from "@/assets/pIR8Sd9Ib1.json";
import { TGetOrder } from "@/type/Type";

const OrderTable = () => {
  const { data, isLoading } = useGetAllOrdersQuery(undefined);

  return (
    <div className="overflow-x-auto">
      {isLoading ? (
        <div className="flex items-center justify-center w-full h-[400px] ">
          <Lottie animationData={spinner} loop={true} />
        </div>
      ) : (
        <div>
          {data?.data?.map((item: TGetOrder) => (
            <div
              key={item._id}
              className="flex items-center justify-center gap-12 border border-slate-100 p-6 mb-5"
            >
              <div>
                <p className="text-base pb-3">
                  Name: {item.name.firstName} {item.name.lastName}
                </p>
                <p className="text-base pb-3">Email: {item.email}</p>
                <p className="text-base pb-3">Phone: {item.phone}</p>
                <p className="text-base pb-3">Address: {item.address}</p>
              </div>
              <p className="border-2 border-slate-300 h-48 flex flex-col"></p>
              <div className="flex flex-col gap-5">
                {item.order.map((orderDetail, index) => (
                  <div
                    key={`order-${item._id}-${index}`}
                    className="flex space-x-5"
                  >
                    <div>
                      <img
                        src={orderDetail.productId?.image[0]}
                        alt="Product"
                        className="w-[70px] h-[70px] object-cover"
                      />
                    </div>
                    <div>
                      <p>{orderDetail?.productId?.productName}</p>
                      <p>Quantity: {orderDetail?.quantity}</p>
                      {orderDetail?.selectedSize && (
                        <p>Size: {orderDetail.selectedSize}</p>
                      )}
                      <p>Price: $ {orderDetail?.productId?.price}</p>
                    </div>
                  </div>
                ))}
                <div className="flex gap-24 pt-2">
                  <p className="text-lg font-bold">Total Price =</p>
                  <p className="text-lg font-bold">${item.totalPrice}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrderTable;
