const mongoose = require('mongoose');

const ProfesoresSchema = new mongoose.Schema({
    Profesores_id: String,
    Nombre: String,
    Especialidad: String,
    Estado: String
});

const Profesores = mongoose.model('Profesores', ProfesoresSchema);
module.exports = Profesores;