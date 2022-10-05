# CIS 350 Intro to Software Engineering Project
## GVSU College of Computing Professor Course Scheduler
> "Trust me you will not get me excited." -Rahat Rafiq 2022
___

#### [Jira Board](https://skylerruiter.atlassian.net/jira/software/projects/SEPROJ/boards/4/backlog)
#### [Master Doc](https://docs.google.com/document/d/1HsiiA_qSesVKqVJYQbRfsFRsPfKZgV0dTYukX1p7uEI/edit?usp=sharing)

___

## Made By
* Skyler R
* Ethan M
* Alana S

___

### Introduction
> The GVSU CIS College doesn't have a fully efficient method for scheduling classes based on the many constraints present. While the primary method is currently around 90% efficient there are still methods available to improve the process and make it more streamlined.

### Abstract 
>  Faculty currently assign depth values to courses they can readily teach, teach, or teach following discussion; assigned values are 3, 2, & 1 respectively. Once these are completed, any courses not given a number will be left blank. 

>  When the schedule administrator starts building a semester calendar, they can select a course from the course list which would automatically populate the list of faculty that assigned that course with a level 3 depth, then level 2. The calendar is then filled in this manner, until all courses are assigned to professors. 

>  Faculty can submit constraint information to the scheduler administrator. These can be medical issues, personal, or administrative responsibilities that may conflict with teaching a course. Additional faculty attributes will also help streamline this process. 
>* 'Must Teach' course; an example is that one professor always teaches CIS290, CIS160-05, etc.
>* Tenured or affiliate; generate default credit limits for teaching, when a professor reaches that limit, their name can be listed as an option, but grayed- out so administrator knows an adjustment is needed 


> Conflicts in scheduling may include, but are not limited to: 
>* when professor has reached their credit limits of teaching
>* no professor is available for a class 
>* constraint conflicts with course availability

>> When conflicts arise, administrator can contact faculty for:
>>* credit hour modifications
>>* assess availability of professors that listed the course as a level 1




## Architectural Design

![UML Use Case](https://github.com/Skylake0106/350_GVSU_calander_app/blob/e852384296b769ada0bd0baa15627da41162c5ba/UML%20use%20case.png)
### Class Diagram

<img width="786" alt="UML class diagram" src="https://user-images.githubusercontent.com/94251267/193959366-363cb30a-a0aa-470e-bcbc-f43adebb5b1c.png">

### Sequence Diagram

![UML Sequence Diagram](https://github.com/Skylake0106/350_GVSU_calander_app/blob/e852384296b769ada0bd0baa15627da41162c5ba/UML%20sequence.png)

___

## UI Designs

**Home Screen**

<img width="615" alt="Screen Shot 2022-10-02 at 6 25 57 PM" src="https://user-images.githubusercontent.com/89789705/193479490-1208a3af-f582-437b-b50e-0a9dd18e206b.png">

**Main Screen**

<img width="612" alt="Screen Shot 2022-10-02 at 5 54 34 PM" src="https://user-images.githubusercontent.com/89789705/193479526-2b2e87cf-7d78-4604-8536-ba3b11f9c4a2.png">

**Constraint Screen**

![Screen-Shot-2022-10-02-at-5 54 49-PM](https://user-images.githubusercontent.com/89789705/193479539-5ef80d7d-301f-4990-91f4-4ba7cd871cc9.jpeg)

