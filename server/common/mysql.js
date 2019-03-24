const sql = require('mysql')
var util = require('util')

import './env';


//var mysql = require('mysql');

const pool = sql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "123",
  database: 'tra'
})



pool.getConnection((err, connection) => {
  if (err) {
      if (err.code === 'PROTOCOL_CONNECTION_LOST') {
          console.error('Database connection was closed.')
      }
      if (err.code === 'ER_CON_COUNT_ERROR') {
          console.error('Database has too many connections.')
      }
      if (err.code === 'ECONNREFUSED') {
          console.error('Database connection was refused.')
      }
  }
  if (connection) connection.release()
  return
})

pool.query = util.promisify(pool.query);


export default pool;
