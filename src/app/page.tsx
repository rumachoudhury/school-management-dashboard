// import ChatButton from "../components/ChatButton";

// export default function Home() {
//   return (
//     <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
//       <h1>Home Page</h1>
//       <ChatButton />
//     </div>
//   );
// }
// ========================

import ChatButton from "../components/ChatButton";

const stats = [
  {
    title: "Total Students",
    value: "1,250",
    change: "+8.2%",
    description: "from last month",
  },
  {
    title: "Total Teachers",
    value: "85",
    change: "+4.5%",
    description: "from last month",
  },
  {
    title: "Total Classes",
    value: "32",
    change: "+2",
    description: "new classes",
  },
  {
    title: "Total Parents",
    value: "980",
    change: "+6.4%",
    description: "from last month",
  },
];

const events = [
  {
    title: "Parent-Teacher Meeting",
    date: "August 28, 2026",
    time: "10:00 AM",
  },
  {
    title: "Science Fair",
    date: "September 2, 2026",
    time: "9:00 AM",
  },
  {
    title: "Mid-Term Examination",
    date: "September 8, 2026",
    time: "8:30 AM",
  },
];

const announcements = [
  "School will remain closed on September 7.",
  "New semester timetable has been published.",
  "Parent-Teacher meeting registration is open.",
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col gap-6 bg-zinc-50 p-6 dark:bg-black">
      {/* Welcome Section */}
      <div>
        <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">
          Welcome back, John Doe 👋
        </h1>
        <p className="mt-1 text-sm text-gray-500">
          Here&apos;s what&apos;s happening at your school today.
        </p>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="rounded-xl bg-white p-5 shadow-sm dark:bg-zinc-900"
          >
            <p className="text-sm text-gray-500">{stat.title}</p>

            <div className="mt-3 flex items-end justify-between">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                {stat.value}
              </h2>

              <span className="text-sm font-medium text-green-600">
                {stat.change}
              </span>
            </div>

            <p className="mt-1 text-xs text-gray-400">
              {stat.description}
            </p>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Attendance */}
        <div className="rounded-xl bg-white p-6 shadow-sm dark:bg-zinc-900">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
                Attendance Overview
              </h2>
              <p className="text-sm text-gray-500">
                Average student attendance
              </p>
            </div>

            <span className="text-2xl font-bold text-green-600">92%</span>
          </div>

          <div className="mt-6 h-4 overflow-hidden rounded-full bg-gray-100">
            <div
              className="h-full rounded-full bg-green-500"
              style={{ width: "92%" }}
            />
          </div>

          <div className="mt-4 flex justify-between text-sm text-gray-500">
            <span>Present: 1,150</span>
            <span>Absent: 100</span>
          </div>
        </div>

        {/* Today's Schedule */}
        <div className="rounded-xl bg-white p-6 shadow-sm dark:bg-zinc-900">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
            Today&apos;s Schedule
          </h2>

          <div className="mt-5 space-y-4">
            <div className="flex items-center justify-between rounded-lg bg-gray-50 p-4 dark:bg-zinc-800">
              <div>
                <p className="font-medium text-gray-800 dark:text-white">
                  Mathematics
                </p>
                <p className="text-sm text-gray-500">Room 101</p>
              </div>
              <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                8:00 AM
              </span>
            </div>

            <div className="flex items-center justify-between rounded-lg bg-gray-50 p-4 dark:bg-zinc-800">
              <div>
                <p className="font-medium text-gray-800 dark:text-white">
                  Science
                </p>
                <p className="text-sm text-gray-500">Room 203</p>
              </div>
              <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                10:00 AM
              </span>
            </div>

            <div className="flex items-center justify-between rounded-lg bg-gray-50 p-4 dark:bg-zinc-800">
              <div>
                <p className="font-medium text-gray-800 dark:text-white">
                  English
                </p>
                <p className="text-sm text-gray-500">Room 105</p>
              </div>
              <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                1:00 PM
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Events & Announcements */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Upcoming Events */}
        <div className="rounded-xl bg-white p-6 shadow-sm dark:bg-zinc-900">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
            Upcoming Events
          </h2>

          <div className="mt-5 space-y-4">
            {events.map((event) => (
              <div
                key={event.title}
                className="border-b border-gray-100 pb-4 last:border-0 last:pb-0 dark:border-zinc-800"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-medium text-gray-800 dark:text-white">
                      {event.title}
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                      {event.date}
                    </p>
                  </div>

                  <span className="whitespace-nowrap text-sm text-gray-500">
                    {event.time}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Announcements */}
        <div className="rounded-xl bg-white p-6 shadow-sm dark:bg-zinc-900">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
            Recent Announcements
          </h2>

          <div className="mt-5 space-y-3">
            {announcements.map((announcement, index) => (
              <div
                key={index}
                className="rounded-lg bg-gray-50 p-4 text-sm text-gray-600 dark:bg-zinc-800 dark:text-gray-300"
              >
                {announcement}
              </div>
            ))}
          </div>
        </div>
      </div>

      <ChatButton />
    </div>
  );
}

