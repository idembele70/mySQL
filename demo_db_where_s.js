const { createConnection, escape } = require("mysql");

const connection = createConnection({host: 'localhost', user: 'w3schools', password: 'Lantern_Passenger1_Earthy', database: 'mydb'});

connection.connect(function(err) {
  if (err) throw err;
  console.log('Connected!');

    //  const sql = 'SELECT * FROM customers WHERE address LIKE "3%"';
    const adr = 'jean jaures';
    // const sql = 'SELECT * FROM customers WHERE address = ' + escape(adr)
    // const sql = 'SELECT * FROM customers WHERE address = ?';
    const name = 'John';
    const sql = 'SELECT * FROM customers WHERE address = ? OR name = ?';

  connection.query(sql, [adr, name], (err, result) => {
    if (err) throw err;
    console.log(result);
  });
});