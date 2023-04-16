const Alumnos = require('../Models/Alumnos');

exports.getAlumnos= async (req, res) => {
    try{
        const mensajes = await Alumnos.find();
        res.send(mensajes);
    }catch(err){
        console.error('hubo: ',err);
        res.status(500).send('error en Servidor');
    }
}

exports.createAlumnos = async(req, res) =>{
    try{
        const newAlumnos = new Alumnos({
            Alumnos_id: req.body.alumnos_id,
            Nombre: req.body.nombre,
            Nacimiento: req.body.nacimiento,
            NombrePadre: req.body.padre,
            Promedio: req.body.promedio,
            Estado: req.body.estado
        });
        const savedAlumnos = await newAlumnos.save();
        res.status(200).send(savedAlumnos);
    }catch(err){
        console.error('createAlumnos: Hubo un error: ', err);
        res.status(500).send('Error en Servidor');
    }
}

exports.updateAlumnos = async(req, res) => {
    try{
        const { id } = req.params;
        const updateAlumnos = ({
            Alumnos_id: req.body.alumnos_id,
            Nombre: req.body.nombre,
            Nacimiento: req.body.nacimiento,
            NombrePadre: req.body.padre,
            Promedio: req.body.promedio,
            Estado: req.body.estado
        });
        const updatedAlumnos = await Alumnos.findByIdAndUpdate(
            id,
            updateAlumnos,
        );

        res.status(200).send(updatedAlumnos);        
    }catch(err){
        console.error('updateAlumnos: Hubo un error: ', err);
        res.status(500).send('Error en Servidor');
    }
}

exports.deleteAlumnos = async(req, res) => {
    try{
        const { id } = req.params;        
        const deletedAlumnos = await Alumnos.findByIdAndDelete(id);     
        if(deletedAlumnos){
            res.status(200).send(deletedAlumnos);
        } else {
            res.status(404).send(`No se encontró un Alumno con Id: ${id}`);
        }        
    }catch(err){
        console.error('deleteAlumnos: Hubo un error: ', err);
        res.status(500).send('Error en Servidor');
    }
}