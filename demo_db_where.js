const con = require('mysql').createConnection('mysql://w3schools:Lantern_Passenger1_Earthy@localhost:3306/mydb');

con.connect((err) => {
  if (err) throw err;
  console.log('Connected!');

  const sql = 'SELECT * FROM customers WHERE address = "jean jaures"';

  con.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
  })
})