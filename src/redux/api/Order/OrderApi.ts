import { baseApi } from "../baseApi";

const OrderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (data) => {
        return {
          url: "/order/create-order",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["order"],
    }),

    getAllOrders: builder.query({
      query: () => {
        return {
          url: "/order",
          method: "GET",
        };
      },
      providesTags: ["order"],
    }),
  }),
});

export const { useCreateOrderMutation, useGetAllOrdersQuery } = OrderApi;
