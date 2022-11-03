const mongoose = require("mongoose");
const CourseSchema = new mongoose.Schema({
    sectionID: { // unique courseCode + CRN
        type: String,
        required: true,
    },
    courseCode: { // ex: CIS162
        type: String,
        required: true,
    },
    courseName: { // ex: Computer Science I
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
    partOfTerm: { // ex: 1 - Full Term
        type: String,
        required: true,
    },
    campusLoc: { // ex: (ALL) Allendale
        type: String,
        require: true,
    },
    instructMeth: { // Traditional or Online
        type: String,
        require: true,
    },
    sectionStatus: { // Active or Cancelled
        type: String,
        required: true,
    },
    sectionAttr: { // I-IT, ADC, etc.
        type: String,
    },
    meetDays: { // ex: "M, W, F"
        type: String,
    },
    meetStartTime: { // day & start time of first class
        type: String,
    },
    meetEndTime:{ // day & end time of first class
        type: String,
    },
    meetStartDate: { // first day of semester
        type: Date,
    },
    meetEndDate: { // last day of semester
        type: Date,
    }
});

const CourseModel = mongoose.model("Courses", CourseSchema);

module.exports = CourseModel;
