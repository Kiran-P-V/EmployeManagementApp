import React from "react";
import { Typography } from "@mui/material";
import { useSelector } from "react-redux";
import jwtDecode from "jwt-decode";

export const DisplayName = () => {
  const token = useSelector((state) => state.employee.employeeData);
  const decoded = jwtDecode(token);
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "30vh",
        }}
      >
        <Typography variant="h3" align="center">
          Hello, {decoded.name}!
        </Typography>
      </div>
    </>
  );
};
