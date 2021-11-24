import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const itemsApi = createApi({
  reducerPath: "ContactsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://connections-api.herokuapp.com",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["Contacts"],
  endpoints: (builder) => ({
    getItems: builder.query({
      query: () => `/contacts`,
      providesTags: ["Contacts"],
    }),
    createItem: builder.mutation({
      query: (newContact) => ({
        url: `/contacts`,
        method: "POST",
        body: {
          name: newContact.name,
          number: newContact.number,
        },
      }),
      invalidatesTags: ["Contacts"],
    }),
    deleteItem: builder.mutation({
      query: (contactId) => ({
        url: `/contacts/${contactId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Contacts"],
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
