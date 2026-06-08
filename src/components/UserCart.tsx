// import React from "react";

// function UserCart({ type }: { type: string }) {
//   return (
//     <div className="rounded-2xl odd:bg-purple even:bg-yellow p-4">UserCart</div>
//   );
// }

// export default UserCart;

import React from "react";

function UserCart({ type }: { type: string }) {
  return (
    <div className="rounded-2xl odd:bg-purple even:bg-yellow p-4">
      UserCart - {type}
    </div>
  );
}

export default UserCart;
