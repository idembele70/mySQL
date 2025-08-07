const mysql = require('mysql');

const PROTOCOL = 'mysql';
const USERNAME = 'w3schools';
const PASSWORD = 'Lantern_Passenger1_Earthy';
const HOST = 'localhost';
const PORT = 3306;
const DB = 'mydb';

const connection = mysql.createConnection(`${PROTOCOL}://${USERNAME}:${PASSWORD}@${HOST}:${PORT}/${DB}`);

connection.connect((err) => {
  if(err) throw err
  console.log('Connected to DB mydb!');

  const sql = 'ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY';

  connection.query(sql, (err, result) => {
    if(err) throw err;
    console.log('Table altered');
  })
});