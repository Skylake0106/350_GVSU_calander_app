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
    const [courseDepths, setClassDepths] = useState([]);
    const [courseCode, setCourseCode] = useState("");

     useEffect(() => {
        (async () => {
            // fetch the list of professors from the API
            const results = await fetch("/../api/listCourses").then(response => response.json());
            setCourses(results);
            console.log(listOfCourses.length)
        })();
    }, []);

    useEffect(() => {
        (async () => {
            // fetch the depths of 163 for integration purposes
            const results = await fetch("https://apex.oracle.com/pls/apex/facultyschedulerasst/courses/findprof/CIS163").then(response => response.json());
            setClassDepths(results);
        })();
    }, []);

    // fetch the depths of the course based on the course code //implement next
    async function getCourseDepths(courseCode) { 
        console.log(courseCode);
        const results = await fetch("https://apex.oracle.com/pls/apex/facultyschedulerasst/courses/findprof/" + courseCode).then(response => response.json());
        setClassDepths(results);
    }


    return(
            <div className={styles.blue}>
                <h1 className={styles.gvsuHeader}>Choose a Course and Section to Select an Available Professor For the Course.</h1>
                <form>
                <label className={styles.header}>
                Class Code:
                <input type="text" name="courseCode" required id={'course_code'}/>
                </label>
                <input className={styles.submitCourseCodeButton} type="submit" value="Submit" onSubmit={getCourseDepths("163")}/>
                 </form>
                 {listOfCourses.map(courses => (
                    <><text className={styles.alignCenter}> 
                    Course: {courses.courseCode},
                    CourseName: {courses.courseName}, 
                    Section: {courses.sectionNum}, 
                    MeetingDays: {courses.meetDays}
                        <Popup trigger={<button className={styles.asignButton}> Add/Change Course Professor</button>} className={styles.header}>
                        {courseDepths.items.map(course => (
                            <div classname={styles.card} key={course.lastname}>
                                <h3>{course.coursecode} {course.lastname} {course.depthrate}</h3>
                            </div>
                            ))}
                        </Popup></text>
                    </>
                ))}
                <button className={styles.toProfessorButton}> <Link href="/posts/Professors">To Professors page</Link> </button>
                <button className={styles.toCalendarFromCoursesButton}> <Link href="/">To Calendar page</Link> </button>
            </div>
    )
}

export default Courses