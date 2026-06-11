"use client";

import Image from "next/image";
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
    <div className="bg-white rounded-lg p-4 h-full">
      <div>
        <h1 className="text-center">Attendance</h1>
        <Image
          src="/images/school-management-dashboard/moreDark.png"
          alt=""
          width={16}
          height={16}
          className=""
        />
      </div>
      <div style={{ width: "100%", height: 400 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />

            <Bar dataKey="pv" fill="#8884d8" />
            <Bar dataKey="uv" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default AttendanceChart;
