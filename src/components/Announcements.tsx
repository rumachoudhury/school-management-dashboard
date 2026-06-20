import React from "react";

const Announcements = () => {
  return (
    <div className="bg-white p-4 mx-2 rounded-md">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Announcements</h1>
        <span className="text-xs">View All</span>
      </div>
      {/* 
      <div className="flex flex-col gap-4">
        <div className="bg-purple-200 rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold">New School Announcement</h2>
            <span className="text-sm text-gray-400 bg-white rounded-md px-1 py-1">
              06-19-2026
            </span>

            <p className="text-sm text-gray-600 mt-2">
              Discuss student progress and upcoming activities.
            </p>
          </div>
        </div>

        <div className="bg-yellow-200 rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold">Parent Meeting Reminder</h2>
            <span className="text-sm text-gray-400 bg-white rounded-md px-1 py-1">
              06-19-2026
            </span>

            <p className="text-sm text-gray-600 mt-2">
              Parents are invited to discuss student progress and upcoming
              activities.
            </p>
          </div>
        </div>
      </div> */}

      <div className="flex flex-col gap-4">
        <div className="bg-purple-200 rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold">New School Announcement</h2>

            <span className="text-sm text-gray-400 bg-white rounded-md px-1 py-1">
              06-19-2026
            </span>
          </div>

          <p className="text-sm text-gray-600 mt-2">
            Discuss student progress and upcoming activities.
          </p>
        </div>

        <div className="bg-yellow-200 rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold">Parent Meeting Reminder</h2>

            <span className="text-sm text-gray-400 bg-white rounded-md px-1 py-1">
              06-19-2026
            </span>
          </div>

          <p className="text-sm text-gray-600 mt-2">
            Parents are invited to discuss student progress and upcoming
            activities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
