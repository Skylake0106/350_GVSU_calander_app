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

    useEffect(() => {
         (async () => {
             // fetch the list of professors from the API
             const results = await fetch("/../api/listCourses").then(response => response.json());
             setCourses(results);
         })();
     }, []);



    return(
            <div className={styles.blue}>
                <h1 className={styles.gvsuHeader}>Choose a Course and Section to Select an Available Professor For the Course.</h1>
                {listOfCourses.map(courses => (
                    <><text className={styles.alignCenter}> 
                    Course: {courses.courseCode},
                    CourseName: {courses.courseName}, 
                    Section: {courses.sectionNum}, 
                    MeetingDays: {courses.meetDays}
                        <Popup trigger={<button className={styles.asignButton}> Add/Change Course Professor</button>} className={styles.header}>
                            {/*Get available professor for the course to include in popup when selecting for course*/}
                            hello
                        </Popup></text>
                    </>
                ))}
                <button className={styles.toProfessorButton}> <Link href="/posts/Professors">To Professors page</Link> </button>
                <button className={styles.toCalendarFromCoursesButton}> <Link href="/">To Calendar page</Link> </button>
            </div>
    )
}

export default Courses