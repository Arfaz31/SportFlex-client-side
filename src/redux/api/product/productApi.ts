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
      query: ({
        categoryId,
        sortBy,
        searchTerm,
        availability,
        minPrice,
        maxPrice,
        brand,
        page = 1,
        limit = 15,
      }: {
        categoryId?: string;
        sortBy?: string;
        searchTerm?: string;
        availability?: string;
        minPrice?: number;
        maxPrice?: number;
        brand?: string;
        page?: number;
        limit?: number;
      } = {}) => {
        // Default parameter to an empty object
        const params = new URLSearchParams();
        if (categoryId) {
          params.append("categoryId", categoryId);
        }
        if (sortBy) {
          params.append("sortBy", sortBy);
        }
        if (searchTerm) {
          params.append("searchTerm", searchTerm);
        }
        if (availability) {
          params.append("availability", availability);
        }
        if (minPrice !== undefined) {
          params.append("minPrice", minPrice.toString());
        }
        if (maxPrice !== undefined) {
          params.append("maxPrice", maxPrice.toString());
        }
        if (brand) {
          params.append("brand", brand);
        }
        params.append("page", page.toString());
        params.append("limit", limit.toString());
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

    getFlashDealProducts: builder.query({
      query: () => ({
        url: "/product/flashdeals",
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
  useGetFlashDealProductsQuery,
} = productApi;
