const express = require('express');

const db = require('./db/connection');

const apiRoutes = require('./routes/apiRoutes');

const PORT = process.env.PORT || 3001;
const app = express();

const inputCheck = require('./utils/inputCheck');

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Use apiRoutes
app.use('/api', apiRoutes);

// Default response for any other request (Not Found) - *catchall* for user requests not supported by the app
// Note: this one should always be last so it doesn't override al others
app.use((req, res) => {
    res.status(404).end();
});

// Connection Function: starts the Express.js server on port 3001--Note the backticks around the Console log statement.  Apostrophies do not behave the same.
// Terminal should show "Server running on port 3001" message.
// Start server after DB connection
db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  });

