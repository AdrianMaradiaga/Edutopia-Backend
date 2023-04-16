const Clases = require('../Models/Clases');

exports.getClases= async (req, res) => {
    try{
        const mensajes = await Clases.find();
        res.send(mensajes);
    }catch(err){
        console.error('hubo: ',err);
        res.status(500).send('error en Servidor');
    }
}

exports.createClases = async(req, res) =>{
    try{
        const newClases = new Clases({
            Clases_id: req.body.clases_id,
            Nombre: req.body.nombre,
            Horario: req.body.horario,
            Seccion: req.body.seccion,
            Parcial: req.body.parcial
        });
        const savedClases = await newClases.save();
        res.status(200).send(savedClases);
    }catch(err){
        console.error('createClases: Hubo un error: ', err);
        res.status(500).send('Error en Servidor');
    }
}

exports.updateClases = async(req, res) => {
    try{
        const { id } = req.params;
        const updateClases = ({
            Clases_id: req.body.clases_id,
            Nombre: req.body.nombre,
            Horario: req.body.horario,
            Seccion: req.body.seccion,
            Parcial: req.body.parcial
        });
        const updatedClases = await Clases.findByIdAndUpdate(
            id,
            updateClases,
        );

        res.status(200).send(updatedClases);        
    }catch(err){
        console.error('updateClases: Hubo un error: ', err);
        res.status(500).send('Error en Servidor');
    }
}

exports.deleteClases = async(req, res) => {
    try{
        const { id } = req.params;        
        const deletedClases = await Clases.findByIdAndDelete(id);     
        if(deletedClases){
            res.status(200).send(deletedClases);
        } else {
            res.status(404).send(`No se encontró un Clases con Id: id`);
        }        
    }catch(err){
        console.error('deletedClases: Hubo un error: ', err);
        res.status(500).send('Error en Servidor');
    }
}