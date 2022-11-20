const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductosSchema = new Schema({
    id_prod:{type: String, required: true, max:60},
    genero:{type: String, required: true, max:60},
    motivo:{type: String, required: true, max:40},
    talla:{type: String, required: true, max:20},
    color:{type: String, required: true, max:20},
    descri:{type: String, required: true, max:200},
    precio:{type: Number, required: false, max:150000}
});

module.exports = mongoose.model("productos", ProductosSchema);
