const express = require('express');
const cors = require('cors'); // Import cors
const bodyParser = require('body-parser'); // Import bodyParser
const db = require('./config/db');
const userRoutes = require('./routes/userRoutes'); 
const groupRoutes = require('./routes/groupRoutes');
const commentRoutes = require('./routes/commentRoutes');
const postRoutes = require('./routes/postRoutes');
const locationRoutes = require('./routes/locationRoutes');
const cityRoutes = require('./routes/cityRoutes');


const app = express();


// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json()); // Parses incoming JSON requests


// Test Route to Check Database Connection
app.get('/api/test', (req, res) => {
  console.log("Processing test request");
  db.query('SELECT * FROM Post', (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ data: results });
  });
});

// More routes
app.use('/api/user', userRoutes);
app.use('/api/group', groupRoutes);
app.use('/api/comment', commentRoutes);
app.use('/api/post', postRoutes);
app.use('/api/location/', locationRoutes);
app.use('/api/city', cityRoutes);


// Start the Server
// Running react on 3000
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
