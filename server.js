const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Test the Express.js connection--execute with "npm start" in terminal--Open browser to http://localhost:3001 to see 'Hello World' message in JSON format.
// This confirms the connection the Express.js server.
// app.get('/', (req, res) => {
//     res.json({
//         message: 'Hello World'
//     });
// });

// Default response for any other request (Not Found) - *catchall* for user requests not supported by the app
// Note: this one should always be last so it doesn't override al others
app.use((req, res) => {
    res.status(404).end();
});

// Connection Function: starts the Express.js server on port 3001--Note the backticks around the Console log statement.  Apostrophies do not behave the same.
// Terminal should show "Server running on port 3001" message.
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

