import { baseApi } from "@/redux/baseApi";

export interface IResponse<T> {
  massage: string;
  statusCode: number;
  success: boolean;
  data: T;
}

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // createTour: builder.mutation({
    //   query: (tourInfo) => ({
    //     url: "/tour/create-tour",
    //     method: "POST",
    //     data: tourInfo,
    //   }),
    // }),

    getMe: builder.query({
      query: () => ({
        url: "/user/me",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetMeQuery } = userApi;
