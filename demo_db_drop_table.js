const { createConnection } = require('mysql');

const con = createConnection('mysql://w3schools:Lantern_Passenger1_Earthy@localhost/mydb');

con.connect((err) => {
  if (err) throw err;
  console.log('Connected');

  const sql = 'DROP TABLE customers';
  con.query(sql, (err, result) => {
    if (err) throw err;
    console.log('Table deleted');
  });
});