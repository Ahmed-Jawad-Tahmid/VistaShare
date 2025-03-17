const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',       // MySQL server host
  user: 'root',            // MySQL username
  password: 'password', // MySQL password
  database: 'vistashare',  // Database name
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err.message);
    process.exit(1);
  }
  console.log('Connected to MySQL database');
});

module.exports = db;
