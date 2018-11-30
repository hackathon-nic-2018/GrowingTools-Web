const express = require('express');
const path = require('path')
const handlebars = require('express-handlebars')
const mssql=require('mssql');
const app = express();
const router=require('./routes/rutas');
const config=require('./model/config')
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
app.use(require('./routes/index'));
app.use(router);


//  Static Files
app.use(express.static(path.join(__dirname, 'assets')))

app.use(function (req, res, next) {
    var err = new Error('No Encontrado: '+ req.method + ":" + req.originalUrl);
    err.status = 404;
    next(err);
});

//  Server is listenning
app.listen(app.get('PORT'), () => {
    console.log(`Server on PORT ${app.get('PORT')}`)
});

const connection=mssql.connect(config,function(err,res){
    if(err){
        throw err;
    }else{
        console.log('Base de datos Activada');
    }   
});