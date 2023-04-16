const AulasController = require('../Controllers/AulasController');
const auth = require('../util/auth');

module.exports = (app) => {
    app.get('/Aulas', AulasController.getAulas);
    app.post('/Aulas', AulasController.createAulas);
    app.put('/Aulas/:id',AulasController.updateAulas);
    app.delete('/Aulas/:id', AulasController.deleteAulas);
}
