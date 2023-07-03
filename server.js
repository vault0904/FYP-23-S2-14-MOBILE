const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(express.json());

app.use(cors());

const db = mysql.createPool({
  connectionLimit: 10,
  host: 'database1.c5zxh3qsi4iy.ap-southeast-1.rds.amazonaws.com',
  user: 'root',
  password: 'R12345678',
  database: 'Demo1'
});

db.getConnection((err, connection) => {
  if (err) {
    console.log("Database connection error", err);
    return;
  }
  console.log("Connected to the database");
  connection.release();
});

const port = 3306; // or any desired port number
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get('/api/users', (req, res) => {
  // Fetch users from the database
  db.query('SELECT * FROM system_admin', (err, results) => {
    if (err) {
      console.error('Database query error:', err);
      res.status(500).json({ error: 'An error occurred' });
      return;
    }
    console.log('results: ', results);
    res.json(results);
  });
});

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  // Perform authentication logic
  db.query('SELECT * FROM system_admin WHERE user_ID = ? AND password = ?', [username, password], (err, results) => {
    if (err) {
      console.error('Database query error:', err);
      res.status(500).json({ error: 'An error occurred' });
      return;
    }

    console.log('results: ', results);

    if (results.length > 0) {
      const user_ID = results[0].user_ID;
      // User is authenticated
      res.json({ success: true, user_ID });

    } else {
      // Authentication failed
      res.json({ success: false, error: 'Invalid username or password' });
    }
  });
});
