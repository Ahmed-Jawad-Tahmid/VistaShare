const express = require('express');
const db = require('../config/db'); // Assuming db is in the config folder
const router = express.Router();

// Route to get all comment information
router.get('/', (req, res) => {
  console.log("Processing request for all comments");
  db.query('SELECT * FROM comment', (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ data: results });
  });
});


// Get comments for a postID
router.get('/:postID', (req, res) => {
    const {postID} = req.params;
    console.log(`Processing comments request for post with ID: ${postID}`);
    db.query('SELECT * FROM comment AS C WHERE C.PostID = ?', [postID], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ data: results});
    });

});

router.post('/post-comment', (req, res) => {
  const { Text, PostID, MemberID, Media, Date, Rating } = req.body;

  
  // Prepare the SQL query to insert a new comment
  const query = `
    INSERT INTO Comment (PostID, MemberID, Text, Media, Date, Rating)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  console.log(`Handling Post Of Comment: ${req.body}`)
  // Execute the query with the provided data
  db.execute(query, [PostID, MemberID, Text, Media, Date, Rating], (err, results) => {
    if (err) {
      console.error('Error inserting comment:', err);
      return res.status(500).json({ message: 'Error inserting comment' });
    }

    // Respond with the inserted comment data (e.g., the CommentID)
    res.status(201).json({
      message: 'Comment successfully added',
      CommentID: results.insertId, // This is the ID of the newly inserted comment
    });
  });
});

module.exports = router;