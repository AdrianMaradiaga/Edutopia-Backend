const Contabilidad = require('../Models/Contabilidad');

exports.getContabilidad= async (req, res) => {
    try{
        const mensajes = await Contabilidad.find();
        res.send(mensajes);
    }catch(err){
        console.error('hubo: ',err);
        res.status(500).send('error en Servidor');
    }
}

exports.createContabilidad = async(req, res) =>{
    try{
        const newContabilidad = new Contabilidad({
            Contabilidad_id: req.body.contabilidad_id,
            Fecha: req.body.fecha,
            Transaccion: req.body.transaccion,
            Descripcion: req.body.descripcion
        });
        const savedContabilidad = await newContabilidad.save();
        res.status(200).send(savedContabilidad);
    }catch(err){
        console.error('createContabilidad: Hubo un error: ', err);
        res.status(500).send('Error en Servidor');
    }
}

exports.updateContabilidad = async(req, res) => {
    try{
        const { id } = req.params;
        const updateContabilidad = ({
            Contabilidad_id: req.body.contabilidad_id,
            Fecha: req.body.fecha,
            Transaccion: req.body.transaccion,
            Descripcion: req.body.descripcion
        });
        const updatedContabilidad = await Contabilidad.findByIdAndUpdate(
            id,
            updateContabilidad,
        );

        res.status(200).send(updatedContabilidad);        
    }catch(err){
        console.error('updateContabilidad: Hubo un error: ', err);
        res.status(500).send('Error en Servidor');
    }
}

exports.deleteContabilidad = async(req, res) => {
    try{
        const { id } = req.params;        
        const deletedContabilidad = await Contabilidad.findByIdAndDelete(id);     
        if(deletedContabilidad){
            res.status(200).send(deletedContabilidad);
        } else {
            res.status(404).send(`No se encontró un Contabilidad con Id: ${id}`);
        }        
    }catch(err){
        console.error('deleteContabilidad: Hubo un error: ', err);
        res.status(500).send('Error en Servidor');
    }
}