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

    <div className="flex items-center justify-between p-4 bg-gray-200">
      {/* Search Bar */}
      <div className="hidden md:flex">
        <Image
          src="/images/school-management-dashboard/search.png"
          alt="Search image"
          width={14}
          height={14}
        />
        <input
          type="text"
          placeholder="Search..."
          className="ml-2 px-2 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Icons and User */}
      <div className="flex items-center space-x-4">
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
          <Image
            src="/images/school-management-dashboard/message.png"
            alt="Notification image"
            width={14}
            height={14}
          />
        </div>

        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
          <Image
            src="/images/school-management-dashboard/announcement.png"
            alt="Notification image"
            width={14}
            height={14}
          />

          <div className="absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-purple-500 text-white text-xs rounded-full">
            1
          </div>
        </div>

        <div className="flex flex-col">
          <span className="text-sm leading-3 font-medium">John Doe</span>
          <span className="text-xs text-gray-500 text-right">Admin</span>
        </div>

        <Image
          src="/images/school-management-dashboard/avatar.png"
          alt="Profile image"
          width={32}
          height={32}
          className="rounded-full cursor-pointer"
        />
      </div>
    </div>
  );
}

export default Navbar;
