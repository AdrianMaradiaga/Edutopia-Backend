const AlumnosController = require('../Controllers/AlumnosController');
const auth = require('../util/auth');

module.exports = (app) => {
    app.get('/Alumnos', AlumnosController.getAlumnos);
    app.post('/Alumnos', AlumnosController.createAlumnos);
    app.put('/Alumnos/:id',AlumnosController.updateAlumnos);
    app.delete('/Alumnos/:id', AlumnosController.deleteAlumnos);
}
