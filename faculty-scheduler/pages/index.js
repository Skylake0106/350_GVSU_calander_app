import { useEffect, useState } from "react";
import styles from '../styles/Home.module.css';
import React from "react";
import Calendar from "./posts/Calendar";
import Link from 'next/link';

export default function Home() {
  // move to a getstaticprops function?  https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation
    
    // useState hooks for use later in page
    const [listOfProfessors, setProfessors] = useState([]);
    const [listOfCourses, setCourses] = useState([]);

    // useEffect hook to run when page loads

    useEffect(() => {
        fetch('/api/listCourses')
          .then(response => response.json())
          .then(data => {
            setCourses(data);
          })
          .catch(error => {
            console.log(error);
          });
      }, []);

    return (
        <><div className={styles.gvsuHeader}>
            GVSU Faculty Scheduler
        </div><div className={styles.black}>
                {/*Calls the Calendar constant and builds the calendar*/}
                <Calendar />
                <button className={styles.toProfessorButton}> <Link href="/posts/Professors">To Professors page</Link> </button>
                <button className={styles.toCoursesButton}> <Link href="/posts/Courses">To Courses Page</Link> </button>
            </div></>
    )
}