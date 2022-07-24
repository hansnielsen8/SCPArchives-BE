const db = require('../models')

db.SCP.create([{
    id: '44',
    name: 'Mad Tv',
    location: 'Surrey, ND',
    date: '2002-12-09',
    image: '../public/Classified.jpg',
    description: 'Residence of a small town started going mad which attracted local media attention. The cause of this event is unknown.',
    containment: 'Upon unplugging tv, everybody return to normal. Tv is stored at main facility.'
}, {
    id: '09',
    name: 'Red Ice',
    location: 'Nome, AL',
    date: '1964-11-05',
    image: 'https://scp-wiki.wdfiles.com/local--files/scp-009/009.png',
    description: 'The object resembles icicles but with a distinct red hue. Red Ice can contaminate normal water. Red Ice can change the chemical composition of affected matter.',
    containment: 'Contained within a sealed storage tank.'
}])
.then(() => {
    console.log('Success!')
    process.exit()
})
.catch(err => {
    console.log('Failure!', err)
    process.exit()
})