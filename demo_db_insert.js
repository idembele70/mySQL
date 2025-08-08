const mysql = require('mysql');

const connection = mysql.createConnection('mysql://w3schools:Lantern_Passenger1_Earthy@localhost:3306/mydb');

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected');
 
  const sql = "INSERT INTO customers (name, address) VALUES ('Doe', 'Jean Jaures')";

  connection.query(sql, (err) => {
    if (err) throw err;
    console.log('1 record inserted');
  });
});