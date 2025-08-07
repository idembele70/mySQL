const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'w3schools',
  password: 'Lantern_Passenger1_Earthy'
})

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
  connection.query('CREATE DATABASE mydb', function (err, result) {
    if (err) throw err;
    console.log('Database created');
  })
})