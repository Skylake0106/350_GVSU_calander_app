import styles from '../styles/Home.module.css';
import React from "react";
import Calendar from "./posts/Calendar";

export default function Home() {

    return (
        <>
        <div className={styles.gvsuHeader}>GVSU Faculty Scheduler</div>
        <div className={styles.black}>
                {/*Calls the Calendar constant and builds the calendar*/}
                <Calendar />        
        </div>
        </>
    )
}