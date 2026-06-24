"use client";

import {
  Calendar,
  momentLocalizer,
  Views,
  type View,
} from "react-big-calendar";
import moment from "moment";
import { calendarEvents } from "../lib/data";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState } from "react";

const localizer = momentLocalizer(moment);

const BigCalendar = () => {
  const [view, setView] = useState<View>(Views.WORK_WEEK);

  return (
    <Calendar
      localizer={localizer}
      events={calendarEvents}
      startAccessor="start"
      endAccessor="end"
      views={["work_week", "day", "agenda"]}
      view={view}
      onView={(newView) => setView(newView)}
      min={new Date(2026, 0, 1, 8, 0)}
      max={new Date(2026, 0, 1, 17, 0)}
      style={{ height: 500 }}
    />
  );
};

export default BigCalendar;
