import Image from "next/image";
import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    // <div className="flex items-center justify-between mx-auto px-4 py-2 bg-white shadow-md rounded-full">
    //   {/* <div className="text-xl font-bold">School Management Dashboard</div> */}
    //   <div className="space-x-4 text-sm font-semibold">
    //     <Link
    //       href="/"
    //       className="text-gray-600 hover:text-gray-900 underline-offset-1 hover:underline"
    //     >
    //       Home
    //     </Link>
    //     <Link href="/student" className="text-gray-600 hover:text-gray-900">
    //       Student
    //     </Link>
    //     <Link href="/teacher" className="text-gray-600 hover:text-gray-900">
    //       Teacher
    //     </Link>
    //     <Link href="/parent" className="text-gray-600 hover:text-gray-900">
    //       Parent
    //     </Link>
    //   </div>
    // </div>

    <div className="flex items-center justify-between p-4">
      {/* Search Bar */}
      <div className="hidden md:flex">
        <Image src="/logo.png" alt="Logo" width={40} height={40} />
      </div>

      {/* Icons and User */}
      <div className=""></div>
    </div>
  );
}

export default Navbar;
