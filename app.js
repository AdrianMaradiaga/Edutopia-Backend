/*libreria express, implementacion para node para poder hacer servicios*/
const express = require('express');
const mongoose = require('mongoose');

//Rutas hacia los diferentes controladores, los cuales hacen referencia a los modelos establecidos
const ClasesRoutes = require('./Routes/ClasesRoutes');
const CarrerasRoutes = require('./Routes/CarrerasRoutes');
const AlumnosRoutes = require('./Routes/AlumnosRoutes')
const ProfesoresRoutes = require('./Routes/ProfesoresRoutes')
const AulasRoutes = require('./Routes/AulasRoutes')
const AdministracionRoutes = require('./Routes/AdministracionRoutes')
const ContabilidadRoutes = require('./Routes/ContabilidadRoutes')

mongoose.connect('mongodb://127.0.0.1:27017/Edutopia', {useNewUrlParser: true})
.then(()=>{
    console.log('Conectado a MongoDB');
}).catch((err) => {
    console.log('Error conectandose a MongoDB:', err);
});


/*no nos estorba porque es parte de nuestro primer servicio*/
const app = express();
app.use(express.json());

ClasesRoutes(app);
CarrerasRoutes(app);
AlumnosRoutes(app);
ProfesoresRoutes(app);
AulasRoutes(app);
AdministracionRoutes(app);
ContabilidadRoutes(app);

/*esto es lo que nos permite correr como servidor, el servidor de node se va a poner a escuchar las peticiones en el puerto 3000*/
app.listen(3016, ()=> {
    console.log('El servidor inicio en el puerto 3016');
});


