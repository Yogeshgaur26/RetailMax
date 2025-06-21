const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const fs = require('fs');

// Ensure the database directory exists
const databaseDir = path.join(__dirname, '..', 'database');
if (!fs.existsSync(databaseDir)) {
  fs.mkdirSync(databaseDir, { recursive: true });
}

// Define the full path to the SQLite database file
const dbPath = path.join(databaseDir, 'database.sqlite');
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Database connection error:', err.message);
  } else {
    console.log('Connected to SQLite database at', dbPath);
  }
});

// Create table if not exists
db.run("CREATE TABLE IF NOT EXISTS products (id INTEGER PRIMARY KEY, name TEXT, price REAL)");

db.serialize(() => {
  db.all("SELECT COUNT(*) as count FROM products", (err, rows) => {
    if (!err && rows[0].count === 0) {
      db.run("INSERT INTO products (name, price) VALUES ('Laptop', 999.99), ('Phone', 499.99), ('Headphones', 149.99)");
    }
  });
});

// API route
router.get('/', (req, res) => {
  db.all("SELECT * FROM products", (err, rows) => {
    if (err) {
      console.error('Failed to fetch products:', err.message);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    res.json(rows);
  });
});

module.exports = router;