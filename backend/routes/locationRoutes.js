const express = require('express');
const db = require('../config/db'); // Assuming db is in the config folder
const router = express.Router();


// Get all locations
router.get('/', (req, res) => {
    console.log("Processing request for all locations");
    db.query('SELECT * FROM location', (err, results) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json({ data: results });
    });
  });

// Get location by id
router.get('/:LID', (req, res) => {
  const {LID} = req.params; 
    console.log(`Processing request for all locations ${LID}`);
    db.query('SELECT * FROM location WHERE LocationID= ? ', [LID], (err, results) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json({ data: results[0] });
    });
  });


module.exports = router;
