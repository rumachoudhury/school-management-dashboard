import Image from "next/image";
import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-200">
      {/* Search Bar */}
      <div className="hidden md:flex items-center gap-2 text-sm rounded-full ring-[1.5px] ring-gray-300 px-3 py-1 justify-end">
        <Image
          src="/images/school-management-dashboard/search.png"
          alt="Search image"
          width={14}
          height={14}
        />
        <input
          type="text"
          placeholder="Search..."
          className="ml-2 px-2 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-50"
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

        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative">
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
