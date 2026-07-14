import React from "react";

function SingleTeacherPage() {
  return (
    <div className="flex-1 p-4 flex flex-col xl:flex-row">
      {/* Left */}
      <div className="w-full xl:w-2/3">L</div>

      {/* Right */}
      <div className="w-full xl:w-1/3">R</div>
    </div>
  );
}

export default SingleTeacherPage;
