const express = require('express');
const db = require('../config/db'); // Assuming db is in the config folder
const router = express.Router();

// Route to get all group information
router.get('/', (req, res) => {
  console.log("Processing request for all users");
  db.query('SELECT * FROM grouptable', (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ data: results });
  });
});

//Get user's groups
router.get('/userG/:id', (req, res) => {
    const {id} = req.params;
    console.log(`Processing group request for user with ID: ${id}`);
    db.query('SELECT G.* FROM grouptable AS G NATURAL JOIN groupmembers AS M WHERE M.MemberID = ?', [id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ data: results });
    });

});

// Get groups the user is not a part of
router.get('/notUserG/:id', (req, res) => {
    const { id } = req.params;
    console.log(`Processing request for groups user with ID: ${id} is not in`);
    
    const query = `
        SELECT G.* 
        FROM grouptable AS G
        WHERE G.GroupName NOT IN (
            SELECT M.GroupName
            FROM groupmembers AS M
            WHERE M.MemberID = ?
        )
    `;

    db.query(query, [id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ data: results });
    });
});



//Get group by name 
router.get('/:id', (req, res) => {
    const {id} = req.params;
    console.log(`Processing group request for group with name: ${id}`);
    db.query('SELECT * FROM grouptable AS G WHERE GroupName = ?', [id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ data: results[0] });
    });

});


//Get all posts for a group
router.get('/posts/:groupName', (req, res) => {
    const {groupName} = req.params;
    console.log(`Processing group posts request for group with name: ${groupName}`);
    db.query('SELECT P.*, D.* FROM grouptable AS G NATURAL JOIN discussionpost as D NATURAL JOIN post as P WHERE G.GroupName = ? ORDER BY IsPinned', [groupName], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ data: results });
    });

});

// Route for a user to join a group
router.post('/join-group', (req, res) => {
    console.log(req.body);
    const { memberID, groupName } = req.body; // Assuming the data is sent in the body
    console.log(`Processing request for user with ID: ${memberID} to join group: ${groupName}`);
    
    // Insert into groupmembers table
    const query = `
      INSERT INTO groupmembers (GroupName, MemberID, IsModerator)
      VALUES (?, ?, 0)
    `;
    
    db.query(query, [groupName, memberID], (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ error: err.message });
      }
      res.json({ message: 'User successfully joined the group' });
      
    });
  });
  



module.exports = router;