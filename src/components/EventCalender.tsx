"use client";

import { title } from "process";
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

const eventsData: Event[] = [
  {
    id: 1,
    title: "Parent-Teacher Meeting",
    description: "Discussion with parents about student progress.",
  },
  {
    id: 2,
    title: "Science Fair",
    description: "Students present their science projects.",
  },
  {
    id: 3,
    title: "Sports Day",
    description: "Annual outdoor sports competition and activities.",
  },
  {
    id: 4,
    title: "Holiday Break",
    description: "School closed for seasonal holidays.",
  },
];

function EventCalender() {
  const [value, onChange] = useState<Value>(new Date());
  return (
    <div className="bg-white p-4 rounded-md mx-2">
      <Calendar onChange={onChange} value={value} className="react-calendar" />

      <div className="flex flex-col gap-4">
        {eventsData.map((event) => (
          <div key={event.id} className="border p-4 rounded-md">
            <h3 className="font-semibold">{event.title}</h3>
            <p className="text-sm text-gray-500">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventCalender;
