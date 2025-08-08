const mysql = require('mysql');

const connection = mysql.createConnection('mysql://w3schools:Lantern_Passenger1_Earthy@localhost:3306/mydb');

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected');

  const usersTableSql = 'CREATE TABLE users (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), favorite_product INT DEFAULT null)';
  const usersInsertSql = 'INSERT INTO users (name, favorite_product) VALUES = ?';
  const usersValues = [
    ['John', 154],
    ['Peter', 154],
    ['Amy', 155],
    ['Hannah'],
    ['Michael'],
  ];
  const productsTableSql = 'CREATE TABLE products (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255))';
  const productsInsertSql = `INSERT INTO products (id, name) VALUES 
  (154, 'Chocolate Heaven'),
  (155, 'Tasty Lemons'),
  (156, 'Vanilla Dreams')
  `;
  resetDB()
  Promise.()
  addToDB(usersTableSql);
  addToDB(usersInsertSql, usersValues);
  addToDB(productsTableSql);
  addToDB(productsInsertSql);
});

const addToDB = (sql, values) => {
  if(values) {
    connection.query(sql, [values], (err, results) => {
      if (err) throw err;
    console.log(results)
  }) 
  return;
    }
  connection.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result)
  }) 
}

const resetDB = () => {
  const dropUsersSql = 'DROP TABLE IF EXISTS users';
  const dropProductsSql = 'DROP TABLE IF EXISTS products';
  connection.query(dropUsersSql, (err, result) => {
    if (err) throw err;
    console.log(result)
  }); 
  connection.query(dropProductsSql, (err, result) => {
    if (err) throw err;
    console.log(result)
  }); 
}