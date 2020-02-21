DROP DATABASE IF EXISTS burgers_db; 
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
id INT NOT NULL AUTO_INCREMENT, 
burger_name VARCHAR(30) NOT NULL,
devoured BOOLEAN,
PRIMARY KEY (id)
);


USE burgers_db;
INSERT INTO burgers(burger_name, devoured)
VALUES ("Vegan Burger", false), ("Chicken Burger", true), ("Beast Burger", true);

SELECT * FROM burgers


