import { createApi } from '@reduxjs/toolkit/query/react';
import instance from './axios';
import { loginSuccess } from '../redux/feature/loginSlice';
import { LoginResponse, RegisterRequest, RegisterResponse } from '@/types/type';

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
      }),
      async onQueryStarted(_, {dispatch,queryFulfilled}){
        try{
          const result = await queryFulfilled;
          dispatch(loginSuccess({user : result.data.user, isLoggedIn :  true}))
        }catch(err){
          console.log("Error in login mutation", err)
        }

      }
    }),
    getAccessToken : builder.mutation({
      query : () => ({
        url : '/auth/refresh',
        method :  'POST',
        headers  : {
          'Content-Type' : "application/json"
        }

      })
    })
  }),
});

export const {useGetLogInMutation ,useGetRegisterMutation, useGetAccessTokenMutation } = api;
