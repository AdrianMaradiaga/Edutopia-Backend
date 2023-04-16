const ProfesoresController = require('../Controllers/ProfesoresController');
const auth = require('../util/auth');

module.exports = (app) => {
    app.get('/Profesores', ProfesoresController.getProfesores);
    app.post('/Profesores', ProfesoresController.createProfesores);
    app.put('/Profesores/:id',ProfesoresController.updateProfesores);
    app.delete('/Profesores/:id', ProfesoresController.deleteProfesores);
}
