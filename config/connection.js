const mysql = require('mysql2');

const db = mysql.createConnection(
    {
      host: '127.0.0.1',
      user: 'root',
      password: 'mutemath',
      database: 'work_db',
      port: 3306 
    },
    console.log(`Connected to the work_db database.`)
  );

  module.exports = db; 