import React from "react";
import { Chart } from "../components/Chart";
import { Count } from "../components/Count";
import { DisplayName } from "../components/DisplayName";
import { Header } from "../Layouts/Header";

export const Dashboard = () => {
  return (
    <>
      <Header />
      <DisplayName />
      <Count />
    </>
  );
};
