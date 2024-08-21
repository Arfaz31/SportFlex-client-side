import { baseApi } from "@/redux/api/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addProductPost: builder.mutation({
      query: (data) => {
        return {
          url: "/product/create-product",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["products"],
    }),

    getAllProducts: builder.query({
      query: (categoryId) => {
        const params = new URLSearchParams();
        if (categoryId) {
          params.append("categoryId", categoryId);
        }
        return {
          url: "/product",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["products"],
    }),

    getSingleProduct: builder.query({
      query: (id) => ({
        url: `/product/${id}`,
        method: "GET",
      }),
      providesTags: ["products"],
    }),
    getRelatedProducts: builder.query({
      query: (id) => ({
        url: `/product/${id}/related`,
        method: "GET",
      }),
      providesTags: ["products"],
    }),
  }),
});

export const {
  useAddProductPostMutation,
  useGetAllProductsQuery,
  useGetSingleProductQuery,
  useGetRelatedProductsQuery,
} = productApi;
