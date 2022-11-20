const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UsuariosSchema = new Schema({
    nombre:{type: String, required: true, max:60},
    apellidos:{type: String, required: true, max:40},
    mail:{type: String, required: false, max:70},
    genero:{type: String, required:false, max:40}
});

module.exports = mongoose.model("usuarios", UsuariosSchema);
