const mysql = require('mysql2');
require("dotenv").config();

const db = mysql.createConnection(
    {
      host: '127.0.0.1',
      user: `${process.env.DB_USER}`,
      password:`${process.env.DB_PASSWORD}`,
      database: `${process.env.DB_NAME}`,
      port: 3306 
    },
    console.log(`Connected to the work_db database.`)
  );

  module.exports = db; 