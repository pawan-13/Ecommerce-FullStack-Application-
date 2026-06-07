import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_BASEURL}),
  tagTypes: ['Example'],
  endpoints: (builder) => ({
    getHello: builder.query<{ message: string }, void>({
      query: () => 'hello',
    }),
  }),
});

export const { useGetHelloQuery } = api;
