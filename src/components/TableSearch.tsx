import Image from "next/image";
import React from "react";

function TableSearch() {
  return (
    <div className="hidden md:flex items-center gap-2 text-sm rounded-full ring-[1.5px] ring-gray-300 px-3 py-1 justify-end">
      <Image
        src="/images/school-management-dashboard/search.png"
        alt="Search image"
        width={14}
        height={14}
      />
    </div>
  );
}

export default TableSearch;
