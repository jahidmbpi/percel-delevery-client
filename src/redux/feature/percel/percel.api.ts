import { baseApi } from "@/redux/baseApi";

export interface IResponse<T> {
  massage: string;
  statusCode: number;
  success: boolean;
  data: T;
}

export const percelApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createPercel: builder.mutation({
      query: (percelInfo) => ({
        url: "/percel/create-percel",
        method: "POST",
        data: percelInfo,
      }),
      invalidatesTags: ["PERCEL"],
    }),
  }),
});

export const { useCreatePercelMutation } = percelApi;
