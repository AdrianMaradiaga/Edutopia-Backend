const mongoose = require('mongoose');

const CarrerasSchema = new mongoose.Schema({
    Carreras_id: String,
    Nombre: String,
    Brochure: String,
    Duracion: String,
});

const Carreras = mongoose.model('Carreras', CarrerasSchema);
module.exports = Carreras;