const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = 3000;

// Middleware to parse incoming request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Create MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'qx43ge2g9dguufaAA_5',
  database: 'school_management'
});

// Connect to MySQL database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// Route to handle POST requests to save data to the database
app.post('/enseignant', (req, res) => {
  const { nomEnseignant, prenomEnseignant, email, NTelephone, grade, IdDepartement } = req.body;
  const sql = 'INSERT INTO Enseignant (nomEnseignant, prenomEnseignant, email, NTelephone, grade, IdDepartement) VALUES (?, ?, ?, ?, ?, ?)';
  const values = [nomEnseignant, prenomEnseignant, email, NTelephone, grade, IdDepartement];

  connection.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error saving data to database:', err);
      res.status(500).send('Error saving data to database');
      return;
    }
    console.log('Data saved to database:', result);
    res.status(200).send('Data saved to database');
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
