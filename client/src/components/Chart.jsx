import React from "react";
import {
  PieChart,
  Pie,
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar,
} from "recharts";
export const Chart = () => {
  const data = [
    { name: "MD", count: 1 },
    { name: "Manager", count: 3 },
    { name: "Clerk", count: 5 },
    { name: "cashier", count: 2 },
  ];
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "70vh",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <h1  >Designation wise count.</h1>
          <div className="App">
            <BarChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 80,
                bottom: 5,
              }}
              barSize={40}
            >
              <XAxis
                dataKey="name"
                scale="point"
                padding={{ left: 22, right: 10 }}
              />
              <YAxis />
              <Tooltip />
              <Legend />
              <CartesianGrid strokeDasharray="3 3" />
              <Bar
                dataKey="count"
                fill="#8884d8"
                background={{ fill: "#eee" }}
              />
            </BarChart>
          </div>
        </div>
      </div>
    </>
  );
};
