import React from 'react';
import axios from 'axios';
import 'reactjs-popup/dist/index.css';
import { useEffect, useState } from "react";
import styles from '../../styles/Home.module.css';
import Link from 'next/link';

// Courses page
function Courses() {
    const [listOfCourses, setCourses] = useState([]);
    
    // API gets all sections from sectiontable
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
    
    //form to return all the sections of the searched for course
    function courseForm() {
      const [inputValue, setInputValue] = useState("");
      const [apiResponse, setApiResponse] = useState([]);
      const [courseDepths, setCourseDepths] = useState([]);
    
      // API call to get all sections of a course and the profs who can teach them
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
    
      // returns form
      return (
        <div>

        {/* Form for entering a course */}
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
          

          {/* Map all sections of the course to a card with the professors and dispaly it */}
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

    //form to update a section with a new professor
    function changeProfForm() {
      const [courseCode, setCourseCode] = useState("");
      const [sectionNum, setSectionNum] = useState("");
      const [lastName, setLastName] = useState("");
      const [apiResponse, setApiResponse] = useState([]);
    
      // API call to update a section with a new professor
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
    
      // returns form
      return (
        <form className={styles.alignCenter}onSubmit={handleSubmit}>
          
          {/* Input field for course code */}
          <input
            type="text"
            value={courseCode}
            placeholder="Course Code"
            onChange={(event) => setCourseCode(event.target.value)}
          />

          {/* input field for section num */}
          <input
            type="text"
            value={sectionNum}
            placeholder="Section Number"
            onChange={(event) => setSectionNum(event.target.value)}
          />

          {/* input field for last name */}
          <input
            type="text"
            value={lastName}
            placeholder="Last Name"
            onChange={(event) => setLastName(event.target.value)}
          />

          {/* submit button */}
          <button type="submit">Submit</button>

        </form>
      );
    }

    // returns the page
    return(
          <div className={styles.black}>
              {/* Buttons to go to other pages */}
              <h1></h1>
              <button className={styles.toProfessorButton}> <Link href="/posts/Professors">Professors Page</Link> </button>
              <button className={styles.toCalendarFromCoursesButton}> <Link href="/">Calendar Page</Link> </button>

              {/* Form to assign a professor to a course */}
              <h1 className={styles.gvsuHeader}>Assign a Professor Here</h1>
              {changeProfForm()}
              <h1></h1>

              {/* Form to search for a course */}
              <h1 className={styles.gvsuHeader}>Input a CIS Course Code Below!</h1>
              <h4 className={styles.gvsuHeader}>Example: CIS163</h4>
              {courseForm()}
              <h1></h1>
          </div>
    )
}

export default Courses