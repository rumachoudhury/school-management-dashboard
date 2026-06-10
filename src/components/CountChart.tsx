"use client";

import { RadialBarChart, RadialBar, Legend, Tooltip } from "recharts";
// import { RechartsDevtools } from "@recharts/devtools";
// import { ResponsiveContainer } from "recharts";
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
      <div className="relative w-full h-[75%]">
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
          barSize={32}
          data={data}
        >
          <RadialBar
            // label={{ position: "insideStart", fill: "#fff" }}
            background
            // dataKey="uv"
            dataKey="count"
          />
          {/* <Legend
            iconSize={10}
            layout="vertical"
            verticalAlign="middle"
            // wrapperStyle={style}
          /> */}
          <Tooltip />
          {/* <RechartsDevtools /> */}
        </RadialBarChart>
        {/* </ResponsiveContainer> */}

        <Image
          src="/images/school-management-dashboard/maleFemale.png"
          alt="Male and female chart icon"
          width={20}
          height={20}
        />
      </div>

      {/*Bottom*/}
      {/* <div className="flex justify-center gap-16">
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-purple-400 rounded-full">
            <h1 className="font-bold">1,450</h1>
            <h2 className="text-sm text-gray-300">Boys (50%)</h2>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-[#F9E5C9] rounded-full">
            <h1 className="font-bold">1,450</h1>
            <h2 className="text-sm text-gray-300">girls (50%)</h2>
          </div>
        </div>
      </div> */}

      <div className="flex gap-10 justify-center">
        <div className="flex flex-col items-center gap-1">
          <div className="w-3 h-3 bg-[#F9E5C9] rounded-full"></div>
          <h1 className="font-bold">1,450</h1>
          <h2 className="text-sm text-gray-500">Girls (50%)</h2>
        </div>

        <div className="flex flex-col items-center gap-1">
          <div className="w-3 h-3 bg-[#7B61FF] rounded-full"></div>
          <h1 className="font-bold">1,450</h1>
          <h2 className="text-sm text-gray-500">Boys (55%)</h2>
        </div>
      </div>
    </div>
  );
}

export default CountChart;
