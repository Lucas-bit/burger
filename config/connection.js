var mysql = require("mysql");


var connection;




var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Penguinpoo!7",
    database: "burgers_db"
  });
  
 

  if(process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
  } else {
    connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'Penguinpoo!7',
      database: 'burgers_db'
    });
  };

module.exports = connection
