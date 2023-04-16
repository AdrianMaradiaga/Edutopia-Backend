const ContabilidadController = require('../Controllers/ContabilidadController');
const auth = require('../util/auth');

module.exports = (app) => {
    app.get('/Contabilidad', ContabilidadController.getContabilidad);
    app.post('/Contabilidad', ContabilidadController.createContabilidad);
    app.put('/Contabilidad/:id',ContabilidadController.updateContabilidad);
    app.delete('/Contabilidad/:id', ContabilidadController.deleteContabilidad);
}
