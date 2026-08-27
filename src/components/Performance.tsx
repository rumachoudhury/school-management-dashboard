
"use client";

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
    <div className="h-[250px] w-full">
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

