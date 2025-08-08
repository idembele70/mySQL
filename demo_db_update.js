const connection = require('mysql').createConnection({
  'user': 'w3schools',
  'password': 'Lantern_Passenger1_Earthy',
  'host': 'localhost',
  'port': '3306',
  'database': 'mydb',
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');

  const sql = 'UPDATE customers SET address = "Canyon 123" WHERE address = "Valley 345"';

  connection.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result.affectedRows + ' record(s) updated');
  });
});