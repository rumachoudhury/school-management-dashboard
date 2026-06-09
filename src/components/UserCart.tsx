import React from "react";
import Image from "next/image";

function UserCart({ type }: { type: string }) {
  return (
    <div className="rounded-2xl p-4 flex-1 min-w-[170px] odd:bg-[#7B61FF] even:bg-[#F9E5C9]  shadow-md">
      {/* top row */}
      <div className="flex items-center justify-between">
        <span className="text-xs bg-white/40 px-2 py-1 rounded-full text-green-700">
          2025/26
        </span>

        <Image
          src="/images/school-management-dashboard/more.png"
          alt="More image"
          width={18}
          height={18}
        />
      </div>

      {/* middle number */}
      <div className="mt-4">
        <h1 className="text-2xl font-bold">1,234</h1>
      </div>

      {/* bottom label */}
      <div className="mt-2">
        <span className="capitalize text-sm opacity-80">{type}</span>
      </div>
    </div>
  );
}

export default UserCart;
