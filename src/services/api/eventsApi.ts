import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TReqUser, TResEventById, TResEvents, TSubUser } from "./types";



const BASE_URL = "http://localhost:3001/api";

export const eventsApi = createApi({
    reducerPath: "eventsApi",
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
    }),
    endpoints: (builder) => ({
        allEvents: builder.query<TResEvents, { page: number }>({
            query: ({ page = 1 }) => ({
                url: "/events",
                method: "GET",
                params: {page},
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
            })
        })
    }),
});


export const { useAllEventsQuery, useGetEventByIdQuery, useAddUserEventMutation } = eventsApi;