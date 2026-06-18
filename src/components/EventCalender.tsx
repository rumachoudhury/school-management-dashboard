"use client";

import Image from "next/image";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

type Event = {
  id: number;
  title: string;
  description: string;
};

const eventsData = [
  {
    id: 1,
    title: "Parent-Teacher Meeting",
    description: "Discussion with parents about student progress.",
    time: "10:00 AM",
  },
  {
    id: 2,
    title: "Science Fair",
    description: "Students present their science projects.",
    time: "1:30 PM",
  },
  {
    id: 3,
    title: "Sports Day",
    description: "Annual outdoor sports competition and activities.",
    time: "9:00 AM",
  },
  {
    id: 4,
    title: "Holiday Break",
    description: "School closed for seasonal holidays.",
    time: "All Day",
  },
];

function EventCalender() {
  const [value, onChange] = useState<Value>(new Date());
  return (
    <div className="bg-white p-4 rounded-md mx-2">
      <Calendar onChange={onChange} value={value} className="react-calendar" />

      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Events</h1>

        <Image
          src="/images/school-management-dashboard/moreDark.png"
          alt="More image"
          width={20}
          height={20}
        />
      </div>
      <div className="flex flex-col gap-4">
        {eventsData.map((event) => (
          <div key={event.id} className="border p-4 rounded-md">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold">{event.title}</h3>

              <span className="text-sm font-medium text-blue-500">
                {event.time}
              </span>
            </div>

            <p className="text-sm text-gray-500 mt-2">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventCalender;
