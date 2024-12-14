const mariadb =  require('mariadb');

const pool = mariadb.createPool({
    host:'127.0.0.1',
    port:3307,
    user:'root',
    password:"root",
    database:'gramhunar',
    connectionLimit: 5
});

const conn = async()=>{
  try{
    await pool.getConnection();
    console.log('Connected to MariaDB database!');
  }
  catch(err){
    console.error('Error connecting to MariaDB database:', err);
  }
}
conn();
module.exports = pool;