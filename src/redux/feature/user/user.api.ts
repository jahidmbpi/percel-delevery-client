import { baseApi } from "@/redux/baseApi";

export interface IResponse<T> {
  massage: string;
  statusCode: number;
  success: boolean;
  data: T;
}

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: (tourInfo) => ({
        url: "/tour/create-tour",
        method: "POST",
        data: tourInfo,
      }),
      // invalidatesTags: ["USER"],
    }),

    getMe: builder.query({
      query: () => ({
        url: "/user/me",
        method: "GET",
      }),
      // providesTags: ["USER"],
    }),
  }),
});

export const { useGetMeQuery } = userApi;
