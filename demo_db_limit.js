const mysql = require('mysql');

const protocol = 'mysql';
const user = 'w3schools';
const password = 'Lantern_Passenger1_Earthy';
const host = 'localhost';
const port = '3306';
const database = 'mydb';

const connection = mysql.createConnection({
  user,
  password,
  host,
  port,
  database,
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected');

  const sql = 'SELECT * FROM customers LIMIT 5';

  connection.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
  })
})