// import React from "react";

// function UserCart({ type }: { type: string }) {
//   return (
//     <div className="rounded-2xl odd:bg-purple even:bg-yellow p-4">UserCart</div>
//   );
// }

// export default UserCart;
// ==========================================

import React from "react";
import Image from "next/image";

function UserCart({ type }: { type: string }) {
  return (
    <div className="rounded-2xl odd:bg-[#7B61FF] even:bg-[#F9E5C9] p-4 flex-1 min-w-[1300px]">
      <div className="flex justify-between items-center">
        <span>2025/26</span>
        <Image
          src="/images/school-management-dashboard/more.png"
          alt="More image"
          width={20}
          height={20}
        />
        <h1>1,234</h1>
        <span>{type}</span>
      </div>
    </div>
  );
}

export default UserCart;
