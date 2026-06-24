"use client";

import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import { calendarEvents } from "../lib/data";
import "react-big-calendar/lib/css/react-big-calendar.css"; //without this, the calendar will not be styled correctly
import { useState } from "react";

const localizer = momentLocalizer(moment);

const BigCalendar = () => {
  const [view, setView] = useState<view>(Views.WORK_WEEK);
  return (
    <Calendar
      localizer={localizer}
      events={calendarEvents}
      startAccessor="start"
      endAccessor="end"
      views={["work_week", "day", "agenda"]}
      view={view}
      onView={(newView) => setView(newView)}
      style={{ height: 500 }}
    />
  );
};

export default BigCalendar;
