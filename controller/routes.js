const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/api/workouts", (req,res) => {
    db.Workout.find().then(foundWorkout => {
        res.json(foundWorkout);
        console.log(foundWorkout);
    })
})