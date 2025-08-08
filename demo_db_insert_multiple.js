const mysql = require('mysql');

const connection = mysql.createConnection('mysql://w3schools:Lantern_Passenger1_Earthy@localhost:3306/mydb');

connection.connect((err) => {
  if(err) throw err;
  console.log('Connected');
  const sql = "INSERT INTO customers (name, address) VALUES ?"

  const values = [
    ['John', 'Highway71'],
    ['Peter', 'Lowstreet 4'],
    ['Amy', 'Apple st 652'],
    ['Hannah', 'Mountain 21'],
    ['Michael', 'Valley 345'],
    ['Sandy', 'Ocean blvd 2'],
    ['Betty', 'Green Grass 1'],
    ['Richard', 'Sky st 331'],
    ['Susan', 'One way 98'],
    ['Vicky', 'Yellow Garden 2'],
    ['Ben', 'Park Lane 38'],
    ['William', 'Central st 954'],
    ['Chuck', 'Main Road 989'],
    ['Viola', 'Sideway 1633'],
  ];

  connection.query(sql, [values], function(err, result){
    if(err) throw err;
    console.log('Number of records inserted %s', result.affectedRows);
  })
});