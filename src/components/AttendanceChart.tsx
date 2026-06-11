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
  { name: "Monday", present: 4000, absent: 2400 },
  { name: "Tuesday", present: 4000, absent: 2400 },
  { name: "Wednesday", present: 4000, absent: 2400 },
  { name: "Thursday", present: 4000, absent: 2400 },
  { name: "Friday", present: 4000, absent: 2400 },
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
        <ResponsiveContainer width="100%" height="90%">
          <BarChart data={data} width={700} height={300}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" interval={0} angle={30} textAnchor="middle" />
            <YAxis />
            <Tooltip />
            <Legend align="left" />

            <Bar dataKey="present" fill="#8884d8" />
            <Bar dataKey="absent" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default AttendanceChart;
