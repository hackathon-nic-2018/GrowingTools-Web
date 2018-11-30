const express = require('express')
const router = express.Router();

router.get('/', (request, response) => {
    response.render('index')
})

router.get('/empleadoRegister', (request, response) => {
    response.render('empleadoRegister')
})

router.get('/login', (request, response) => {
    response.render('login');
})

module.exports = router;