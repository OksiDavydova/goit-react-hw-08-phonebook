import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const itemsApi = createApi({
  reducerPath: "itemsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://6195170f74c1bd00176c6b65.mockapi.io/api/v1",
  }),
  tagTypes: ["Item"],
  endpoints: (builder) => ({
    getItems: builder.query({
      query: () => `/items`,
      providesTags: ["Item"],
    }),
    createItem: builder.mutation({
      query: (newItem) => ({
        url: `/items`,
        method: "POST",
        body: {
          name: newItem.name,
          number: newItem.number,
        },
      }),
      invalidatesTags: ["Item"],
    }),
    deleteItem: builder.mutation({
      query: (id) => ({
        url: `/items/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Item"],
    }),
  }),
});

export const {
  useGetItemsQuery,
  useCreateItemMutation,
  useDeleteItemMutation,
} = itemsApi;
