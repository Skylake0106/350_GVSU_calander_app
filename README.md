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

Or at least this was the initial belief, during the course of the project after learning more about Mongo DB and the nature of the data we were working with, a non-relational database would just not cut it. It was at this point we swapped over to using Oracle as our database solution as well as Oracle Apex. This was a major change for us as we had to learn the Oracle environment from scratch and dip our toes into the enourmous world of relational data. This would leave our tech stack as Next.js being the overall JavaScript framework, Oracle being the database, Node in the backend, and React heading up the front end. 


<p align="center">
  <img width="50%" alt="Architecture Design" src="/Images/architecturepicture.JPG">
</p>

### 3.1 Use Case Diagram
<p align="center">
  <img width="75%" alt="UML class diagram" src="https://github.com/Skylake0106/CIS_Faculty_Scheduling_Assistant/blob/4475cbb5792cfe3b7d98d587a6a248be357db2c9/Images/UML%20use%20case%20update.png">
</p>

### 3.2 Class Diagram
<p align="center">
  <img width="75%" alt="UML class diagram" src="https://github.com/Skylake0106/CIS_Faculty_Scheduling_Assistant/blob/0d7181662128ff3426dc8d2d7544001a40f472a7/Images/UML%20class%20updated.png">
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

### Risks Analysis And Retrospective

1. What were the risks, what were the problems, how did you deal with them during the project?

  A couple of our risks include choosing a project that was so heavily data focused and switching our database service partway through. The main problem we encountered was getting our api requests, after switching to Oracle. In order to Populate our pages we needed api request to function, however, Oracle could not send the data fast enough for the objects to render, causing undefined behavior in our program. We dealt with this by attempting to find a workaround for this issue. To solve this we used axios for out get requests and a python script to parse our data was not necesarry
  
2. What was done and what could have been done better?
  
  There are a lot of things that could have gone better for this project. we started out using a non-relational database in MongoDB, yet after some weeks trying to get that to work we gave up deciding that our data was far too relational for that database. We then moved to using Oracle Apex, which is great for relational data and the database the group had the most experience with using already. In hindsight we should have gotten onto Oracle Apex far sooner as well as deciding on our overall project sooner. We got a late start and forever ended up on the backfoot. 
  
  Next we had to learn a lot about Oracle Apex, which for all those who have used it before knows this was a painful endevor. The oracle documentation leaves a lot to be desired and we spent a lot of time figuring out how to get our data into the database, working like we wanted, and correctly formatted. To this day we still have whitespace where we shouldn't and multiple little annoyances. In hindsight choosing google cloud sql might have been a better choice due to better documentation and support. After getting our data we then used the restful services offered by oracle apex (which took a while to find out existed). These had a number of issues arrise as well in development, as they worked in the browser but were far more picky when it came to being implemented in code. We did get them working however and then managed to get some real progress done on the frontend. With this all taken care of we had the backend essentially finished by connected to oracle and now the frontend just needed to be populated with the data and the CRUD features added to the user interface. 
  
  Overall, we should have started with a relational database model, using google cloud most likely. We also should have taken the time to organize our data better beforehand, as the actual data itself caused a lot of headaches. If we had found our final solutions in the beginnning of the development process we would have had a far better experience and application to show for it.
