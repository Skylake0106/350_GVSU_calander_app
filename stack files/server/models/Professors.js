const mongoose = require("mongoose");
const ProfessorSchema = new mongoose.Schema({
    name: { // format is "First Last"
        type: String,
        required: true,
    },
    lastName: { // last name used for depth rating chart
        type: String,
        required: true,
    },
    email: { // gvsu email on file
        type: String,
        required: true,
    }
});
// database collection name
const ProfessorModel = mongoose.model("Professors", ProfessorSchema);
// make model accessible outside file
module.exports = ProfessorModel;
