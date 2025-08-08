const mysql = require('mysql');

const con = mysql.createConnection({
  host: 'localhost',
  port: '3306',
  user: 'w3schools',
  password: 'Lantern_Passenger1_Earthy',
  database: 'mydb',
});

con.connect(function(err) {
  if (err) throw err;
  console.log('Connected');

  con.query('SELECT * FROM customers', function (err, result, fields){
    if(err) throw err;
    console.log(result);
  });
});