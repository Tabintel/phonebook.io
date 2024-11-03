/* eslint-disable no-unused-vars */
import { BASE_URL } from "@/constant";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  credentials: "include",
});

export const apiSlice = createApi({
  baseQuery,
  tagTypes: [
    "Product",
    "Order",
    "User",
    "Auth",
    "Upload",
    "Notification",
    "Review",
  ],
  endpoints: (builder) => ({}),
});