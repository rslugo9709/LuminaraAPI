const axios = require("axios");
const { Op } = require('sequelize');

const {Cliente} = require("../../db");


async function updateClient(req, res){

    const {id, nombre,tDocumento, nDocumento, telefono, correo, direccion, MPago } = req.body;

    try {
        const cliente = await Cliente.findByPk(id)

        if (!cliente) {
            
            return res.status(404).json({ message: error.message });
        }
        
        


        

        
        await cliente.update({ nombre,tDocumento, nDocumento, telefono, correo, direccion, MPago });


        return res.status(200).json({message: "Cliente actualizado exitosamente"})
    } catch (error) {
        
        res.status(500).json({message: error.message})

    }

}


module.exports = {updateClient};