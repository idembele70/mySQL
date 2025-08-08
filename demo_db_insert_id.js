const mysql = require('mysql');

const PROTOCOL = 'mysql';
const USER = 'w3schools';
const PASSWORD = 'Lantern_Passenger1_Earthy';
const HOST = 'localhost';
const PORT = 3306;
const DB = 'mydb';

const con = mysql.createConnection(`${PROTOCOL}://${USER}:${PASSWORD}@${HOST}:${PORT}/${DB}`);

con.connect((err) => {
  if(err) throw err;
  console.log('Connected');

  const sql = 'INSERT INTO customers (address, name) VALUES ("titi", "Palais de justice")';

  con.query(sql, (err, result) => {
    if (err) throw err;
    console.log('1 record inserted, ID: ', result.insertId);
  });
});