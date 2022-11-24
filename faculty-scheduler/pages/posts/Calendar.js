import FullCalendar from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import dayGridPlugin from "@fullcalendar/daygrid";
import { useRef } from "react";

const Calendar = () => {
  const calendarRef = useRef(null);
  //returns calendar and assigns attributes
  return (
      <FullCalendar defaultView="dayGridMonth"
      header={{ left: 'prev,next', center: 'title', right: 'dayGridWeek,dayGridMonth' }} //defines the header
      plugins={[timeGridPlugin, dayGridPlugin,interactionPlugin]} //what plugins are included in the full calendar
      edible={true} //allows events to be added and removed from the calendar
      dateClick={function(info) {alert('Clicked on: ' + info.dateStr)}} // allows interaction between cursor and calendar days/times
      eventClick={function(info) {alert('Event:' + info.event.title)}}
      addEvent={function(info) {alert('Clicked on: ' + info.dateStr)}}/> // allows interaction between cursor and events on calendar
  );
};

export default Calendar;