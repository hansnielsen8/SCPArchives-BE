// Depends (for men)
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');
const { application } = require('express');
require('dotenv').config()

const app = express()



// Database connection, I have it connected to my Mongo account for now.
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('DB connected'))
    .catch(err => console.error(err));

// test
application.get('/', (req, res) => {
    res.send('Hello, there!')
})

// port is set to 3000 in my .env for now
const PORT = process.env.PORT

app.listen(PORT, console.log(`listening on port ${PORT}`))