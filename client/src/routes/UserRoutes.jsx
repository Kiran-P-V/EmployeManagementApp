import React from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import ProtectRoute from "../components/ProtectorRoute";
import { ChartPage } from "../pages/ChartPage";
import { Profile } from "../pages/Profile";
import { RegisterPage } from "../pages/RegisterPage";
import { useSelector } from "react-redux";

export const UserRoutes = () => {
  function Protected() {
    const isAuth = useSelector((state) => state.employee.employeeData);
    return isAuth ? <Outlet /> : <Navigate to="/" />;
  }
  return (
    <>
      <Routes>
        <Route path="/" element={<ProtectRoute />} />
        <Route element={<Protected />}>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/chart" element={<ChartPage />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </>
  );
};
