const express = require('express');
const db = require('../config/db'); // Assuming db is in the config folder
const router = express.Router();

// Route to get all user information
router.get('/', (req, res) => {
  console.log("Processing request for all users");
  db.query('SELECT * FROM user', (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ data: results });
  });
});

// Get username by UserID
router.get('/getName/:uid', (req, res) => {
  const {uid} = req.params;
  console.log(`Processing request for name of uid:${uid}`);
  db.query('SELECT Name FROM user as M WHERE M.MemberID = ?', [uid], (err, results) => {
    if (err) {
        return res.status(500).json({ error: err.message });
    }
    res.json({ data: results });
  });
});

// Get uid by name
router.get('/getUid/:name', (req, res) => {
  const {name} = req.params;
  console.log(`Processing request for uid of:${name}`);
  db.query('SELECT MemberID FROM user as M WHERE M.Name = ?', [name], (err, results) => {
    if (err) {
        return res.status(500).json({ error: err.message });
    }
    res.json({ data: results });
  });
});

// Get user by uid and pass
router.get('/:id/:pass', (req, res) => {
  const {id, pass} = req.params;
  console.log(`Processing authentication request for user id: ${id} with pass ${pass}`);
  db.query('SELECT * FROM user AS U WHERE Name = ? AND Password = ?', [id, pass], (err, results) => {
      if (err) {
          return res.status(500).json({ error: err.message });
      }
      res.json({ data: results[0] });
  });
});

// New route to fetch all posts by a specific user (based on MemberID)
router.get('/p/post/:id', (req, res) => {
  const userId = req.params.id;
  console.log(`Processing request for posts of user with MemberID: ${userId}`);

  // Query to fetch all posts for the given MemberID
  db.query('SELECT * FROM post WHERE MemberID = ?', [userId], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    // Check if posts are found
    if (results.length > 0) {
      return res.json({ data: results });  // Return the list of posts
    } else {
      return res.status(404).json({ message: 'No posts found for this user' });
    }
  });
});


// Get user travel logs
router.get('/l/logs/:id', (req, res) => {
  const userId = req.params.id;
  console.log(`Processing request for travel logs of user with MemberID: ${userId}`);

  // Query to fetch all travel logs for the given MemberID
  db.query('SELECT * FROM travellog WHERE MemberID = ?', [userId], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    // Check if travel logs are found
    if (results.length > 0) {
      return res.json({ data: results });  // Return the list of travel logs
    } else {
      return res.status(404).json({ message: 'No travel logs found for this user' });
    }
  });
});

router.post('/register', (req, res) => {
  const { name, password, interests, totalKMTravelled } = req.body;
  console.log(`registering user ${req.body}`);
  // Validate required fields
  if (!name || !password) {
    return res.status(400).json({ message: 'Name and password are required.' });
  }

  // Default `interests` and `totalKMTravelled` if not provided
  const userInterests = interests || null; // Default to NULL if no interests
  const kmTravelled = totalKMTravelled || 0; // Default to 0 if not provided

  console.log(`Processing registration for new user: ${name}`);
  
  // SQL query to insert new user into the database
  db.query(
    'INSERT INTO user (Name, Password, Interests, TotalKMTravelled) VALUES (?, ?, ?, ?)', 
    [name, password, userInterests, kmTravelled], 
    (err, results) => {
      if (err) {
        console.error('Error during user registration:', err);
        return res.status(500).json({ error: err.message });
      }

      console.log('User registered successfully with ID:', results.insertId);
      res.status(201).json({ 
        message: 'User registered successfully', 
        userId: results.insertId 
      });
    }
  );
});



module.exports = router;
