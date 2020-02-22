const orm = require ('../config/orm')

var burger = {
    all: function(callBack){
        orm.all("burgers", function(result){
            callBack(result);
        })
    },

    create: function(burgerName, callBack){
        orm.create("burgers",["burger_name", "devoured"], [burgerName, false], callBack)
    },

    update: function(id, callBack){
        var condition = "id = " + id;
        orm.update("burgers", { devoured: true}, condition, callBack);
    }
}





// var burgersArr = []

// function guardarburgers() {
//     var boxvalue = document.getElementById('burger-box').value; // confused here
//     burgersArr.push(boxvalue);  
//     console.log(burgersArr);
//   }

//   guardarburgers()

// Also inside burger.js, create the code that will call the ORM functions using burger specific input for the ORM.
// DONE ^?


//tell form where to post to


module.exports = burger