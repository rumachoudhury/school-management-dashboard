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
    <div className="rounded-2xl odd:bg-[#7B61FF] even:bg-[#F9E5C9] p-4 flex-1">
      <div>
        <span>2025/26</span>
        <Image
          src="/images/school-management-dashboard/more.png"
          alt="More image"
          width={20}
          height={20}
        />
      </div>
    </div>
  );
}

export default UserCart;
