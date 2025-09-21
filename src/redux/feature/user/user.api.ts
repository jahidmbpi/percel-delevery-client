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
        url: "/user/register",
        method: "POST",
        data: tourInfo,
      }),
      invalidatesTags: ["USER"],
    }),
    logOut: builder.mutation<void, void>({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
      invalidatesTags: ["USER"],
    }),

    getMe: builder.query({
      query: () => ({
        url: "/user/me",
        method: "GET",
      }),
      providesTags: ["USER"],
    }),

    getAlluserForAdmin: builder.query({
      query: () => ({
        url: "/user",
        method: "GET",
      }),
      providesTags: ["USER"],
    }),

    updateUser: builder.mutation({
      query: ({ userId, data }) => ({
        url: `/user/update/${userId}`,
        method: "PATCH",
        data: data,
      }),
      invalidatesTags: ["USER"],
    }),
  }),
});

export const {
  useCreateUserMutation,
  useGetMeQuery,
  useLogOutMutation,
  useGetAlluserForAdminQuery,
  useUpdateUserMutation,
} = userApi;
