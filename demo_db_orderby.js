const { createConnection } = require('mysql');

const con = createConnection('mysql://w3schools:Lantern_Passenger1_Earthy@localhost:3306/mydb');

con.connect((err) => {
  if (err) throw err;
  console.log('Connected');

  // const sql = 'SELECT * FROM customers ORDER BY name';
  const sql = 'SELECT * FROM  customers ORDER BY address DESC';

  con.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
  });
});