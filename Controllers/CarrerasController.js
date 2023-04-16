const Carreras = require('../Models/Carreras');

exports.getCarreras= async (req, res) => {
    try{
        const mensajes = await Carreras.find();
        res.send(mensajes);
    }catch(err){
        console.error('hubo: ',err);
        res.status(500).send('error en Servidor');
    }
}

exports.createCarreras = async(req, res) =>{
    try{
        const newCarreras = new Carreras({
            Carreras_id: req.body.carreras_id,
            Nombre: req.body.nombre,
            Brochure: req.body.brochure,
            Duracion: req.body.duracion,
        });
        const savedCarreras = await newCarreras.save();
        res.status(200).send(savedCarreras);
    }catch(err){
        console.error('createCarreras: Hubo un error: ', err);
        res.status(500).send('Error en Servidor');
    }
}

exports.updateCarreras = async(req, res) => {
    try{
        const { id } = req.params;
        const updateCarreras = ({
            Carreras_id: req.body.carreras_id,
            Nombre: req.body.nombre,
            Brochure: req.body.brochure,
            Duracion: req.body.duracion
        });
        const updatedCarreras = await Carreras.findByIdAndUpdate(
            id,
            updateCarreras,
        );

        res.status(200).send(updatedCarreras);        
    }catch(err){
        console.error('updateCarreras: Hubo un error: ', err);
        res.status(500).send('Error en Servidor');
    }
}

exports.deleteCarreras = async(req, res) => {
    try{
        const { id } = req.params;        
        const deletedCarreras = await Carreras.findByIdAndDelete(id);     
        if(deletedCarreras){
            res.status(200).send(deletedCarreras);
        } else {
            res.status(404).send(`No se encontró un Clases con Id: id`);
        }        
    }catch(err){
        console.error('deleteCarreras: Hubo un error: ', err);
        res.status(500).send('Error en Servidor');
    }
}