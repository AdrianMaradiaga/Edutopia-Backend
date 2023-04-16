const CarrerasController = require('../Controllers/CarrerasController');
const auth = require('../util/auth');

module.exports = (app) => {
    app.get('/Carreras', CarrerasController.getCarreras);
    app.post('/Carreras', CarrerasController.createCarreras);
    app.put('/Carreras/:id',CarrerasController.updateCarreras);
    app.delete('/Carreras/:id', CarrerasController.deleteCarreras);
}
