// "use client";

// import Image from "next/image";
// import React, { useState } from "react";
// import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";
// type ValuePiece = Date | null;

// type Value = ValuePiece | [ValuePiece, ValuePiece];

// type Event = {
//   id: number;
//   title: string;
//   description: string;
//   time: string;
// };

// const eventsData: Event[] = [
//   {
//     id: 1,
//     title: "Parent-Teacher Meeting",
//     description: "Discussion with parents about student progress.",
//     time: "10:00 AM",
//   },
//   {
//     id: 2,
//     title: "Science Fair",
//     description: "Students present their science projects.",
//     time: "1:30 PM",
//   },
//   {
//     id: 3,
//     title: "Sports Day",
//     description: "Annual outdoor sports competition and activities.",
//     time: "9:00 AM",
//   },
//   {
//     id: 4,
//     title: "Holiday Break",
//     description: "School closed for seasonal holidays.",
//     time: "All Day",
//   },
// ];

// function EventCalendar() {
//   const [value, onChange] = useState<Value>(new Date());
//   return (
//     <div className="bg-white p-4 rounded-md mx-2">
//       <Calendar onChange={onChange} value={value} className="react-calendar" />

//       <div className="flex items-center justify-between">
//         <h1 className="text-xl font-semibold my-4">Events</h1>

//         <Image
//           src="/images/school-management-dashboard/moreDark.png"
//           alt="More image"
//           width={20}
//           height={20}
//         />
//       </div>
//       <div className="flex flex-col gap-4">
//         {eventsData.map((event) => (
//           <div
//             key={event.id}
//             // className="border-2 border-t-4 border-gray-100  odd:border-t-sky-200 even:border-t-purple-200 p-4 rounded-md"
//             className="border border-gray-100 border-t-4 odd:border-t-sky-200 even:border-t-purple-200 p-4 rounded-md"
//           >
//             <div className="flex justify-between items-center">
//               <h3 className="text-gray-600 text-lg font-semibold">
//                 {event.title}
//               </h3>

//               <span className="text-sm font-medium text-gray-300">
//                 {event.time}
//               </span>
//             </div>

//             <p className="text-sm text-gray-400 mt-2">{event.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default EventCalendar;
// =============
"use client";

import Image from "next/image";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type Event = {
  id: number;
  title: string;
  description: string;
  time: string;
  date: string;
};

const eventsData: Event[] = [
  {
    id: 1,
    title: "Math",
    description: "Mathematics class for Grade 5.",
    time: "8:00 AM",
    date: "2026-01-12",
  },
  {
    id: 2,
    title: "English",
    description: "English language and grammar class.",
    time: "9:00 AM",
    date: "2026-01-12",
  },
  {
    id: 3,
    title: "Science",
    description: "Science class and laboratory activities.",
    time: "10:00 AM",
    date: "2026-01-13",
  },
  {
    id: 4,
    title: "Parent-Teacher Meeting",
    description: "Discussion with parents about student progress.",
    time: "10:00 AM",
    date: "2026-01-14",
  },
];

function EventCalendar() {
  const [value, onChange] = useState(new Date());

  return (
    <div className="bg-white rounded-md p-3 sm:p-4 md:p-6 w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-lg sm:text-xl font-semibold">Events</h1>

        <Image
          src="/images/school-management-dashboard/moreDark.png"
          alt="More"
          width={20}
          height={20}
        />
      </div>

      {/* Calendar */}
      <div className="w-full overflow-hidden">
        <Calendar
          onChange={onChange}
          value={value}
          className="!w-full !border-none"
        />
      </div>

      {/* Event List */}
      <div className="mt-6">
        <h2 className="text-base font-semibold text-gray-700 mb-4">
          Upcoming Events
        </h2>

        <div className="flex flex-col gap-3">
          {eventsData.map((event) => (
            <div
              key={event.id}
              className="w-full border border-gray-100 border-t-4 odd:border-t-sky-200 even:border-t-purple-200 rounded-md p-3 sm:p-4"
            >
              {/* Event Header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <h3 className="text-sm sm:text-base font-semibold text-gray-600">
                  {event.title}
                </h3>

                <span className="text-xs sm:text-sm text-gray-400">
                  {event.time}
                </span>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-gray-400 mt-2">
                {event.description}
              </p>

              {/* Date */}
              <p className="text-xs text-gray-300 mt-2">{event.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default EventCalendar;
