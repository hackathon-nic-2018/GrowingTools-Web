const express = require('express')
const router = express.Router();

router.get('/', (request, response) => {
    response.render('index')
})

router.get('/empleadoRegister', (request, response) => {
    response.render('empleadoRegister')
})

module.exports = router;