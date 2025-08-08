const mysql = require('mysql');

const connection = mysql.createConnection('mysql://w3schools:Lantern_Passenger1_Earthy@localhost:3306/mydb');

connection.connect((err) => {
  if (err) throw err;
  console.log('connect');

  // const sql = 'SELECT * FROM customers LIMIT 5 OFFSET 2';
  const sql = 'SELECT * FROM customers LIMIT 1, 5';

  connection.query(sql, (err, result) => {
    if (err) throw err;

    console.log(result);
  });
});