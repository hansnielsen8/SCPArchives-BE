// Depends (for men)
const express = require('express')
const mongoose = require('mongoose')
const scpRoutes = require('./controllers/SCP')
// const cors = require('cors');
require('dotenv').config()

const app = express()

// midwives
app.use(express.json())

// routes
app.use('/', scpRoutes)


// Database connection, I have it connected to my Mongo account for now.
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('DB connected'))
    .catch(err => console.error(err));

// my port is set to 3000 in my .env for now
const PORT = process.env.PORT

app.listen(PORT, console.log(`listening on port ${PORT}`))