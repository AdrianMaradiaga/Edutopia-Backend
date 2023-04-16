const Aulas = require('../Models/Aulas');

exports.getAulas= async (req, res) => {
    try{
        const mensajes = await Aulas.find();
        res.send(mensajes);
    }catch(err){
        console.error('hubo: ',err);
        res.status(500).send('error en Servidor');
    }
}

exports.createAulas = async(req, res) =>{
    try{
        const newAulas = new Aulas({
            Aulas_id: req.body.aulas_id,
            Capacidad: req.body.capacidad
        });
        const savedAulas = await newAulas.save();
        res.status(200).send(savedAulas);
    }catch(err){
        console.error('createAulas: Hubo un error: ', err);
        res.status(500).send('Error en Servidor');
    }
}

exports.updateAulas = async(req, res) => {
    try{
        const { id } = req.params;
        const updateAulas = ({
            Aulas_id: req.body.aulas_id,
            Capacidad: req.body.capacidad
        });
        const updatedAulas = await Aulas.findByIdAndUpdate(
            id,
            updateAulas,
        );

        res.status(200).send(updatedAulas);        
    }catch(err){
        console.error('updateAulas: Hubo un error: ', err);
        res.status(500).send('Error en Servidor');
    }
}

exports.deleteAulas = async(req, res) => {
    try{
        const { id } = req.params;        
        const deletedAulas = await Aulas.findByIdAndDelete(id);     
        if(deletedAulas){
            res.status(200).send(deletedAulas);
        } else {
            res.status(404).send(`No se encontró un Alumno con Id: ${id}`);
        }        
    }catch(err){
        console.error('deleteAulas: Hubo un error: ', err);
        res.status(500).send('Error en Servidor');
    }
}