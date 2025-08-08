const con = require('mysql').createConnection({
  user: 'w3schools',
  password: 'Lantern_Passenger1_Earthy',
  host: 'localhost',
  database: 'mydb',
});

con.connect((err) => {
  if (err) throw err;
  console.log('Connected');

  const sql = 'DROP TABLE IF EXISTS customers';

  con.query(sql, function(err, result){
    if (err) throw err;
    console.log(result);
  });
});