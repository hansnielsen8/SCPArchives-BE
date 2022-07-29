// dependancies
const router =  require('express').Router()
const SCP = require('../models/SCP-Model')

// this should hopefully be the home page, tested and works
router.get('/', (req, res) => {
    res.send('Home!')
})

// News route
router.get('/news', (req, res) => {
    res.send('READ ALL ABOUT IT!')
})

// scp list page named "SCP Archive", tested and works
router.get('/scp', async (req, res) => {
    try {
        const SCPs = await SCP.find()

        res.status(200).json(SCPs)
    } catch (error) {
        res.status(500).json({ "message": "error accessing SCP archives" })
    }
})

// indiviual scp page, page you are taken to when you select one of SCPs from the archive page, tested and works
router.get('/scp/:id', async (req, res) => {
    try {
        const { id } = req.params
        const scp = await SCP.findOne({ id })

        res.status(200).json(scp)
    } catch (error) {
        res.status(500).json({ "message": "error accessing SCP entry" })
    }
})

// delete SCP entry, tested and works
router.delete('/scp/:id', async (req, res) => {
    try {
        const { id } = req.params
        const scp = await SCP.findOneAndDelete({ id })

        res.status(200).json(scp)
    } catch (error) {
        res.status(500).json({ "message": "error deleting SCP entry" })
    }
})

//Edit, Still needs testing 
router.get('/scp/:id/edit', async (req, res) => {
    try {
        const { id } = req.params
        const scp = await SCP.findOne({ id })

        res.status(200).json(scp)
    } catch (error) {
        res.status(500).json({ "message": "error finding SCP entry update" })
    }

})


router.put('/scp/:id', async (req, res) => {
    try {
        const { id } = req.params
        const { name, location, date, image, description, containment } = req.body
        await SCP.findByIdAndUpdate(id, req.body)

        res.status(300).redirect(`/scp/${req.params.id}`)
    } catch (error) {
        res.status(500).json({ "message": "error updating SCP entry" })
    }
})


// SCP create page labeled roughly "New Archive Entry", tested and works
router.post('/new_entry', async (req, res) => {
    try {
        const { id, name, location, date, image, description, containment } = req.body

        const createNewSCPEntry = await new SCP({
            id,
            name,
            location,
            date,
            image,
            description,
            containment
        }).save()

        res.status(200).json({ 'message': 'New SCP entry added'})
    } catch (error) {
        res.status(400).json({ "message": "error adding SCP entry" })
    }
})

module.exports = router