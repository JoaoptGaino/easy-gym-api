const express = require('express');
const routes = express.Router();

const ExerciseController = require('./controllers/exercisesController.json');
const DaysController = require('./controllers/daysController.json');
routes.get('/',(req,res)=>{
    res.send("Main page");
})
routes.get("/api/exercises",(req,res)=>{
    res.send(ExerciseController);
})
routes.get("/api/days",(req,res)=>{
    res.send(DaysController);
})


module.exports = routes;