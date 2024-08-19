import { baseApi } from "@/redux/api/baseApi";

const catagoryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addCatagory: builder.mutation({
      query: (data) => {
        return {
          url: "/catagory/create-catagory",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["Catagory"],
    }),

    getAllCatagory: builder.query({
      query: () => {
        return {
          url: "/catagory",
          method: "GET",
        };
      },
      providesTags: ["Catagory"],
    }),

    getSingleCatagory: builder.query({
      query: (id) => ({
        url: `/catagory/${id}`,
        method: "GET",
      }),
      providesTags: ["Catagory"],
    }),
  }),
});

export const { useAddCatagoryMutation, useGetAllCatagoryQuery } = catagoryApi;
