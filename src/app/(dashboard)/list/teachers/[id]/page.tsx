import React from "react";

function SingleTeacherPage() {
  return (
    <div className="flex-1 p-4 flex flex-col xl:flex-row">
      {/* Left */}
      <div className="w-full xl:w-2/3">
        {/* Top */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* User info card  */}
          <div className="bg-sky-400 py-6 px-4 rounded-md"></div>

          {/* Small card with some info */}
          <div className=""></div>
        </div>

        {/* Bottom */}
        <div className="">Schedule</div>
      </div>

      {/* Right */}
      <div className="w-full xl:w-1/3">R</div>
    </div>
  );
}

export default SingleTeacherPage;
