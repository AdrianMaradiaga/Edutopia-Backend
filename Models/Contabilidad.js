const mongoose = require('mongoose');

const ContabilidadSchema = new mongoose.Schema({
    Contabilidad_id: String,
    Fecha: String,
    Transaccion: String,
    Descripcion: String
});

const Contabilidad = mongoose.model('Contabilidad', ContabilidadSchema);
module.exports = Contabilidad;