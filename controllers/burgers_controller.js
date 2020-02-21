const express = require('express')
const burgers = require('../models/burger.js') 

// define routes

const router = express.Router()

// router.get(express.static(__dirname + '/public')); // for css

// router.get(__dirname + "/public", function(req, res) {
//   burgers.all(function(data) {
//     var burgerObject = {
//       burgers: data
//     };
//     console.log(burgerObject);
//     res.render("index", burgerObject);
//   });
// });



router.get("/", function(req, res){
    res.redirect("/burgers") //automatically returns to index because calls the slash burger route
})

router.get("/burgers", function(req, res){
    burgers.all(function(burgerData){
        res.render("index", {burger_Data: burgerData}) //in handle bar page reference burgerdata as so: burger_Data
    })
})

router.post("/burgers/create", function(req, res){
    console.log(req.body)
    burgers.create(req.body.name, function(result){
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

module.exports = router


