const express = require('express');
const db = require('../config/db'); // Assuming db is in the config folder
const router = express.Router();


// Get all cities
router.get('/', (req, res) => {
    console.log("Processing request for all cities");
    db.query('SELECT * FROM city', (err, results) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json({ data: results });
    });
  });


// City by id
router.get('/:LID', (req, res) => {
    const {LID} = req.params; 
      console.log(`Processing request for city ${LID}`);
      db.query('SELECT * FROM city WHERE CityID= ? ', [LID], (err, results) => {
        if (err) {
          return res.status(500).json({ error: err.message });
        }
        res.json({ data: results[0] });
      });
    });

//Post a city guide
router.post('/add-guide', async (req, res) => {
    const { Title, Text, Media, IsUnderReview, Rating, Date, MemberID, AdminID, CityID, VisitDuration, ActivityTypes, RatingOutOf10, KeyPoints, Tags } = req.body;
  
    console.log(req.body);
  
    // Validate required fields
    if (!Title || !Date || !MemberID || !CityID) {
      return res.status(400).json({ error: 'Title, Rating, Date, MemberID, and CityID are required fields.' });
    }
  
    // Query to insert into Post table
    const insertPostQuery = `
      INSERT INTO Post (Title, Text, Media, IsUnderReview, Rating, Date, MemberID, AdminID)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;
  
    // Query to insert into CityGuide table
    const insertCityGuideQuery = `
      INSERT INTO CityGuide (PostID, CityID, VisitDuration, ActivityTypes, RatingOutOf10, KeyPoints, Tags)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `;
  
    const postValues = [Title, Text, Media, IsUnderReview, RatingOutOf10, Date, MemberID, AdminID];
    const cityGuideValues = [null, CityID, VisitDuration, ActivityTypes, RatingOutOf10, KeyPoints, Tags];  // null for PostID initially
  
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
              res.status(500).json({ error: 'Failed to insert guide: ' + err.message });
            });
          }
  
          const newPostID = postResult.insertId; // Get the auto-generated PostID
          cityGuideValues[0] = newPostID; // Update CityGuide values with the new PostID
  
          // Insert into CityGuide table
          db.query(insertCityGuideQuery, cityGuideValues, (err, cityGuideResult) => {
            if (err) {
              return db.rollback(() => {
                console.error('Error inserting into CityGuide:', err);
                res.status(500).json({ error: 'Failed to associate guide with city: ' + err.message });
              });
            }
  
            // Commit transaction
            db.commit((err) => {
              if (err) {
                return db.rollback(() => {
                  console.error('Error committing transaction:', err);
                  res.status(500).json({ error: 'Failed to save guide: ' + err.message });
                });
              }
  
              // Send success response
              res.status(201).json({
                message: 'Guide added successfully',
                PostID: newPostID,
                CityID: CityID,
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
