import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import axios from './axios';

// Create custom baseQuery
const axiosBaseQuery = () => {
  return (
    async ({ url, method, data }: any) => {
      try {
        const result = await axios({
          url,
          method,
          data,
        });

        return { data: result.data };
      }
      catch (err: any) {
        return {
          error: {
            status: err.response?.status,
            data: err.response?.data || err.message,
          },
        };
      }
    }
  )
}

type RegisterRequest = {
  username: string,
  email: string,
  password: string,
}

type RegisterResponse = {
  message: string;
};

export const api = createApi({
  reducerPath: 'api',
  baseQuery: axiosBaseQuery(),
  tagTypes: ['Example'],
  endpoints: (builder) => ({
    getRegister: builder.mutation<RegisterResponse, RegisterRequest>({
      query: (body) => ({
        url: '/auth/signup',
        method: 'POST',
        data: body,
      })
    }),
  }),
});

export const { useGetRegisterMutation } = api;
