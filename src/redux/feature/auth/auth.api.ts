import { baseApi } from "@/redux/baseApi";

export interface IResponse<T> {
  massage: string;
  statusCode: number;
  success: boolean;
  data: T;
}

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    logIn: builder.mutation({
      query: (tourInfo) => ({
        url: "/auth/login",
        method: "POST",
        data: tourInfo,
      }),
    }),
    register: builder.mutation({
      query: (tourInfo) => ({
        url: "/auth/login",
        method: "POST",
        data: tourInfo,
      }),
    }),

    getMe: builder.query({
      query: () => ({
        url: "/user/me",
        method: "GET",
      }),
    }),
  }),
});

export const { useLogInMutation, useRegisterMutation, useGetMeQuery } = userApi;
