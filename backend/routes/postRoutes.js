const express = require('express');
const db = require('../config/db'); // Assuming db is in the config folder
const router = express.Router();

// Route to get all post information
router.get('/', (req, res) => {
  console.log("Processing request for all comments");
  db.query('SELECT * FROM post', (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ data: results });
  });
});


// Get post by ID
router.get('/:postID', (req, res) => {
    const {postID} = req.params;
    console.log(`Processing post request for post with ID: ${postID}`);
    db.query('SELECT * FROM post AS C WHERE C.PostID = ?', [postID], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ data: results[0] });
    });

});

// Get all location reviews based on location ID
router.get('/location/:LID', (req, res) => {
    const {LID} = req.params; 
    console.log(`Processing post request for location review posts of Loc ID: ${LID}`);
    db.query('SELECT C.* FROM post AS C NATURAL JOIN locationreview AS L WHERE L.LocationID = ?', [LID], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ data: results });
    });

});

// Get all city guides based on city ID
router.get('/city/:LID', (req, res) => {
  const {LID} = req.params; 
  console.log(`Processing post request for city guide posts of City ID: ${LID}`);
  db.query('SELECT P.*, C.* FROM post AS P NATURAL JOIN cityguide AS C WHERE C.CityID = ?', [LID], (err, results) => {
      if (err) {
          return res.status(500).json({ error: err.message });
      }
      res.json({ data: results });
  });

});


router.post('/add-review', async (req, res) => {
  const { Title, Text, Media, IsUnderReview, Rating, Date, MemberID, AdminID, LocationID } = req.body;

  console.log(req.body);
  console.log(!Title);
  console.log(!Rating);
  console.log(!Date);
  console.log(!MemberID);
  console.log(!LocationID);

  // Validate required fields
  if (!Title || !Rating || !Date || !MemberID || !LocationID) {
    console.log("error throwing ass")
    return res.status(400).json({ error: 'Title, Rating, Date, MemberID, and LocationID are required fields.' });
  }

  const insertPostQuery = `
    INSERT INTO Post (Title, Text, Media, IsUnderReview, Rating, Date, MemberID, AdminID)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `;

  const insertLocationReviewQuery = `
    INSERT INTO LocationReview (PostID, LocationID)
    VALUES (?, ?)
  `;

  
  const postValues = [Title, Text, Media, IsUnderReview, Rating, Date, MemberID, AdminID];
  console.log(`Creating a post ${postValues}`);

  try {
    // Begin transaction
    db.beginTransaction((err) => {
      if (err) {
        console.error('Error starting transaction:', err);
        return res.status(500).json({ error: 'Failed to start transaction: ' + err.message });
      }

      // Insert into Post table
      db.query(insertPostQuery, postValues, (err, postResult) => {
        if (err) {
          return db.rollback(() => {
            console.error('Error inserting into Post:', err);
            res.status(500).json({ error: 'Failed to insert review: ' + err.message });
          });
        }

        const newPostID = postResult.insertId; // Get the auto-generated PostID

        // Insert into LocationReview table
        db.query(insertLocationReviewQuery, [newPostID, LocationID], (err, locationResult) => {
          if (err) {
            return db.rollback(() => {
              console.error('Error inserting into LocationReview:', err);
              res.status(500).json({ error: 'Failed to associate review with location: ' + err.message });
            });
          }

          // Commit transaction
          db.commit((err) => {
            if (err) {
              return db.rollback(() => {
                console.error('Error committing transaction:', err);
                res.status(500).json({ error: 'Failed to save review: ' + err.message });
              });
            }

            // Send success response
            res.status(201).json({
              message: 'Review added successfully',
              PostID: newPostID,
              LocationID: LocationID,
            });
          });
        });
      });
    });
  } catch (error) {
    console.error('Unexpected server error:', error);
    res.status(500).json({ error: 'Unexpected server error: ' + error.message });
  }
});


module.exports = router;



module.exports = router;