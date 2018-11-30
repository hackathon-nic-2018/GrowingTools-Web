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

router.get('/api/Inventario', function(request,res, next){
    let req = new mssql.Request();
    req.query(`
    select Emp.Empresa,I.Nombre,I.Cantidad,I.Porcentaje_critico,I.Costo,I.Descontinuado
    ,I.Ilustracion,P.NombreProveedor,C.Categoria
    from Inventario as I 
    inner join Empresas as Emp  on Emp.ID_empresa = I.ID_empresa
    inner join Proveedores as P on I.ID_proveedor = P.ID_proveedor
    inner join Categoria as C on C.ID_categoria = I.ID_categoria
   `,function(err, result){
        if(err) {
            return next(err);
        }
            
        let data={};
        data = result.recordset;
        res.send(data);    
    });
});
// ------------------------
router.get('/api/Facturas', function(request,res,next){
    let req=new mssql.Request();
    req.query('SELECT * FROM FacturasT',function(err,result){
        if(err)  
            return next(err);
        data = result.recordset;
        res.send(data);    
    })
});

router.get('/api/Historial',function(request,res,next){
    var req = new mssql.Request();
    req.query('SELECT * FROM Historial_movimientos_inventario',function(err,result){
        if(err)
            return next(err)
        data = result.recordset;
        res.send(data);
    })
})


router.get('/api/Usuarios', function(request, res,next){
    let req=new mssql.Request();
    req.query('SELECT * FROM Usuarios',function(err,result){
    if(err)
        return next(err);
    data = result.recordset;
    res.send(data);    
    });
})


module.exports = router;

