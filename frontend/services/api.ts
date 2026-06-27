import { createApi } from '@reduxjs/toolkit/query/react';
import instance from './axios';

// Create custom baseQuery
const axiosBaseQuery = () => {
  return (
    async ({ url, method, data, headers }: any) => {
      try {
        const result = await instance({
          url,
          method,
          data,
          headers
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

type LoginResponse = {
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
        headers : {
          'Content-Type' : "application/json"
        }
      })
    }),
    getLogIn : builder.mutation<LoginResponse, FormData>({
      query : (formData) => ({
        url : "/auth/login",
        method : "POST",
        data : formData,
        headers : {
          'Content-Type' : "multipart/form-data"
        }
      })
    })
  }),
});

export const {useGetLogInMutation ,useGetRegisterMutation } = api;
