import React from 'react';
import axios from 'axios';
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
        fetch('../api/sections/')
          .then(response => response.json())
          .then(data => {
            setCourses(data);
          })
          .catch(error => {
            console.log(error);
          });
      }, []);

      axios.put('https://apex.oracle.com/pls/apex/facultyschedulerasst/sectiontable/cis/${coursecode}/${sectionnum}, {lastname: ${lastname}}')
.then(response => {
  // handle success
})
.catch(error => {
  // handle error
});
    
    //form to return all the sections of the searched for course
    function courseForm() {
      const [inputValue, setInputValue] = useState("");
      const [apiResponse, setApiResponse] = useState([]);
      const [courseDepths, setCourseDepths] = useState([]);
    
      const handleSubmit = async (event) => {
        event.preventDefault();
        setApiResponse([]);
        setCourseDepths([]);
        const response = await fetch(`http://localhost:3000/api/sections/${inputValue}`);
        const response2 = await fetch(`http://localhost:3000/api/${inputValue}`);
        const data = await response.json();
        const data2 = await response2.json();
        setApiResponse(data);
        setCourseDepths(data2);
        console.log(apiResponse);
      };
    
      return (
        <form className={styles.alignCenter}onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}/>
          <button type="submit">Submit</button>
          <div>
          {apiResponse.map(courses => (
            <div key={courses.sectionid} className={styles.gvsuHeaders}>
                <text className={styles.courseData}>
                  Section ID: {courses.sectionid}
                  --Section: {courses.sectionnum}
                  --Current Asigned Professor: {courses.lastname}
                  {courseDepths.map(depths => (
                    <div>
                      --Avaliable Professor: {depths.lastname}
                      --Course Depth: {depths.depthrate}
                    </div>
                  ))}
                  <br />
                </text>
            </div>
          ))}
          </div>
        </form>
      );
    }


    return(
            <div className={styles.black}>
                <h1 className={styles.gvsuHeader}>Choose a Course and Section to Select an Available Professor For the Course In the form of CISxxx.</h1>
                <h1></h1>
                {courseForm()}
                <button className={styles.toProfessorButton}> <Link href="/posts/Professors">To Professors page</Link> </button>
                <button className={styles.toCalendarFromCoursesButton}> <Link href="/">To Calendar page</Link> </button>
            </div>
    )
}

export default Courses