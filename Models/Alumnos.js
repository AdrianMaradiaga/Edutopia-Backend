const mongoose = require('mongoose');

const AlumnosSchema = new mongoose.Schema({
    Alumnos_id: String,
    Nombre: String,
    Nacimiento: String,
    NombrePadre: String,
    Promedio: String,
    Estado: String
});

const Alumnos = mongoose.model('Alumnos', AlumnosSchema);
module.exports = Alumnos;