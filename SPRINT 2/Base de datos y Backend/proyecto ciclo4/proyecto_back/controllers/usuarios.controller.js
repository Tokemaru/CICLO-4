const Usuario = require("../models/usuarios.model")
let response = {
    msg: "",
    exito: false
}

exports.create = function(req,res){
    let usuario = new Usuario({
        nombre: req.body.nombre,
        apellidos: req.body.apellidos,
        mail: req.body.mail,
        genero: req.body.genero
    })

    usuario.save(function(err){
        if(err){
            console.log = false,
            response.exito = false, 
            response.msg = "Error al guardar el usuario"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "El usuario se guardo correctamente"
        res.json(response)
        
    })
}

exports.find = function(req,res){
    Usuario.find(function(err, usuarios){
        res.json(usuarios)
    })
}

exports.findOne = function(req,res){
    Usuario.findOne({_id: req.params.id},function(err, usuario){
        res.json(usuario)
    })
}

exports.update = function(req,res){
    let usuario = {
        nombre: req.body.nombre,
        apellidos: req.body.apellidos,
        mail: req.body.mail,
        genero: req.body.genero
    }

    Usuario.findByIdAndUpdate(req.params.id, {$set: usuario}, function(err){
        if (err){
            console.error(err),
            response.exito = false, 
            response.msg = "Error al modificar el usuario"
            res.json(response)
            return;
        }

        response.exito = true, 
        response.msg = "El usuario modificado correctamente"
        res.json(response)

    })


}

exports.remove = function(req,res){
    Usuario.findByIdAndRemove({_id: req.params.id}, function(err){
        if (err){
            console.error(err),
            response.exito = false,
            response.msg = "Error al eliminar el usuario"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "El usuario eliminado correctamente"
        res.json(response)
    })
}


