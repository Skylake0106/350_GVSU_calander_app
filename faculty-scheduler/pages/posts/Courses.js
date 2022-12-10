import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { useEffect, useState } from "react";
import styles from '../../styles/Home.module.css';
import {table} from 'table';
import Link from 'next/link';
import { StyleRegistry } from 'styled-jsx';

function Courses() {
    const [listOfCourses, setCourses] = useState([]);
    const [courseDepths, setCourseDepths] = useState([]);
    const [courseCode, setCourseCode] = useState("");
    

    useEffect(() => {
        fetch('../api/listCourses')
          .then(response => response.json())
          .then(data => {
            setCourses(data);
          })
          .catch(error => {
            console.log(error);
          });
      }, []);
    

    /* fetch the depths of the course based on the course code //implement next
    useEffect(() => {
        (async () => {
            // fetch the depths of 163 for integration purposes
            const results = await fetch("https://apex.oracle.com/pls/apex/facultyschedulerasst/courses/faculty/").then(response => response.json());
            setCourseDepths(results);
            console.log(courseDepths.length);
        })();
    }, []);
    */


    return(
            <div className={styles.black}>
                <h1 className={styles.gvsuHeader}>Choose a Course and Section to Select an Available Professor For the Course.</h1>
                <form>
                <label className={styles.header}>
                Class Code:
                <input type="text" name="courseCode" required id={'course_code'}/>
                </label>
                <input className={styles.submitCourseCodeButton} type="submit" value="Submit" />
                 </form>
                 {/* Lists out all courses by their name and maps a popup with all courses codes, doesnt list all sections Hide this later*/}
                 {listOfCourses.map(courses => (
                    <div key={courses.items} > 
                    <text>
                    Course: {courses.coursecode},
                    CourseName: {courses.coursename}, 
                    Section: {courses.credithours}
                    </text>
                    </div>
                    ))}
                <button className={styles.toProfessorButton}> <Link href="/posts/Professors">To Professors page</Link> </button>
                <button className={styles.toCalendarFromCoursesButton}> <Link href="/">To Calendar page</Link> </button>
            </div>
    )
}

export default Courses