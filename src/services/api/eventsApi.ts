import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TEvent, TReqUser, TResEventById, TResEvents, TSubUser } from "./types";

const BASE_URL = "https://eventsboard-server.onrender.com/api";

export const eventsApi = createApi({
  reducerPath: "eventsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  refetchOnMountOrArgChange: true,
  endpoints: (builder) => ({
    allEvents: builder.query<TResEvents, { page: number }>({
      query: ({ page = 1 }) => ({
        url: "/events",
        method: "GET",
        params: { page },
      }),
    }),
    getEventById: builder.query<TResEventById, { id: string | undefined }>({
      query: ({ id }) => ({
        url: `/events/${id}`,
        method: "GET",
      }),
    }),
    addUserEvent: builder.mutation<TSubUser, TReqUser>({
      query: (body) => ({
        url: "/users",
        method: "POST",
        body,
      }),
    }),
    getUserEvents: builder.query<TEvent[], { id: string | null }>({
      query: (body) => ({
        url: "/users/events",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  useAllEventsQuery,
  useGetEventByIdQuery,
  useAddUserEventMutation,
  useGetUserEventsQuery,
} = eventsApi;
