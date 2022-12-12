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
        const response = await fetch(`/api/sections/${inputValue}`);
        const response2 = await fetch(`/api/${inputValue}`);
        const data = await response.json();
        const data2 = await response2.json();
        setApiResponse(data);
        setCourseDepths(data2);
        console.log(apiResponse);
      };
    
      return (
        <form className={styles.alignCenter}onSubmit={handleSubmit}>
          <div className={styles}>
          <input
            type="text"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}/>
          <button type="submit">Submit</button>
          </div>
          
          <div className={styles.grid}>
          {apiResponse.map(courses => (
            <div key={courses.sectionid} className={styles.card}>
                <text className={styles.courseData}>
                  <h1>{courses.coursecode} - {courses.sectionnum}</h1>
                  <h3>Current Professor: {courses.lastname}</h3>
                  <p>Available Professors:</p>
                  {courseDepths.map(depths => (
                    <ul>
                      <li>{depths.lastname}   -   {depths.depthrate}</li>
                    </ul>
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
            <h1></h1>
                <button className={styles.toProfessorButton}> <Link href="/posts/Professors">Professors Page</Link> </button>
                <button className={styles.toCalendarFromCoursesButton}> <Link href="/">Calendar Page</Link> </button>
                <h1 className={styles.gvsuHeader}>Input a CIS Course Code Below!</h1>
                <h4 className={styles.gvsuHeader}>Example: CIS163</h4>
                <h1></h1>
                {courseForm()}
                
            </div>
    )
}

export default Courses