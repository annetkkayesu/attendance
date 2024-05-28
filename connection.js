const mysql = require('mysql');

// Create a connection pool to the MySQL database
const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'brvhyeqeif55l9bkheqv-mysql.services.clever-cloud.com',
  user: 'uux53veaotimopk2',
  password: 'hyFyLxiYPtRvlBDlhFn2',
  database: 'brvhyeqeif55l9bkheqv'
});

module.exports = pool;
