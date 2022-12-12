import React from 'react';
import FullCalendar from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import dayGridPlugin from "@fullcalendar/daygrid";
import { useRef } from "react";
import { useEffect, useState } from "react";

function Calendar() {
  const calendarRef = useRef(null);
  const [listOfCourses, setCourses] = useState([]);
  
  useEffect(() => {
    fetch('../api/sections/')
      .then(response => response.json())
      .then(data => {
        setCourses(data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
 
  const events = listOfCourses.map(course => ({

    title: course.coursecode + " Section: " + course.sectionnum,
    daysOfWeek: [1],
    startTime: '08:00',
    startRecur: '2022-12-06',
    endRecur: '2022-12-27',
  }));

  // Handle date clicks by adding a new event
  const handleDateClick = (date, allDay) => {
    // Create a new event on the calendar
    const newEvent = {
      title: 'New event',
      start: date,
      allDay: allDay
    };
  
    // Add the new event to the calendar
    if (calendarRef.current && calendarRef.current.calendar) {
      calendarRef.current.calendar.addEvent(newEvent);
    }
  };

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