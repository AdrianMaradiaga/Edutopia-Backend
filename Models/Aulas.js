const mongoose = require('mongoose');

const AulasSchema = new mongoose.Schema({
    Aulas_id: String,
    Capacidad: Number,
});

const Aulas = mongoose.model('Aulas', AulasSchema);
module.exports = Aulas;