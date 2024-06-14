const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./db'); // Import the database connection file

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to Database
connectDB();


// Routes
const bookRouter = require('./routes/books');
app.use('/books', bookRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});