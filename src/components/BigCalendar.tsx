"use client";

import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { calendarEvents } from "../lib/data";
import "react-big-calendar/lib/css/react-big-calendar.css"; //without this, the calendar will not be styled correctly

const localizer = momentLocalizer(moment);

const BigCalendar = () => (
  <div>
    <Calendar
      localizer={localizer}
      events={calendarEvents}
      startAccessor="start"
      endAccessor="end"
      views={["work_week", "day", "agenda"]}
      view="work_week"
      style={{ height: 500 }}
    />
  </div>
);

export default BigCalendar;
