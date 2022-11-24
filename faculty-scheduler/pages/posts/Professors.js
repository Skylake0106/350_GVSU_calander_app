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
      (async () => {
          // fetch the list of professors from the API
          const results = await fetch("/../api/listProfs").then(response => response.json());
          setProfessors(results);
          console.log(listOfProfessors.legnth)
      })();
  }, []);

   useEffect(() => {
        (async () => {
            // fetch the list of depths from the API
            const results = await fetch("/../api/listDepths").then(response => response.json());
            setDepths(results);
            console.log(listOfDepths.length);
        })();
    }, []);


    return (
        <div>
            {/* Main content */}
            <main className={styles.main}>
                <h1 className={styles.gvsuHeader}>Welcome To The Professor's Page, Please Type Your Name</h1>
                <form>
                <label className={styles.shiftLeft}>
                First Name:
                <input type="text" name="firstName" required />
                </label>
                <label className={styles.shiftRight}>
                Last Name:
                <input type="text" name="lastName" required />
                </label>
                <input className={styles.submitNameButton} type="submit" value="Submit" />
                 </form>
                <div className={styles.grid}>
                    {/* Lists out all professors by their name and maps a popup with all courses codes, doesnt list all sections Hide this later*/}
                    {listOfProfessors.map(professors => (
                        <div className={styles.card} key={professors._id}>
                                <Popup trigger={<button className={styles.card}> {professors.name} </button>}>
                                  {/* maps out a popup for each professor if they have a current depth rating for a course still need to figure out this, probably create a new list api*/}
                                    {listOfDepths.map(depths => (
                                      <div key = {depths._id}> <text className={styles.courses}> {depths.courseCode} {depths.Kurmas}</text></div>
                                    ))}
                                </Popup>
                        </div>
                    ))}
                </div>
        {/*butttons to calendar and courses pages*/}
            </main>
        <div className={styles.blue}><button className={styles.toCalendarButton}> <Link href="/"> To Calendar Page</Link> </button> 
        <button className={styles.toCoursesButton}><Link href="/posts/Courses"> To Courses Page</Link></button>
        </div>
        </div>
    );
}
export default Professors