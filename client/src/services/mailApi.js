import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const mailApi = createApi({
  reducerPath: "mailApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5500/api" }),
  endpoints: (builder) => ({
    getMails: builder.query({
      query: () => ({ url: "/message", method: "GET" }),
    }),
    sendMail: builder.mutation({
      query: (data) => ({
        url: "/message",
        method: "POST",
        body: { ...data },
      }),
    }),
    openMail: builder.mutation({
      query: (id) => ({
        url: `/message/${id}`,
        method: "PATCH",
      }),
    }),
  }),
});

export const { useGetMailsQuery, useSendMailMutation, useOpenMailMutation } =
  mailApi;
