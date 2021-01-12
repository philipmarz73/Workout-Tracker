const express = require("express");
const { db } = require("../models/workouts");
const router = express.Router();
// const Workout = require("../models");
const Workout = require("../models/workouts");

router.get("/api/workouts", (req,res) => {
    Workout.find().then(foundWorkout => {
        res.json(foundWorkout);
        console.log(foundWorkout);
    })
});

router.post("/api/workouts", (req,res) => {
    Workout.create({}).then(foundWorkout => {
        res.json(foundWorkout);
        console.log(foundWorkout);
    }).catch(err => {
        res.json (err)
    })
});
// get workout and add exercise duration
router.get("/api/workouts/range", (req,res) => {
    db.aggregate([
        {$addFields:{totalDuration:{$sum:"$exercises.duration",}}}
    ])
    .sort({_id:-1})
    .limit(7)
    .then(workouts => {
        res.json(workouts)
    })
    .catch(err => {
        res.json(err)
    })
    })
});

module.exports = router;