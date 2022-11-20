const Producto = require("../models/productos.model")

let response = {
    msg: "",
    exito: false
}

exports.create = function(req,res){
    let producto = new Producto({
        id_prod: req.body.id_prod,
        genero: req.body.genero,
        motivo: req.body.motivo,
        talla: req.body.talla,
        color: req.body.color,
        descri: req.body.descri,
        precio: req.body.precio
    })

    producto.save(function(err){
        if(err){
            console.error(err),
            response.exito = false,
            response.msg = "Error al guardar el producto"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "El producto se guardo correctamente"
        res.json(response)
        
    })
}

exports.find = function(req,res){
    Producto.find(function(err, productos){
        res.json(productos)
    })
}

exports.findOne = function(req,res){
    Producto.findOne({_id: req.params.id},function(err, producto){
        res.json(producto)
    })
}

exports.update = function(req,res){
    let producto = {
        id_prod: req.body.id_prod,
        genero: req.body.genero,
        motivo: req.body.motivo,
        talla: req.body.talla,
        color: req.body.color,
        descri: req.body.descri,
        precio: req.body.precio
    }

    Ropa.findByIdAndUpdate(req.params.id, {$set: producto}, function(err){
        if (err){
            console.error(err),
            response.exito = false, 
            response.msg = "Error al modificar el producto"
            res.json(response)
            return;
        }

        response.exito = true, 
        response.msg = "El producto se modificado correctamente"
        res.json(response)

    })


}

exports.remove = function(req,res){
    Producto.findByIdAndRemove({_id: req.params.id}, function(err){
        if (err){
            console.error(err),
            response.exito = false,
            response.msg = "Error al eliminar el producto"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "El producto se ha eliminado correctamente"
        res.json(response)
    })
}
