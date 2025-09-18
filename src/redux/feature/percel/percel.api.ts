import { baseApi } from "@/redux/baseApi";
import type { Percel } from "./type";

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
    getAllSenderPercel: builder.query<Percel[], void>({
      query: () => ({
        url: "/percel/sender",
        method: "GET",
      }),
      transformResponse: (response: {
        success: boolean;
        message: string;
        data: Percel[];
      }) => {
        return response.data;
      },
    }),
  }),
});

export const { useCreatePercelMutation, useGetAllSenderPercelQuery } =
  percelApi;
