const express = require("express")
const app = express()
const mongoose = require("mongoose");
const CourseModel = require('./models/Courses');
const cors = require("cors");
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://skylake0106:skylake_cis350@cis350.lnfxwii.mongodb.net/FacultySchedular?retryWrites=true&w=majority");

app.listen(3001, () => {
console.log("Server is up & running......");
});

app.get("/getCourses", (req, res) => {
    CourseModel.find( {}, (err, result) => {
    if(err) 
    {
        console.log("Something bad has happened: " + err);
    } else 
    {
        console.log("Yay found some result!!");
        res.json(result);
    }
    });
    });

app.post("/createCourses", async (req, res) => {
    const Courses = req.body;
    const newCourse = new CourseModel(Courses);
    await newCourse.save();
        
    res.json(Courses);
});
