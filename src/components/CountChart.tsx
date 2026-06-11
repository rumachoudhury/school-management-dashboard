"use client";

import { RadialBarChart, RadialBar } from "recharts";
import Image from "next/image";

// #region Sample data
const data = [
  {
    name: "Total",
    count: 90,
    pv: 2400,
    fill: "white",
  },
  {
    name: "Girls",
    count: 50,
    pv: 2400,
    fill: "#38BDF8",
  },
  {
    name: "Boys",
    count: 40,
    pv: 4567,
    fill: "#FACC15",
  },
];

// #endregion
// const style = {
//   top: "50%",
//   right: 0,
//   transform: "translate(0, -50%)",
//   lineHeight: "24px",
// };

function CountChart() {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4 shadow-md flex flex-col">
      {/* Title */}
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold ">Students</h2>
        <Image
          src="/images/school-management-dashboard/moreDark.png"
          alt="More image"
          width={24}
          height={24}
        />
      </div>

      {/*Chart */}

      <div className="relative flex justify-center items-center h-[250px]">
        <RadialBarChart
          width={250}
          height={250}
          cx="50%"
          cy="50%"
          innerRadius="60%"
          outerRadius="100%"
          barSize={32}
          data={data}
        >
          <RadialBar background dataKey="count" />
        </RadialBarChart>

        <Image
          src="/images/school-management-dashboard/maleFemale.png"
          alt="Male and female chart icon"
          width={40}
          height={40}
          className="absolute"
        />
      </div>

      {/*Bottom*/}

      <div className="flex gap-10 justify-center">
        <div className="flex flex-col items-center gap-1">
          <div className="w-3 h-3 bg-[#F9E5C9] rounded-full"></div>
          <h1 className="font-bold">1,450</h1>
          <h2 className="text-sm text-gray-500">Girls (50%)</h2>
        </div>

        <div className="flex flex-col items-center gap-1">
          <div className="w-3 h-3 bg-[#7B61FF] rounded-full"></div>
          <h1 className="font-bold">1,450</h1>
          <h2 className="text-sm text-gray-500">Boys (50%)</h2>
        </div>
      </div>
    </div>
  );
}

export default CountChart;
