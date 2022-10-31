import "./App.css";
import { useState, useEffect } from "react";
import Axios from "axios";

function App() {
  const [listOfCourses, setListOfCourses] = useState([]);

  const [sectionID, setSectionID] = useState("");
  const [courseCode, setCourseCode] = useState("");
  const [courseName, setCourseName] = useState("");
  const [sectionNum, setSectionNum] = useState("");
  const [creditHrs, setCreditHrs] = useState("");
  const [partOfTerm, setPartOfTerm] = useState("");
  const [campusLoc, setCampusLoc] = useState("");
  const [instructMeth, setInstructMeth] = useState("");
  const [sectionStatus, setSectionStatus] = useState("");
  const [sectionAttr, setSectionAttr] = useState("");
  const [meetDays, setMeetDays] = useState("");
  const [meetStartTime, setMeetStartTime] = useState("");
  const [meetEndTime, setMeetEndTime] = useState("");
  const [meetStartDate, setMeetStartDate] = useState("");
  const [meetEndDate, setMeetEndDate] = useState("");
  // TODO: set up attributes for courses - change type?
  const [priority, setPriority] = useState(0);

  useEffect(() => {
    Axios.get("http://localhost:3001/getCourses").then((response) => {
      setListOfCourses(response.data);
    });
  }, []);

  const createCourses = () => {
    Axios.post("http://localhost:3001/createCourses", {
      sectionID,
      courseCode,
      courseName,
      sectionNum,
      creditHrs,
      partOfTerm,
      campusLoc,
      instructMeth,
      sectionStatus,
      sectionAttr,
      meetDays,
      meetStartTime,
      meetEndTime,
      meetStartDate,
      meetEndDate,
    }).then((response) => {
      setListOfCourses([
        ...listOfCourses,
        {
          sectionID,
          courseCode,
          courseName,
          sectionNum,
          creditHrs,
          partOfTerm,
          campusLoc,
          instructMeth,
          sectionStatus,
          sectionAttr,
          meetDays,
          meetStartTime,
          meetEndTime,
          meetStartDate,
          meetEndDate,
        },
      ]);
    });
  };

  return (
    <div className="App">
      <div className="CoursesDisplay">
        {listOfCourses.map((Courses) => {
          return (
            <div>
              <h1>sectionID{Courses.sectionID}</h1>
              <h1>courseCode{Courses.courseCode}</h1>
              <h1>courseName{Courses.courseName}</h1>
              <h1>sectionNum{Courses.sectionNum}</h1>
              <h1>creditHrs{Courses.creditHrs}</h1>
              <h1>partOfTerm{Courses.partOfTerm}</h1>
              <h1>campusLoc{Courses.campusLoc}</h1>
              <h1>instructMeth{Courses.instructMeth}</h1>
              <h1>sectionStatus{Courses.sectionStatus}</h1>
              <h1>sectionAttr{Courses.sectionAttr}</h1>
              <h1>meetDays{Courses.meetDays}</h1>
              <h1>meetStartTime{Courses.meetStartTime}</h1>
              <h1>meetEndTime{Courses.meetEndTime}</h1>
              <h1>meetStartDate{Courses.meetStartDate}</h1>
              <h1>meetEndDate{Courses.meet.meetEndDate}</h1>
            </div>
          );
        })}
        <div></div>
        <input
          type="text"
          placeholder="Section ID..."
          onChange={(event) => {
            setSectionID(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Course Code..."
          onChange={(event) => {
            setCourseCode(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Course Name..."
          onChange={(event) => {
            setCourseName(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Section Number..."
          onChange={(event) => {
            setSectionNum(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Credit Hours..."
          onChange={(event) => {
            setCreditHrs(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Part of Term..."
          onChange={(event) => {
            setPartOfTerm(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Campus Location..."
          onChange={(event) => {
            setCampusLoc(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Instructional Method..."
          onChange={(event) => {
            setInstructMeth(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Section Status..."
          onChange={(event) => {
            setSectionStatus(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Section Attribute..."
          onChange={(event) => {
            setSectionAttr(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Meeting Days..."
          onChange={(event) => {
            setMeetDays(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Start Time..."
          onChange={(event) => {
            setMeetStartTime(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="End Time..."
          onChange={(event) => {
            setMeetEndTime(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Starting Date..."
          onChange={(event) => {
            setMeetStartDate(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Ending Date..."
          onChange={(event) => {
            setMeetEndDate(event.target.value);
          }}
        />
        <button onClick={createCourses}> Create Course </button>
      </div>
    </div>
  );
}

export default App;