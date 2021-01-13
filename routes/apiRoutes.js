const express = require("express");
// const { db } = require("../models/workouts");
const router = express.Router();
// const Workout = require("../models");
const Workout = require("../models/workouts");

router.get("/api/workouts", (req,res) => {
    Workout.aggregate([
        {$addFields:{totalDuration:{$sum:"$exercises.duration",}}}
    ])
    .then(foundWorkout => {
        res.json(foundWorkout);
        console.log(foundWorkout);
    })
})


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
    Workout.aggregate([
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
});

router.put("/api/workouts/:id", (req, res) => {
    Workout.findByIdAndUpdate(
      req.params.id,
      {$push: {exercises: req.body}}  
    )
    .then(newWorkout => {
        res.json(newWorkout);
    })
    .catch(err => {
        res.json(err)
    })
})



module.exports = router;