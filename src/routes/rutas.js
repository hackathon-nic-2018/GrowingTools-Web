'use strict'
const Express=require('Express');
const app=Express();
const router = Express.Router();
//const bodyparser=require('body-parser');
 const mssql=require('mssql');
 
//Asignandole accesos al body parser
//app.use(bodyparser.urlencoded({
    //extended:false
//}));

//accesos al consumo de la API
app.use(function(req,res,next){
    //puede ser Accesado desde cualquier origen 
    res.setHeader('Access-Control-Allow-Origin','*');
    res.header('Acces-Control-Allow-Headers','Origin, X-Requested-with, Content-Type, Accept', 'application/json','text/json');
   
    //Dandole acceso a los metodos 
    res.header('Access-Control-Allow-Methods','POST,GET,PUT,DELETE,OPTIONS');

    next();
});
//Definiendo rutas de las vistas 
//Vista perfil Usuari

//----------------------------------------------------------------------------------//
var data={};
//Rutas de la API
router.get('/api/Inventario', function(req,res,next){
    var req=new mssql.Request();
    req.query('SELECT * FROM Inventario',function(err,result,next){
        if(err)
            return next(err);
        data=result.recordset;
        res.send(data);    
    })
});

router.get('/api/Facturas', function(req,res,next){
    var req=new mssql.Request();
    req.query('SELECT * FROM FacturasT',function(err,result,next){
        if(err)  
            return next(err);
        data=result.recordset;
        res.send(data);    
    })
});

router.get('/api/Historial',function(req,res,next){
    var req=new mssql.Request();
    req.query('SELECT * FROM Historial_movimientos_inventario',function(err,res,next){
        if(err)
            return next(err)
        data=result.recordset;
        res.send(data);
    })
})


router.get('/api/Usuarios', function(req, res,next){
    var req=new mssql.Request();
    req.query('SELECT * FROM Usuarios',function(err,result,next){
    if(err)
        return next(err);
    data=result.recordset;
    res.send(data);    
    });
})

router.get('/api/Cliente'),function(req,res,next){
    var req=new mssql.Request();
    if(err)
        return next(err);
    data=result.recordset;
    res.send(data);
}
router.get('/api/Empresa',function(req,res,next){
    var req=new mssql.Request();
    req.query('SELECT * FROM Empresas',function(err,result,next){
        if(err)
         return next(err);

     
     data=result.recordset;
     res.send(data);
    });
   
});


//Muestra las empresas

//

module.exports = router;