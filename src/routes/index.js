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
<<<<<<< HEAD
router.get('/inventario', (request, response) => {
    response.render('inventario');
})
router.get('/grafico', (request, response) => {
    response.render('grafico');
=======
router.get('/ventas', (request, response) => {
    response.render('ventas');
>>>>>>> 412deb8a14c1de9cd9985840f862412a606f0b24
})



module.exports = router;