const express = require('express')
const burgers = require('../models/burger') 

// define routes

const router = express.Router()

router.get("/", function(req, res){
    res.redirect("/burgers") //automatically returns to index because calls the slash burger route
})

router.get("/burgers", function(req, res){
    burgers.all(function(burgerData){
        res.render("index", {burger_Data: burgerData}) //in handle bar page reference burgerdata as so: burger_Data
    })
})

router.post("/burgers/create", function(req, res){
    burgers.create(res.body.burgerName, function(result){
        console.log(result)
        res.redirect("/burgers")
    }) // in public folder have js folder taht calls these routes and then creates the burger
})

router.put("/burgers/:id", function(req, res){
    burgers.update(res.params.id, function(result){
        console.log(result)
        res.sendStatus(200)
    })
})

