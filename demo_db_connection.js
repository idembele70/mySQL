const mysql = require('mysql');

const con = mysql.createConnection({
  host: 'localhost',
  user: 'w3schools',
  password: 'Lantern_Passenger1_Earthy'
});

con.connect(function(err) {
  if(err) throw err;
  console.log('Connected!');
  con.query(sql, function(err, result) {
    if(err) throw err;
    console.log('Result: ' + result);
  })
})