"use client";
import Image from "next/image";

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
    </div>
  );
};

export default FinanceChart;
