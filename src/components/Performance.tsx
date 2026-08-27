
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
    <div className="h-[250px] w-full bg-white rounded-md">
        <div>
            <h1 className="text-xl font-semibold">Performance</h1>
            <Image src="/images/school-management-dashboard/moreDark.png" alt="" width={16} height={16}/>

        </div>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={65}
            outerRadius={90}
            paddingAngle={3}
            label
          />

          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

