const mongoose = require("mongoose");
// will likely edit schema fields once ratings chart is available
const DepthSchema = new mongoose.Schema({
    depthRating: {
        type: Number,
        default: 0,
        minimum: 0,
        maximum: 3,
        required: true,
    },
    name : {
        type: String,
        required: true,
        //ref: Professors - name
    },
    courseCode : {
        type: String,
        required: true,
        //ref: Courses - courseCode
    }
});

const DepthModel = mongoose.model("Depth", DepthSchema);
module.exports = DepthModel;