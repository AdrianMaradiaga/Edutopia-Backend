const Profesores = require('../Models/Profesores');

exports.getProfesores= async (req, res) => {
    try{
        const mensajes = await Profesores.find();
        res.send(mensajes);
    }catch(err){
        console.error('hubo: ',err);
        res.status(500).send('error en Servidor');
    }
}

exports.createProfesores = async(req, res) =>{
    try{
        const newProfesores = new Profesores({
            Profesores_id: req.body.profesores_id,
            Nombre: req.body.nombre,
            Especialidad: req.body.especialidad,
            Estado: req.body.estado
        });
        const savedProfesores = await newProfesores.save();
        res.status(200).send(savedProfesores);
    }catch(err){
        console.error('createProfesores: Hubo un error: ', err);
        res.status(500).send('Error en Servidor');
    }
}

exports.updateProfesores = async(req, res) => {
    try{
        const { id } = req.params;
        const updateProfesores = ({
            Profesores_id: req.body.profesores_id,
            Nombre: req.body.nombre,
            Especialidad: req.body.especialidad,
            Estado: req.body.estado
        });
        const updatedProfesores = await Profesores.findByIdAndUpdate(
            id,
            updateProfesores,
        );

        res.status(200).send(updatedProfesores);        
    }catch(err){
        console.error('updateProfesores: Hubo un error: ', err);
        res.status(500).send('Error en Servidor');
    }
}

exports.deleteProfesores = async(req, res) => {
    try{
        const { id } = req.params;        
        const deletedProfesores = await Profesores.findByIdAndDelete(id);     
        if(deletedProfesores){
            res.status(200).send(deletedProfesores);
        } else {
            res.status(404).send(`No se encontró un Profesor con Id: ${id}`);
        }        
    }catch(err){
        console.error('deleteProfesores: Hubo un error: ', err);
        res.status(500).send('Error en Servidor');
    }
}