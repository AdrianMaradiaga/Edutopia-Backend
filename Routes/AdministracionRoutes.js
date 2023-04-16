const AdministracionController = require('../Controllers/AdministracionController');
const auth = require('../util/auth');

module.exports = (app) => {
    app.get('/Administracion', AdministracionController.getAdministracion);
    app.post('/Administracion', AdministracionController.createAdministracion);
    app.put('/Administracion/:id',AdministracionController.updateAdministracion);
    app.delete('/Administracion/:id', AdministracionController.deleteAdministracion);
}
