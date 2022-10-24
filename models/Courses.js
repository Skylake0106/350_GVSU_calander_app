const mongoose = require("mongoose");
const CourseSchema = new mongoose.Schema({
    sectionID: {
        type: String,
        required: true,
    },
    courseCode: {
        type: String,
        required: true,
    },
    courseName: {
        type: String,
        required: true,
    },
    sectionNum: {
        type: Number,
        required: true,
    },
    creditHrs: {
        type: Number, 
        reuired: true,
    }, 
    partOfTerm: {
        type: String,
        required: true,
    },
    campusLoc: {
        type: String,
        require: true,
    },
    instructMeth: {
        type: String,
        require: true,
    },
    sectionStatus: {
        // changed this to a String for the csv import into Mongo
        type: String,
        required: true,
    },
    sectionAttr: {
        type: String,
        required: true,
    },
    meetDays: {
        type: String,
        required: true,
    },
    meetStartTime: {
        type: String,
        required: true,
    },
    meetEndTime:{
        type: String,
        required: true,
    },
    meetStartDate: {
        type: Date,
        required: true,
    },
    meetEndDate: {
        type: Date,
        required: true,
    }
});

// database collection name
const CourseModel = mongoose.model("Courses", CourseSchema);
// make model accessible outside file
module.exports = CourseModel;