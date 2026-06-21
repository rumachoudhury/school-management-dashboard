import React from "react";
import UserCart from "../../../components/UserCart";
import CountChart from "@/src/components/CountChart";
import AttendanceChart from "@/src/components/AttendanceChart";
import FinanceChart from "@/src/components/FinanceChart";
import Announcements from "@/src/components/Announcements";
import EventCalendar from "@/src/components/EventCalendar";

function AdminPage() {
  return (
    <div className="p-4 flex flex-col md:flex-row lg:flex-row">
      {/* left */}
      <div className="w-full lg:w-2/3 flex flex-col gap-4">
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
          <div className="w-full lg:w-2/3 h-[450px]">
            <AttendanceChart />
          </div>
        </div>
        {/* Bottom Cart */}
        <div className="w-full h-[500px]">
          <FinanceChart />
        </div>
      </div>

      {/* right */}
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
        <EventCalendar />
        <Announcements />
      </div>
    </div>
  );
}

export default AdminPage;
