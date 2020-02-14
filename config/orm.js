const connection = require('./connection')


/* In the orm.js file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

selectAll()
insertOne()
updateOne()

Export the ORM object in module.exports.*/

var orm = {
    selectAll (burgersTable, colToSearch, valOfCol) {
      var queryString = 'SELECT * FROM ?? WHERE ?? = ?'
      connection.query(queryString, [burgersTable, colToSearch, valOfCol], function (err, result) {
        if (err) throw err
        console.log(result)
      })
    },

    insertOne (burgersTable, colToSearch, valOfCol) {
        var queryString = 'INSERT INTO * FROM ?? WHERE ?? = ?'
        connection.query(queryString, [burgersTable, colToSearch, valOfCol], function (err, result) {
          if (err) throw err
          console.log(result)
        })
      },

    updateOne(burgersTable, devoured, [id], valOfCol) {
        var queryString = 'UPDATE ?? SET ? = true WHERE ? = ?'
        connection.query(queryString, [burgersTable, devoured, [id], valOfCol ])
    }
}
  

module.exports = orm