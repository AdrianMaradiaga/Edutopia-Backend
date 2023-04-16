const ClasesController = require('../Controllers/ClasesController');
const auth = require('../util/auth');

module.exports = (app) => {
    app.get('/Clases', ClasesController.getClases);
    app.post('/Clases', ClasesController.createClases);
    app.put('/Clases/:id',ClasesController.updateClases);
    app.delete('/Clases/:id', ClasesController.deleteClases);
}
