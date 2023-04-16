const mongoose = require('mongoose');

const AdministracionSchema = new mongoose.Schema({
    Administracion_id: String,
    Nombre: String,
    Rol: String,
    Departamento: String
});

const Administracion = mongoose.model('Administracion', AdministracionSchema);
module.exports = Administracion;