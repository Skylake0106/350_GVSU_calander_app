import React from 'react';
import FullCalendar from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import dayGridPlugin from "@fullcalendar/daygrid";
import { useRef } from "react";


const Calendar = () => {
  const calendarRef = useRef(null);
  
  const events = [
    {
      title: 'Another Event',
      daysOfWeek: [1],
      startRecur: '2022-12-06',
      endRecur: '2022-12-27',
    }
  ];

  // Handle date clicks by adding a new event
  const handleDateClick = (arg) => {
    if (calendarRef.current && calendarRef.current.calendar) {
      calendarRef.current.calendar.addEvent({
        title: 'New event',
        start: arg.date,
        allDay: arg.allDay
      });
    }
  }



  //returns calendar and assigns attributes
  return (
      <FullCalendar ref={calendarRef} defaultView="dayGridMonth"
      header={{ left: 'prev,next', center: 'title', right: 'dayGridWeek,dayGridMonth' }} //defines the header
      plugins={[timeGridPlugin, dayGridPlugin,interactionPlugin]} //what plugins are included in the full calendar
      editable={true} //allows events to be added and removed from the calendar
      dateClick={handleDateClick} // allows interaction between cursor and calendar days/times
      events={events}
    />
  );
};

export default Calendar;