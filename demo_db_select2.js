const mysql = require('mysql');

const con = mysql
  .createConnection('mysql://w3schools:Lantern_Passenger1_Earthy@localhost:3306/mydb')


con.connect(function (err) {
  if (err) throw err;
  console.log('Connected!');

  con.query('SELECT name, address FROM customers', (err, results, fields) => {
    if (err) throw err;
    console.log(results);
  });
});
