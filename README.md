# CIS 350 Intro to Software Engineering Project
### GVSU College of Computing Faculty Scheduling Assistant
> "Trust me you will not get me excited." -Rahat Rafiq 2022

#### [Jira Board](https://skylerruiter.atlassian.net/jira/software/projects/SEPROJ/boards/4/backlog)
#### [Master Doc](https://docs.google.com/document/d/1HsiiA_qSesVKqVJYQbRfsFRsPfKZgV0dTYukX1p7uEI/edit?usp=sharing)
___
### Project Team
* Skyler R
* Ethan M
* Alana S
___

## 1 Abstract
The primary goal of this project is to increase the efficiency and effectiveness of managing all the data that comes with scheduling 47 professors for classes in the GVSU College of Computing. 

The process is already to the point where the first 90% of the schedule is quick and effective, with little need for change. The last 10% is where the vast majority of time is spent resolving teaching conflicts, course requirements, overload requests, and other finalizing tasks. 

Our specific solution is twofold:  
1) Provide a better visual representation of the schedule by more clearly displaying information which will improve the decision-making process
2) Automatically generate suggestions when attempting to schedule a course. Providing a list of suggestions takes a lot of manual searching of an entire database out of the equation

The scope of the project will be determined as it is developed, as the sheer quantity of improvements to a system like this are outside the scope of this project. For example, there could be automatic detection of double booked classrooms, teaching conflicts, credit hour needs unmet, etc. The current overall goal, however, is to create a web app that can supplement some parts of the schedule creating process.

___

## 2 Introduction
Currently, there are three main tools used to create the course schedule: 
1) A document that allows professors to express their willingness to teach a certain course, giving each course a number from 0-3. With 0 being a course they are unable to teach and a 3 meaning they would be able to teach it whenever and with confidence. 
2) Another document that has all of the courses with their information such as time, room, section number, and professor
3) A final document that visualizes the data into a large scrollable table

There are a few constraints that determine if a professor is eligible to be assigned a course:
* Their depth rating (0-3)
* Their current credit hours (may need overload permission)
* Personal/Medical/Administrative time conflicts
* If they must teach a certain course
* Other course conflicts (already teaching another course at the same time)

Knowing the workflow for creating the schedule and the tools used to do it, we determined the optimal way to streamline the process is to be able to visualize the data better than a simple HTML table, and to be able to provide smart suggestions for potential professors to teach a specific course. 

These are lofty goals, but we will start with the most time-saving measures and build up from there. We will need to create a very solid database for this information and write complex search queries to analyze the data. We will need to create an attractive front end to display the data effectively, and finally we need smart algorithms to determine potential professors to match a given course. 


___

## 3 Architectural Design
We decided that we would stick with the tried and true MERN tech stack with Next.js as our React framework. This is because MERN is a tech stack well understood by the project advisor (Professor Rafiq), and many others are using it and could help with problem solving. We also realize the potential benefits of using MERN such as the ease of use that comes with MongoDB, and the nice relationshop between having JavaScript for both ends of development. We believe that a web application is the best choice for this project because of the need to visual a large spread of information at once. Additionally, the goals mentioned above can streamline the scheduling process by decreasing the need to regularly toggle between the three tools currently in use to verify information.


<p align="center">
  <img width="50%" alt="Architecture Design" src="/Images/architecturepicture.JPG">
</p>

### 3.1 Use Case Diagram
<p align="center">
  <img width="75%" alt="UML class diagram" src="https://github.com/Skylake0106/CIS_Faculty_Scheduling_Assistant/blob/4475cbb5792cfe3b7d98d587a6a248be357db2c9/Images/UML%20use%20case%20update.png">
</p>

### 3.2 Class Diagram
<p align="center">
  <img width="75%" alt="UML class diagram" src="https://user-images.githubusercontent.com/94251267/193959366-363cb30a-a0aa-470e-bcbc-f43adebb5b1c.png">
</p>

### 3.3 Sequence Diagram
<p align="center">
  <img width="75%" alt="UML class diagram" src="https://github.com/Skylake0106/CIS_Faculty_Scheduling_Assistant/blob/ca3b708848673faf28d74d3cd9c1054a40c58fc6/Images/UML%20sequence-%20faculty%20assignment.png">
</p>

___

## 4 UI Designs

### 4.1 Home Screen
<p align="center">
  <img width="75%" alt="Screen Shot 2022-10-02 at 6 25 57 PM" src="https://user-images.githubusercontent.com/89789705/193479490-1208a3af-f582-437b-b50e-0a9dd18e206b.png">
</p>

### 4.2 Main Screen
<p align="center">
<img width="75%" alt="Screen Shot 2022-10-06 at 8 18 27 PM" src="https://user-images.githubusercontent.com/89789705/194440888-c78757e4-5b83-40aa-b1d9-0acad4564116.png">
</p>


### 4.3 Constraint Screen
<p align="center">
  <img width="75%" alt="Screen Shot 2022-10-02 at 5 54 34 PM" src="https://user-images.githubusercontent.com/89789705/193479539-5ef80d7d-301f-4990-91f4-4ba7cd871cc9.jpeg">
</p>
