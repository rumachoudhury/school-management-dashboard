"use client";

import { RadialBarChart, RadialBar, Legend, Tooltip } from "recharts";
// import { RechartsDevtools } from "@recharts/devtools";
// import { ResponsiveContainer } from "recharts";
import Image from "next/image";

// #region Sample data
const data = [
  {
    name: "18-24",
    uv: 31.47,
    pv: 2400,
    fill: "#8884d8",
  },
  {
    name: "25-29",
    uv: 26.69,
    pv: 4567,
    fill: "#83a6ed",
  },
  {
    name: "30-34",
    uv: 15.69,
    pv: 1398,
    fill: "#8dd1e1",
  },
  {
    name: "35-39",
    uv: 8.22,
    pv: 9800,
    fill: "#82ca9d",
  },
  {
    name: "40-49",
    uv: 8.63,
    pv: 3908,
    fill: "#a4de6c",
  },
  {
    name: "50+",
    uv: 2.63,
    pv: 4800,
    fill: "#d0ed57",
  },
  {
    name: "unknown",
    uv: 6.67,
    pv: 4800,
    fill: "#ffc658",
  },
];

// #endregion
const style = {
  top: "50%",
  right: 0,
  transform: "translate(0, -50%)",
  lineHeight: "24px",
};

function CountChart() {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4 shadow-md flex flex-col">
      {/* Title */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold mb-4">Students</h2>
        <Image
          src="/images/school-management-dashboard/moreDark.png"
          alt="More image"
          width={24}
          height={24}
        />
      </div>

      {/*Chart */}
      <div>
        {/* <ResponsiveContainer width="100%" height="100%"> */}
        <RadialBarChart
          style={{
            width: "100%",
            maxWidth: "700px",
            maxHeight: "80vh",
            aspectRatio: 1.618,
          }}
          responsive
          cx="30%"
          barSize={14}
          data={data}
        >
          <RadialBar
            label={{ position: "insideStart", fill: "#fff" }}
            background
            dataKey="uv"
          />
          <Legend
            iconSize={10}
            layout="vertical"
            verticalAlign="middle"
            wrapperStyle={style}
          />
          <Tooltip />
          {/* <RechartsDevtools /> */}
        </RadialBarChart>
        {/* </ResponsiveContainer> */}
      </div>

      {/*Bottom*/}
      <div className="flex justify-center gap-16">
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-amber-50 rounded-full">
            <h1 className="font-bold">1,450</h1>

            <h2 className="text-sm">Boys (50%)</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountChart;
