"use client";
import Image from "next/image";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// #region Sample data
// const data = [
//   {
//     name: "Jan",
//     income: 4000,
//     expense: 2400,
//   },
//   {
//     name: "Feb",
//     income: 3000,
//     expense: 1398,
//   },
//   {
//     name: "Mar",
//     income: 2000,
//     expense: 9800,
//   },
//   {
//     name: "Apr",
//     income: 2780,
//     expense: 3908,
//   },
//   {
//     name: "May",
//     income: 1890,
//     expense: 4800,
//   },
//   {
//     name: "Jun",
//     income: 2390,
//     expense: 3800,
//   },
//   {
//     name: "Jul",
//     income: 3490,
//     expense: 4300,
//   },
// ];

const data = [
  { name: "Jan", income: 8000, expense: 5200 },
  { name: "Feb", income: 7500, expense: 4800 },
  { name: "Mar", income: 9200, expense: 6100 },
  { name: "Apr", income: 8700, expense: 5500 },
  { name: "May", income: 9800, expense: 6300 },
  { name: "Jun", income: 10500, expense: 7000 },
  { name: "Jul", income: 11200, expense: 7600 },
  { name: "Aug", income: 11200, expense: 7600 },
  { name: "Sep", income: 11800, expense: 7900 },
  { name: "Oct", income: 12100, expense: 8200 },
  { name: "Nov", income: 11500, expense: 8000 },
  { name: "Dec", income: 13000, expense: 9000 },
];

const FinanceChart = () => {
  return (
    <div>
      {/* Title */}
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold ">Finance</h2>
        <Image
          src="/images/school-management-dashboard/moreDark.png"
          alt="More image"
          width={24}
          height={24}
        />
      </div>

      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={data}
          margin={{ top: 5, right: 0, left: 0, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          {/* <XAxis dataKey="name" /> */}
          <XAxis
            dataKey="name"
            axisLine={false}
            tick={{ fill: "#d1d5db" }}
            tickLine={false}
          />
          <YAxis axisLine={false} tick={{ fill: "#d1d5db" }} tickLine={false} />
          {/* <Tooltip /> */}
          <Tooltip
            contentStyle={{
              backgroundColor: "#fff",
              border: "1px solid #e5e7eb",
              borderRadius: "8px",
            }}
          />
          <Legend />

          {/* <Line dataKey="income" stroke="#3B82F6" />
          <Line dataKey="expense" stroke="#FACC15" /> */}

          <Line type="monotone" dataKey="income" stroke="#3B82F6" />
          <Line type="monotone" dataKey="expense" stroke="#FACC15" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FinanceChart;
