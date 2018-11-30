const express = require('express')
const router = express.Router();

router.get('/', (request, response) => {
    response.render('index')
})

router.get('/empleado', (request, response) => {
    response.render('empleados')
})

router.get('/grafico', (request, response) => {
    response.render('grafico')
})
router.get('/inventario', (request, response) => {
    response.render('inventario')
})
router.get('/dashboard', (request, response) => {
    response.render('dashboard')
})

module.exports = router;