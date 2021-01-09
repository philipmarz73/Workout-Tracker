const express = require("express");
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

module.exports = router;