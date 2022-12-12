import React from 'react';
import axios from 'axios';
import 'reactjs-popup/dist/index.css';
import { useEffect, useState } from "react";
import styles from '../../styles/Home.module.css';
import Link from 'next/link';

// Page to display all courses in the database

function AllCourses() {

    //API to get all courses
    const [listOfCourses, setCourses] = useState([]);

    useEffect(() => {
        fetch('../api/courses/')
          .then(response => response.json())
          .then(data => {
            setCourses(data);
          })
          .catch(error => {
            console.log(error);
          });
      }, []);

        //returns all courses
      return (
        <>
        <button className={styles.toCoursesButton}><Link href="/posts/Courses"> To Courses Page</Link></button>
        <div>
            <h1 className={styles.gvsuHeader}>All GVSU CIS Courses!</h1>
            <div className={styles.grid}>
                {listOfCourses.map(course => (
                    <div key={course.coursecode}>
                        <h2 className={styles.card}>{course.coursecode}</h2>
                    </div>
                ))}
            </div>
        </div>
        </>
      )
}

export default AllCourses;
