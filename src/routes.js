const express = require('express');
const routes = express.Router();

const ExerciseController = require('./controllers/exercisesController.json');
routes.get('/',(req,res)=>{
    res.send("Main page");
})
routes.get("/api",(req,res)=>{
    res.send(ExerciseController);
})


module.exports = routes;