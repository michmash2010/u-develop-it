const mysql = require('mysql2');

// Connect to db--Test by restarting the server and running the command, "npm start" in console
// Successful connection message should read:
//  Connected to the election database.
//  Server running on port 3001
const db = mysql.createConnection(
    {
        host: 'localhost',
        // Your MySQL username,
        user: 'root',
        // Your MySQL password
        password: '54321',
        database: 'election'
    },
    console.log('Connected to the election database.')
);

module.exports = db;