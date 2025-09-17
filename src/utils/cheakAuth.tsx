import Loader from "@/components/Loader";

import { type ComponentType } from "react";
import { Navigate } from "react-router";
import type { Role } from "./getsidbarItem";
import { useGetMeQuery } from "@/redux/feature/auth/auth.api";

export const withAuth = (Component: ComponentType, requireRole: Role) => {
  return function AuthWraper() {
    const { data, isLoading } = useGetMeQuery(undefined);

    if (isLoading) {
      return <Loader />;
    }

    if (!isLoading && !data?.data?.email) {
      return <Navigate to="/login" />;
    }

    if (requireRole && requireRole !== data?.data?.role?.toUpperCase()) {
      return <Navigate to="/unauthorized" replace />;
    }

    return <Component />;
  };
};
