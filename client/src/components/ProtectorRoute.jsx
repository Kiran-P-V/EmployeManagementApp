import React from "react";
import { Dashboard } from "../pages/Dashboard";
import { LoginPage } from "../pages/LoginPage";
import { useSelector } from "react-redux";

const CheckToken = () => {
  const employeeToken = useSelector((state) => state.employee.employeeData);

  return employeeToken;
};

const ProtectRoute = () => {
  console.log("protector route working");
  const isAuth = CheckToken();
  return isAuth ? <Dashboard /> : <LoginPage />;
};

export default ProtectRoute;
