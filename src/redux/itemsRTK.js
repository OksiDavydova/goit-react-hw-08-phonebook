import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const itemsApi = createApi({
  reducerPath: "itemsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://6195170f74c1bd00176c6b65.mockapi.io/api/v1",
  }),
  tagTypes: ["Items"],
  endpoints: (builder) => ({
    getItems: builder.query({
      query: () => `/items`,
      providesTags: ["Items"],
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
      invalidatesTags: ["Items"],
    }),
    deleteItem: builder.mutation({
      query: (id) => ({
        url: `/items/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Items"],
    }),
  }),
});

export const {
  useGetItemsQuery,
  useCreateItemMutation,
  useDeleteItemMutation,
} = itemsApi;

// function providesList(resultsWithIds, tagType) {
//   return resultsWithIds
//     ? [
//         { type: tagType, id: "LIST" },
//         ...resultsWithIds.map(({ id }) => ({ type: tagType, id })),
//       ]
//     : [{ type: tagType, id: "LIST" }];
// }
