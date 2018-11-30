const express = require('express')
const router = express.Router();
const app = express();
const mssql = require('mssql');

app.use(function(req,res,next){
    //puede ser Accesado desde cualquier origen 
    res.setHeader('Access-Control-Allow-Origin','*');
    res.header('Acces-Control-Allow-Headers','Origin, X-Requested-with, Content-Type, Accept', 'application/json','text/json');
   
    //Dandole acceso a los metodos 
    res.header('Access-Control-Allow-Methods','POST,GET,PUT,DELETE,OPTIONS');

    next();
});

router.get('/api/Empresa', (request,res,next) => {
    let  req=new mssql.Request();
    req.query('select * from Empresas',function(err,result){
     if(err){
        return next(err);
     } 
      
     let data={};
     data=result.recordset;
     res.send(data);
    });
});

module.exports = router;

