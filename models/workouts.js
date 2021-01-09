const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: () => new Date(),
    },
    exercises: [
        {
            type:{type: String, required: true},
            name:{type: String}, 
            duration:{type: Number}, 
            weight:{type: Number},
            reps:{type: Number},
            sets:{type: Number},
            distance:{type: Number}
        }
    ]
    
});

const workout = mongoose.model("workout", WorkoutSchema);
module.exports = workout;