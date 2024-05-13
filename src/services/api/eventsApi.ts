import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TEvent } from "./types";


const BASE_URL = "http://localhost:3001/api";

export const eventsApi = createApi({
    reducerPath: "eventsApi",
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
    }),
    endpoints: (builder) => ({
        allEvents: builder.query<TEvent[], void>({
            query: () => ({
                url: "/events",
                method: "GET",
            }),
        }),
    }),
});


export const { useAllEventsQuery } = eventsApi;