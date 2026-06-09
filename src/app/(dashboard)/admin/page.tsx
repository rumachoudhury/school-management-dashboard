import React from "react";
import UserCart from "../../../components/UserCart";
import CountChart from "@/src/components/CountChart";

function AdminPage() {
  return (
    <div className="p-4 flex flex-col md:flex-row lg:flex-row">
      {/* left */}
      <div className="w-full lg:w-2/3">
        {" "}
        {/* User Cart */}
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCart type="student" />
          <UserCart type="teacher" />
          <UserCart type="parent" />
          <UserCart type="staff" />
        </div>
        {/* Middle Cart */}
        <div className="flex gap-4 flex-col lg:flex-row">
          {/* Count Chart */}
          <div className="w-full lg:w-1/3 h-[450px]">
            <CountChart />
          </div>

          {/* Attendent Chart */}
          <div className="w-full lg:w-2/3 h-[450px]"></div>
        </div>
        {/* Bottom Cart */}
        <div className=""></div>
      </div>

      {/* right */}
      <div className="w-full lg:w-1/3">R</div>
    </div>
  );
}

export default AdminPage;
