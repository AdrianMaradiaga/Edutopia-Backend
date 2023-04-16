const mongoose = require('mongoose');

const ClasesSchema = new mongoose.Schema({
    Clases_id: String,
    Nombre: String,
    Horario: String,
    Seccion: String,
    Parcial: String
});

const Clases = mongoose.model('Clases', ClasesSchema);
module.exports = Clases;