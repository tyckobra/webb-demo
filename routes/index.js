const express = require('express');
const pool = require('../utils/database');
const router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {

    try {
        const [rows] = await pool
        .promise()
        .query(`SELECT * from demo`);
    
        console.log(rows);

        res.render('index.njk', {
            title: 'Kursdemo',
            intro: 'En demosida för att ge ett litet smakprov på tekniken och vad den kan göra.',
            rows: rows
        });
    } catch (error) {
        console.log(error);
        next();
    }
});

router.get('/test', function(request, response){
    response.render('test.njk', {
        title: 'Gringo',
        text: 'Tycko Bergman'
    });
})

module.exports = router;