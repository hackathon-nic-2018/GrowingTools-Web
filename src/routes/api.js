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
    req.query(`select I.ID_inventario,I.Precio_venta,I.Costo,C.Categoria,Cantidad,I.Nombre,P.NombreProveedor
    from Inventario as I
    inner join Categoria as C on C.ID_categoria = I.ID_categoria
    inner join Proveedores as P on P.ID_proveedor = I.ID_proveedor
    where I.ID_empresa = (select Emp.ID_empresa from Empresas as Emp where Empresa = 'Paisanos')`,function(err, result){
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

