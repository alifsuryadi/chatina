import mysql from 'mysql2';

// Buat koneksi ke database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'dbchatina'
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Terhubung ke database MySQL');
});

// Eksport koneksi untuk digunakan di file lain
export default db;