import React from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { useEffect, useState } from "react";
import styles from '../../styles/Home.module.css';
import Link from 'next/link'


function Professors() {
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
    const [showDetails, setShowDetails] = useState(false);
  
    // TODO: set up attributes for courses - change type?
    const [priority, setPriority] = useState(0);
    const [listOfProfessors, setProfessors] = useState([]);
    const [listOfDepths, setDepths] = useState([]);

    useEffect(() => {
      fetch('../api/depths/')
        .then(response => response.json())
        .then(data => {
          setCourses(data);
        })
        .catch(error => {
          console.log(error);
        });
    }, []);


    //return professor based on last name input of professor
    function profForm() {
      const [inputValue, setInputValue] = useState("");
      const [apiResponse, setApiResponse] = useState([]);
    
      const handleSubmit = async (event) => {
        event.preventDefault();
        setApiResponse([]);
        const response = await fetch(`/api/professors/${inputValue}`);
        const data = await response.json();
        setApiResponse(data);
        console.log(apiResponse);
      };
    
      return (
        <form className={styles.alignCenter}onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
          />
          <button type="submit">Submit</button>
          <div>
          {apiResponse.map(professors => (
            <div key={professors.items} className={styles.gvsuHeaders}>
                <text className={styles.courseData}>
                  --Professor: {professors.lastname}
                </text>
            </div>
          ))}
          </div>
        </form>
      );
    }

    return (
        <div className={styles.black}>
            {/* Main content */}
            <main className={styles.main}>
                <h1 className={styles.gvsuHeader}>Welcome To The Professor's Page, Please Input Professor ID To View Data</h1>
                {profForm()}
                {/*buttons to calendar and courses pages*/}
                </main>
        <div className={styles.black}><button className={styles.toCalendarButton}> <Link href="/"> To Calendar Page</Link> </button> 
        <button className={styles.toCoursesButton}><Link href="/posts/Courses"> To Courses Page</Link></button>
        </div>
        </div>
    );
}
export default Professors