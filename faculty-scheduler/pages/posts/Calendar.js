import React from 'react';
import FullCalendar from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import dayGridPlugin from "@fullcalendar/daygrid";
import styles from '../../styles/Home.module.css';
import { useRef } from "react";
import { useEffect, useState } from "react";
import Link from 'next/link';

function Calendar() {
  const calendarRef = useRef(null);
  const [listOfCourses, setCourses] = useState([]);

  function courseViewForm() {
    const [inputValue, setInputValue] = useState("");
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      setCourses([]);
      const response = await fetch(`/api/sections/${inputValue}`);
      const data = await response.json();
      setCourses(data);
    };
  
    return (
      <form className={styles.alignCenter}onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          placeholder="CISXXX"
          onChange={(event) => setInputValue(event.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
 
  const events = listOfCourses.map(course => ({
    title: course.coursecode + " Section: " + course.sectionnum,
    daysOfWeek: weekToNum(course.meetdays),
    startTime: course.meetstarttime,
    endTime: course.meetendtime,
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
    <>
      <button className={styles.toProfessorButton}> <Link href="/posts/Professors">Professors Page</Link> </button>
      <button className={styles.toCoursesButton}><Link href="/posts/Courses"> To Courses Page</Link></button>
      <h1 className={styles.gvsuHeader}>Calander (Insert Course Code Below)</h1>
      <div>{courseViewForm()}</div><FullCalendar ref={calendarRef} defaultView="dayGridMonth"
      header={{ left: 'prev,next', center: 'title', right: 'dayGridWeek,dayGridMonth' }} //defines the header
      plugins={[timeGridPlugin, dayGridPlugin, interactionPlugin]} //what plugins are included in the full calendar
      editable={true} //allows events to be added and removed from the calendar
      dateClick={handleDateClick} // allows interaction between cursor and calendar days/times
      events={events} />
    </>
  );
};

function weekToNum(week) {
  // create an array to hold the days of the week
  var days = new Array();

  // go through week which is a comma delimited string and assign each value to a number with Sunday being 0
  for (var i = 0; i < week.length; i++) {
    switch (week[i]) {
      case "M":
        days.push(1);
        break;
      case "T":
        days.push(2);
        break;
      case "W":
        days.push(3);
        break;
      case "R":
        days.push(4);
        break;
      case "F":
        days.push(5);
        break;
      case "S":
        days.push(6);
        break;
      case "U":
        days.push(0);
        break;
    }
  }
  console.log(days)
  // return the array of days
  return days;
}


export default Calendar;