const Administracion = require('../Models/Administracion');

exports.getAdministracion= async (req, res) => {
    try{
        const mensajes = await Administracion.find();
        res.send(mensajes);
    }catch(err){
        console.error('hubo: ',err);
        res.status(500).send('error en Servidor');
    }
}

exports.createAdministracion = async(req, res) =>{
    try{
        const newAdministracion = new Administracion({
            Administracion_id: req.body.administracion_id,
            Nombre: req.body.nombre,
            Rol: req.body.rol,
            Departamento: req.body.departamento
        });
        const savedAdministracion = await newAdministracion.save();
        res.status(200).send(savedAdministracion);
    }catch(err){
        console.error('createAdministracion: Hubo un error: ', err);
        res.status(500).send('Error en Servidor');
    }
}

exports.updateAdministracion = async(req, res) => {
    try{
        const { id } = req.params;
        const updateAdministracion = ({
            Administracion_id: req.body.administracion_id,
            Nombre: req.body.nombre,
            Rol: req.body.rol,
            Departamento: req.body.departamento
        });
        const updatedAdministracion = await Administracion.findByIdAndUpdate(
            id,
            updateAdministracion,
        );

        res.status(200).send(updatedAdministracion);        
    }catch(err){
        console.error('updateAdministracion: Hubo un error: ', err);
        res.status(500).send('Error en Servidor');
    }
}

exports.deleteAdministracion = async(req, res) => {
    try{
        const { id } = req.params;        
        const deletedAdministracion = await Administracion.findByIdAndDelete(id);     
        if(deletedAdministracion){
            res.status(200).send(deletedAdministracion);
        } else {
            res.status(404).send(`No se encontró un Administracion con Id: ${id}`);
        }        
    }catch(err){
        console.error('deleteAdministracion: Hubo un error: ', err);
        res.status(500).send('Error en Servidor');
    }
}