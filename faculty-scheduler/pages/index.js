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
        (async () => {
            // fetch the list of professors from the API
            const results = await fetch("/api/listProfs").then(response => response.json());
            setProfessors(results);
        })();
    }, []);

    useEffect(() => {
        (async () => {
            // fetch the list of courses from the API
            const results = await fetch("/api/listCourses").then(response => response.json());
            setCourses(results);
        })();
    }, []);

    return (
        <><div className={styles.gvsuHeader}>
            GVSU Faculty Scheduler
        </div><div className={styles.blue}>
                {/*Calls the Calendar constant and builds the calendar*/}
                <Calendar />
                <button className={styles.toProfessorButton}> <Link href="/posts/Professors">To Professors page</Link> </button>
                <button className={styles.toCoursesButton}> <Link href="/posts/Courses">To Courses Page</Link> </button>
            </div></>
    )
}