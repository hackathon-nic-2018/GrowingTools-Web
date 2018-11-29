const express = require('express');
const path = require('path')
const handlebars = require('express-handlebars')

const app = express();

//  Settings
app.set('PORT', process.env.PORT || 3000)
app.set('views', path.join(__dirname, 'views'))

app.engine('.hbs', handlebars({
    defaultLayout: 'template',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
})) 

app.set('view engine', '.hbs')

// //  Middlewares


// Routes
app.use(require('./routes/index'))

//  Static Files
app.use(express.static(path.join(__dirname, 'assets')))


//  Server is listenning
app.listen(app.get('PORT'), () => {
    console.log(`Server on PORT ${app.get('PORT')}`)
})