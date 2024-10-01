import React from "react";
import { BrowserRouter } from "react-router-dom";

import { AuthRoutes } from "./auth.routes";

import { useAuth } from "../hooks/useAuth";
import { USER_ROLE } from "../utils/roles";
import { AdminRoutes } from "./admin.routes";
import { CustomerRoutes } from "./customer.routes";

export function Routes() {
  const { user } = useAuth();

  function AcessRoute() {
    switch (user?.role) {
      case USER_ROLE.ADMIN:
        return <AdminRoutes />;
      case USER_ROLE.CUSTOMER:
        return <CustomerRoutes />;
      default:
        return <AuthRoutes />;
    }
  }

  return (
    <BrowserRouter>{user ? <AcessRoute /> : <AuthRoutes />}</BrowserRouter>
  );
}
