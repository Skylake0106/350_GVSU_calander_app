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
        <div>
        <form className={styles.alignCenter}onSubmit={handleSubmit}>
          <div className={styles}>
          <input
            type="text"
            value={inputValue}
            palceholder="Enter Course Code"
            onChange={(event) => setInputValue(event.target.value)}/>
          <button type="submit">Submit</button>
          </div>
          </form>
          <h1></h1>
          
          <div className={styles.grid}>
          {apiResponse.map(courses => (
            <div key={courses.sectionid} className={styles.card}>
                <text className={styles.courseData}>
                  <h1>{courses.coursecode} - {courses.sectionnum}</h1>
                  <h3>Current Professor: {courses.lastname ? <p className={styles.isProf}>{courses.lastname}</p> : <p className={styles.noProf}>NO PROFESSOR</p>}</h3>
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
        </div>
      );
    }

    function changeProfForm() {
      const [courseCode, setCourseCode] = useState("");
      const [sectionNum, setSectionNum] = useState("");
      const [lastName, setLastName] = useState("");
      const [apiResponse, setApiResponse] = useState([]);
    
      const handleSubmit = async (event) => {
        event.preventDefault();
        setApiResponse([]);
        axios.put(`https://apex.oracle.com/pls/apex/facultyschedulerasst/sectiontable/cis/${courseCode}/${sectionNum}`, {lastname: lastName})
        .then(response => response.json())
          .then(data => {
            setApiResponse(data);
          })
        .catch(error => {
            console.log(error);
        });
      };
    
      return (
        <form className={styles.alignCenter}onSubmit={handleSubmit}>
          <input
            type="text"
            value={courseCode}
            placeholder="Course Code"
            onChange={(event) => setCourseCode(event.target.value)}
          />
          <input
            type="text"
            value={sectionNum}
            placeholder="Section Number"
            onChange={(event) => setSectionNum(event.target.value)}
          />
          <input
            type="text"
            value={lastName}
            placeholder="Last Name"
            onChange={(event) => setLastName(event.target.value)}
          />
          <button type="submit">Submit</button>
          <div>
          </div>
        </form>
      );
    }


    return(
            <div className={styles.black}>
            <h1></h1>
                <button className={styles.toProfessorButton}> <Link href="/posts/Professors">Professors Page</Link> </button>
                <button className={styles.toCalendarFromCoursesButton}> <Link href="/">Calendar Page</Link> </button>
                <h1 className={styles.gvsuHeader}>Assign a Professor Here</h1>
                {changeProfForm()}
                <h1></h1>
                <h1 className={styles.gvsuHeader}>Input a CIS Course Code Below!</h1>
                <h4 className={styles.gvsuHeader}>Example: CIS163</h4>
                {courseForm()}
                <h1></h1>
                
                
                
            </div>
    )
}

export default Courses