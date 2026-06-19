import React from "react";

const Announcements = () => {
  return (
    <div className="bg-white p-4 rounded-md">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Announcements</h1>
        <span className="text-xs">View All</span>
      </div>

      <div className="flex flex-col gap-4">
        <div className="bg-sky-200 rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold">New School Announcement</h2>
            <span className="text-sm text-gray-400">06-19-2026</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
