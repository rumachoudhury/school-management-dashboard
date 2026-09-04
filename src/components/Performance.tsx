
"use client";

import Image from "next/image";
import {
  Pie,
  PieChart,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Performance", value: 92, fill: "#60a5fa" },
  { name: "Remaining", value: 8, fill: "#fde68a" },
];

export default function Performance() {
  return (
    <div className="h-[320px] w-full rounded-md bg-white p-5 relative">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Performance</h1>

        <Image
          src="/images/school-management-dashboard/moreDark.png"
          alt="More"
          width={16}
          height={16}
        />
      </div>

      {/* Chart */}
      <div className="h-[250px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={90}
              paddingAngle={3}
            
            />

            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Center Text */}
      <div className="absolute left-1/2 top-[58%] -translate-x-1/2 -translate-y-1/2 text-center">
        <h2 className="text-3xl font-bold">9.2</h2>
        <p className="text-xs text-gray-500">of 10 max</p>
      </div>
    </div>
  );
}



