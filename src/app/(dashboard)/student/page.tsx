import Announcements from "@/src/components/Announcements";
import EventCalendar from "@/src/components/EventCalendar";
import React from "react";

function StudentPage() {
  return (
    <div className="p-4 flex gap-4 flex-col xl:flex-row">
      {/* Left */}
      <div className="w-ful xl:w-2/3">
        <div className="h-full bg-white p-4 rounded-md">Schedule (4A)</div>
      </div>

      {/* Right */}
      <div className="w-full xl:w-1/3">
        <div className="w-full xl:w-1/3 flex flex-col gap-8">
          <EventCalendar />
          <Announcements />
        </div>
      </div>
    </div>
  );
}

export default StudentPage;
