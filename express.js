//import all needed resources
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const serverless = require('serverless-http');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createPool({
  connectionLimit: 10,
  host: process.env.HOST,
  user: process.env.DBUSER,
  password: process.env.DBPASS,
  database: process.env.DATABASE
});

db.getConnection((err, connection) => {
  if (err) {
    console.log("Database connection error", err);
    return;
  }
  console.log("Connected to the database");
  connection.release();
});

//api for parent data
app.get('/api/parent/:userID', (req, res) => {
  const userID = req.params.userID;

  // Fetch parent data from the database based on userID
  db.query('SELECT * FROM parent WHERE parent_ID = ?', [userID], (err, results) => {
    if (err) {
      console.error('Database query error:', err);
      res.status(500).json({ error: 'An error occurred' });
      return;
    }

    console.log('results: ', results);

    if (results.length === 0) {
      res.status(404).json({ error: 'Parent not found' });
      return;
    }

    const userData = results[0];
    res.json(userData);
  });
});


//api to update parent password
app.put('/api/parent/updatePass', (req, res) => {
  const {parent_ID, password} = req.body;

  db.query('UPDATE parent SET password = ? WHERE parent_ID = ?', [password, parent_ID], (err, results) => {
    if (err) {
      console.error('Database query error:', err);
      res.status(500).json({ error: 'An error occurred' });
      return;
    }

    console.log('Password updated successfully');
    res.json({ success: true });
  });
});

//api to update parent profile
app.put('/api/parent/updateDetails', (req, res) => {
  const { parent_ID, newContact, newAddress } = req.body;

  db.query('UPDATE parent SET contactNo = ?, address = ? WHERE parent_ID = ?', [newContact, newAddress, parent_ID], (err, results) => {
    if (err) {
      console.error('Database query error:', err);
      res.status(500).json({ error: 'An error occurred' });
      return;
    }

    console.log('Contact and address updated successfully');
    res.json({ success: true });
  });
});

//api to update parent imageURI
app.put('/api/parent/updateImageURI', (req, res) => {
  const { userID, newImageURI} = req.body;
  console.log('Received data:', { userID, newImageURI });

  db.query(
    'UPDATE parent SET imageURI = ? WHERE parent_ID = ?',
    [newImageURI, userID],
    (err, results) => {
      if (err) {
        console.error('Database query error:', err);
        res.status(500).json({ error: 'An error occurred' });
        return;
      }

      console.log('ImageURI updated successfully');
      res.json({ success: true });
    }
  );
});

//api to update child imageURI
app.put('/api/child/updateImageURI', (req, res) => {
  const { userID, newImageURI} = req.body;
  console.log('Received data:', { userID, newImageURI });

  db.query(
    'UPDATE child SET imageURI = ? WHERE child_ID = ?',
    [newImageURI, userID],
    (err, results) => {
      if (err) {
        console.error('Database query error:', err);
        res.status(500).json({ error: 'An error occurred' });
        return;
      }

      console.log('ImageURI updated successfully');
      res.json({ success: true });
    }
  );
});


//need one api to update parent subscription

//api for teacher data
app.get('/api/teacher/:userID', (req, res) => {
  const userID = req.params.userID;

  // Fetch teacher data from the database based on teacher_ID
  db.query(`SELECT
      t.*,
      fc.class_Name,
      s.school_Name
      FROM
        teacher t
      JOIN
        form_class fc ON t.class_ID = fc.class_ID
      JOIN
        school s ON t.school_ID = s.school_ID
      WHERE
        t.teacher_ID = ?;`,
      [userID], (err, results) => {
    if (err) {
      console.error('Database query error:', err);
      res.status(500).json({ error: 'An error occurred' });
      return;
    }

    console.log('results: ', results);

    if (results.length === 0) {
      res.status(404).json({ error: 'Teacher not found' });
      return;
    }

    const teacherData = results[0];
    res.json(teacherData);
  });
});


//api to update teacher password
app.put('/api/teacher/updatePass', (req, res) => {
  const {teacher_ID, password} = req.body;

  db.query('UPDATE teacher SET password = ? WHERE teacher_ID = ?', [password, teacher_ID], (err, results) => {
    if (err) {
      console.error('Database query error:', err);
      res.status(500).json({ error: 'An error occurred' });
      return;
    }

    console.log('Password updated successfully');
    res.json({ success: true });
  });
});

//api to update teacher profile
app.put('/api/teacher/updateDetails', (req, res) => {
  const { teacher_ID, newContact, newAddress } = req.body;

  db.query('UPDATE teacher SET contactNo = ?, address = ? WHERE teacher_ID = ?', [newContact, newAddress, teacher_ID], (err, results) => {
    if (err) {
      console.error('Database query error:', err);
      res.status(500).json({ error: 'An error occurred' });
      return;
    }

    console.log('Contact and address updated successfully');
    res.json({ success: true });
  });
});

//api to update teacher profile picture
app.put('/api/teacher/updateImageURI', (req, res) => {
  const { userID, newImageURI} = req.body;
  console.log('Received data:', { userID, newImageURI });

  db.query(
    'UPDATE teacher SET imageURI = ? WHERE teacher_ID = ?',
    [newImageURI, userID],
    (err, results) => {
      if (err) {
        console.error('Database query error:', err);
        res.status(500).json({ error: 'An error occurred' });
        return;
      }

      console.log('ImageURI updated successfully');
      res.json({ success: true });
    }
  );
});


//api to get driver data
app.get('/api/driver/:userID', (req, res) => {
  const userID = req.params.userID;

  // Fetch driver data from the database based on driver_ID
  db.query(`SELECT
      d.*,
      v.vendor_Name
      FROM
        driver d
      JOIN
        vendor v ON d.vendor_ID = v.vendor_ID
      WHERE
        d.driver_ID = ?;`,
      [userID], (err, results) => {
    if (err) {
      console.error('Database query error:', err);
      res.status(500).json({ error: 'An error occurred' });
      return;
    }

    console.log('results: ', results);

    if (results.length === 0) {
      res.status(404).json({ error: 'Driver not found' });
      return;
    }

    const driverData = results[0];
    res.json(driverData);
  });
});


//api to update driver details
app.put('/api/driver/updateDetails', (req, res) => {
  const { driver_ID, newContact, newAddress } = req.body;

  db.query('UPDATE driver SET contactNo = ?, address = ? WHERE driver_ID = ?', [newContact, newAddress, driver_ID], (err, results) => {
    if (err) {
      console.error('Database query error:', err);
      res.status(500).json({ error: 'An error occurred' });
      return;
    }

    console.log('Contact and address updated successfully');
    res.json({ success: true });
  });
});

//api to update driver pass
app.put('/api/driver/updatePass', (req, res) => {
  const {driver_ID, password} = req.body;

  db.query('UPDATE driver SET password = ? WHERE driver_ID = ?', [password, driver_ID], (err, results) => {
    if (err) {
      console.error('Database query error:', err);
      res.status(500).json({ error: 'An error occurred' });
      return;
    }

    console.log('Password updated successfully');
    res.json({ success: true });
  });
});

//api to update driver profile picture
app.put('/api/driver/updateImageURI', (req, res) => {
  const { userID, newImageURI} = req.body;
  console.log('Received data:', { userID, newImageURI });

  db.query(
    'UPDATE driver SET imageURI = ? WHERE driver_ID = ?',
    [newImageURI, userID],
    (err, results) => {
      if (err) {
        console.error('Database query error:', err);
        res.status(500).json({ error: 'An error occurred' });
        return;
      }

      console.log('ImageURI updated successfully');
      res.json({ success: true });
    }
  );
});


//api to get faci data
app.get('/api/faci/:userID', (req, res) => {
  const userID = req.params.userID;

  // Fetch driver data from the database based on driver_ID
  db.query(`SELECT * FROM event_facilitator where event_facilitator_ID = ? ;`,
      [userID], (err, results) => {
    if (err) {
      console.error('Database query error:', err);
      res.status(500).json({ error: 'An error occurred' });
      return;
    }

    console.log('results: ', results);

    if (results.length === 0) {
      res.status(404).json({ error: 'Driver not found' });
      return;
    }

    const driverData = results[0];
    res.json(driverData);
  });
});

//api to update faci details
app.put('/api/faci/updateDetails', (req, res) => {
  const { faci_ID, newContact, newAddress } = req.body;

  db.query('UPDATE event_facilitator SET contactNo = ?, address = ? WHERE event_facilitator_ID = ?', [newContact, newAddress, faci_ID], (err, results) => {
    if (err) {
      console.error('Database query error:', err);
      res.status(500).json({ error: 'An error occurred' });
      return;
    }

    console.log('Contact and address updated successfully');
    res.json({ success: true });
  });
});

//api to update faci pass
app.put('/api/faci/updatePass', (req, res) => {
  const {faci_ID, password} = req.body;

  db.query('UPDATE event_facilitator SET password = ? WHERE event_facilitator_ID = ?', [password, faci_ID], (err, results) => {
    if (err) {
      console.error('Database query error:', err);
      res.status(500).json({ error: 'An error occurred' });
      return;
    }

    console.log('Password updated successfully');
    res.json({ success: true });
  });
});

//api to update faci profile picture
app.put('/api/faci/updateImageURI', (req, res) => {
  const { userID, newImageURI} = req.body;
  console.log('Received data:', { userID, newImageURI });

  db.query(
    'UPDATE event_facilitator SET imageURI = ? WHERE event_facilitator_ID = ?',
    [newImageURI, userID],
    (err, results) => {
      if (err) {
        console.error('Database query error:', err);
        res.status(500).json({ error: 'An error occurred' });
        return;
      }

      console.log('ImageURI updated successfully');
      res.json({ success: true });
    }
  );
});


//api to get child data based on ParentID
app.get('/api/child/:parentID', (req, res) => {
  const parentID = req.params.parentID;

  // Fetch child data from the database based on parentID
  db.query(
    'SELECT child_ID, firstName, lastName, imageURI FROM child WHERE parent_ID = ?', [parentID], (err, results) => {
      if (err) {
        console.error('Database query error:', err);
        res.status(500).json({ error: 'An error occurred' });
        return;
      }

      console.log('results: ', results);

      if (results.length === 0) {
        res.status(404).json({ error: 'No children found for the parent' });
        return;
      }

      res.json(results);
    }
  );
});


//api to get child data
app.get('/api/thischild/:childID', (req, res) => {
  const childID = req.params.childID;

  // Fetch child data along with related information from other tables
  db.query(
    `SELECT
    c.firstName AS childFirstName,
    c.lastName AS childLastName,
    c.address,
    c.region,
    c.imageURI,
    s.school_Name,
    fc.class_Name,
    t.email,
    t.firstName AS teacherFirstName,
    t.lastName AS teacherLastName
    FROM
        child c
    JOIN
        school s ON c.school_ID = s.school_ID
    JOIN
        form_class fc ON c.class_ID = fc.class_ID
    JOIN
        teacher_child tc ON c.child_ID = tc.child_ID
    JOIN
        teacher t ON tc.teacher_ID = t.teacher_ID
    WHERE
        c.child_ID = ?;`,
    [childID],
    (err, results) => {
      if (err) {
        console.error('Database query error:', err);
        res.status(500).json({ error: 'An error occurred' });
        return;
      }

      console.log('results: ', results);

      if (results.length === 0) {
        res.status(404).json({ error: 'Child not found' });
        return;
      }

      const childData = results[0];
      res.json(childData);
    }
  );
});


app.post('/api/login', (req, res) => {
  const { username, password, userType } = req.body;
  let table;
  let user_ID_column;

  // Determine the table and user_ID column based on the userType
  switch (userType) {
    case 'parent':
      table = 'parent';
      user_ID_column = 'parent_ID';
      break;
    case 'teacher':
      table = 'teacher';
      user_ID_column = 'teacher_ID';
      break;
    case 'driver':
      table = 'driver';
      user_ID_column = 'driver_ID';
      break;
    case 'event_facilitator':
      table = 'event_facilitator';
      user_ID_column = 'event_facilitator_ID';
      break;
    default:
      table = 'system_admin';
      user_ID_column = 'user_ID';
      break;
  }

  // Perform authentication logic and retrieve the firstName
  db.query(`SELECT ${user_ID_column} AS user_ID, password, lastName FROM ${table} WHERE BINARY ${user_ID_column} = ? AND BINARY password = ?`, [username, password], (err, results) => {
    if (err) {
      console.error('Database query error:', err);
      res.status(500).json({ error: 'An error occurred' });
      return;
    }

    console.log('results: ', results);

    if (results.length > 0) {
      // User is authenticated
      const LName = results[0].lastName;
      res.json({ success: true, LName});
    } else {
      // Authentication failed
      res.json({ success: false, error: 'Invalid username or password' });
    }
  });
});

//api to get latest 3 announcements
app.get('/api/announcements/3', (req, res) => {
  // Query to fetch the latest 3 announcements based on dateTime in descending order
  db.query('SELECT * FROM announcement ORDER BY lastUpdated DESC LIMIT 3;', 
  (err, results) => {
    if (err) {
      console.error('Database query error:', err);
      res.status(500).json({ error: 'An error occurred' });
      return;
    }

    console.log('Announcements:', results);
    res.json(results);
  });
});

//api to get latest 10 announcements
app.get('/api/announcements/10', (req, res) => {
  // Query to fetch the latest 10 announcements based on dateTime in descending order
  db.query('SELECT * FROM announcement ORDER BY lastUpdated DESC LIMIT 10', (err, results) => {
    if (err) {
      console.error('Database query error:', err);
      res.status(500).json({ error: 'An error occurred' });
      return;
    }

    console.log('Announcements:', results);
    res.json(results);
  });
});

module.exports.handler = serverless(app);