const con = require('mysql').createConnection({
  host: 'localhost',
  port: '3306',
  user: 'w3schools',
  password:'Lantern_Passenger1_Earthy',
  database: 'mydb',
});

con.connect((err) => {
  if (err) throw err;
  console.log('Connected');

  const sql = 'DELETE FROM customers WHERE address  = ? AND name = ?';
  const address = 'Apple st 652';
  const name = 'Amy';

  con.query(sql, [address, name], (err, result) => {
    if (err) throw err;
    console.log('Number of records deleted: ' + result.affectedRows);
  })
});