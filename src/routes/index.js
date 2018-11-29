const express = require('express')
const router = express.Router();

router.get('/', (request, response) => {
    response.render('index')
})

router.get('/hola', (request, response) => {
    response.render('hola')
})

module.exports = router;