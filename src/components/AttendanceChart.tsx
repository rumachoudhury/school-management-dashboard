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
      <div className="flex flex-col  gap-3">
        <h1 className="">Attendance</h1>
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
            <XAxis
              dataKey="name"
              interval={0}
              angle={30}
              textAnchor="middle"
              className="pt-8"
            />
            <YAxis />
            <Tooltip />
            <Legend
              align="left"
              verticalAlign="top"
              wrapperStyle={{ paddingBottom: "50px" }}
            />
            {/* 
            <Bar dataKey="present" fill="#8884d8" legendType="circle" />
            <Bar dataKey="absent" fill="#82ca9d" legendType="circle" /> */}
            <Bar dataKey="present" fill="#3B82F6" legendType="circle" />{" "}
            {/* Blue */}
            <Bar dataKey="absent" fill="#FACC15" legendType="circle" />{" "}
            {/* Yellow */}
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default AttendanceChart;
