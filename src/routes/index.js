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


router.get('/dashboard', (request, response) => {
    response.render('dashboard');
})

router.get('/empleados', (request, response) => {
    response.render('empleados');
})



module.exports = router;