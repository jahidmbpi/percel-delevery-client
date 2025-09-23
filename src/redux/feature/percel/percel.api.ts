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
      providesTags: ["PERCEL"],
    }),
    updateParcel: builder.mutation({
      query: ({ id, status }) => ({
        url: `/percel/update/${id}`,
        method: "PATCH",
        data: { status },
      }),
      invalidatesTags: ["PERCEL"],
    }),
    getAllAdminPercel: builder.query({
      query: () => ({
        url: "/percel/admin-percel",
        method: "GET",
      }),
      providesTags: ["PERCEL"],
    }),
    getAllReciverPercel: builder.query({
      query: () => ({
        url: "/percel/me",
        method: "GET",
      }),
      providesTags: ["PERCEL"],
    }),

    percelHistory: builder.query<Percel[], void>({
      query: () => ({
        url: "/percel/history",
        method: "GET",
      }),
      transformResponse: (response: { data: Percel[] }) => response.data,
      providesTags: ["PERCEL"],
    }),
    singlePercel: builder.query<IResponse<Percel>, { trakinId: string }>({
      query: (trakinId) => (
        console.log(trakinId),
        {
          url: `/percel/single`,
          method: "GET",
          params: trakinId,
        }
      ),
    }),
  }),
});

export const {
  useCreatePercelMutation,
  useGetAllSenderPercelQuery,
  useUpdateParcelMutation,
  useGetAllAdminPercelQuery,
  useGetAllReciverPercelQuery,
  usePercelHistoryQuery,
  useSinglePercelQuery,
} = percelApi;
