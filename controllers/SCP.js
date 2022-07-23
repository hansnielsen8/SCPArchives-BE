// dependancies
const router =  require('express').Router()
const scp = require('../models/SCP-Model')

// this should hopefully be the home page
router.get('/', (req, res) => {
    res.send('Home!')
})

module.exports = router