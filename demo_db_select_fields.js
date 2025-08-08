const con = require('mysql').createConnection('mysql://w3schools:Lantern_Passenger1_Earthy@localhost:3306/mydb');

con.connect((err) => {
  if (err) throw err;
  console.log('Connected!');

  const sql = "SELECT name, address FROM customers";

  con.query(sql, (err, results, fields) => {
    if (err) throw err;
    console.log(fields[1].name);
  })
})