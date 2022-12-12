import React from 'react'
import 'reactjs-popup/dist/index.css';
import { useEffect, useState } from "react";
import styles from '../../styles/Home.module.css';
import Link from 'next/link'

// Professors page
function Professors() {
    
    // API gets all professors from depth table
    useEffect(() => {
      fetch('../api/depths/')
        .then(response => response.json())
        .then(data => {
          setCourses(data);
        })
        .catch(error => {
          console.log(error);
        });
    }, []);


    //return professor based on last name input of professor
    function profForm() {
      const [inputValue, setInputValue] = useState("");
      const [apiResponse, setApiResponse] = useState([]);
    
      const handleSubmit = async (event) => {
        event.preventDefault();
        setApiResponse([]);
        const response = await fetch(`/api/professors/${inputValue}`);
        const data = await response.json();
        setApiResponse(data);
        console.log(apiResponse);
      };
    
      return (
        <div>
          {/* Form for inputting a professors id */}
          <form className={styles.alignCenter}onSubmit={handleSubmit}>
            <input
              type="text"
              value={inputValue}
              onChange={(event) => setInputValue(event.target.value)}
            />
            <button type="submit">Submit</button>
          </form>

          {/* Text for displaying the professor */}
          <div>
            {apiResponse.map(professors => (
              <div key={professors.items} className={styles.gvsuHeaders}>
                <text className={styles.courseData}>
                  <h1>Professor: {professors.lastname}</h1>
                </text>
              </div>
            ))}
          </div>
        </div>
      );
    }

    return (
      <div>
        {/* Buttons to go to other pages */}
        <div className={styles.black}>
          <button className={styles.toCalendarButton}> <Link href="/"> To Calendar Page</Link> </button>
        </div>
        <button className={styles.toCoursesButton}><Link href="/posts/Courses"> To Courses Page</Link></button>

          {/* Main content */}
          <div className={styles.black}>
            <main className={styles.main}>
              <h1 className={styles.gvsuHeader}>Welcome To The Professor's Page, Please Input Professor ID To View Data</h1>
              {profForm()}
            </main>
          </div>
      </div>
    );
}
export default Professors