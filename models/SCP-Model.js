const mongoose = require('mongoose')

//const classified = require('../public/Classified')

// this is basic for now, more can be decided on and added to later
const scpSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        // I would like to add a default later on if there is no normalized name for the SCP, such as "unkown" or "no current designation"
        required: false,
        unique: true
    },
    location: {
        // would like to later make this section have a proper location format
        type: String,
        require: true
    },
    date: {
        //discovery date
        type: Date,
        required: true
    },
    image: {
        type: String,
        // here is another spot I would like to later add a default image if one is not added
        required: false,
        // default: '../public/Classified'
    },
    description: {
        type: String,
        required: true
    },
    containment: {
        type: String,
        // if contaiment is not chosen we should have it default to something like "no known method of containment" or we can make it require. not sure yet.
        required: false,
        default: 'No current known method to contain.'
    }
})

module.exports = mongoose.model('SCP', scpSchema)