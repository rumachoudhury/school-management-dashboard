"use client";

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { RechartsDevtools } from "@recharts/devtools";

const data = [
  {
    name: " Monday",
    present: 4000,
    absent: 2400,
  },
  {
    name: "Twesday",
    present: 4000,
    absent: 2400,
  },
  {
    name: "Wednesday",
    present: 4000,
    absent: 2400,
  },
  {
    name: "Thrusday",
    present: 4000,
    absent: 2400,
  },
  {
    name: "Friday",
    present: 4000,
    absent: 2400,
  },
];

function AttendanceChart() {
  return (
    <div style={{ width: "100%", height: 400 }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 5, right: 10, left: 10, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" opacity={0.4} />

          <XAxis dataKey="name" />
          <YAxis />

          <Tooltip />
          <Legend />

          <Bar
            dataKey="pv"
            fill="#8884d8"
            radius={[10, 10, 0, 0]}
            activeBar={{ fill: "pink", stroke: "blue" }}
          />

          <Bar
            dataKey="uv"
            fill="#82ca9d"
            radius={[10, 10, 0, 0]}
            activeBar={{ fill: "gold", stroke: "purple" }}
          />
        </BarChart>
      </ResponsiveContainer>

      {process.env.NODE_ENV === "development" && <RechartsDevtools />}
    </div>
  );
}

export default AttendanceChart;
