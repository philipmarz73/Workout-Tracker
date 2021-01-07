const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const WorkoutSchema = new Schema({
    type: String,
    name: String,
    duration: String,
    weight: String,
    reps: String,
    sets: String,
    distance: String,
});

const workout = mongoose.model("workout", WorkoutSchema);
module.exports = workout;