const mongoose = require("mongoose");
const ProfessorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    }
});
// database collection name
const ProfessorModel = mongoose.model("Professors", ProfessorSchema);
// make model accessible outside file
module.exports = ProfessorModel;