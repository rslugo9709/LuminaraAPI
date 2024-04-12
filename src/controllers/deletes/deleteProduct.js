const axios = require("axios");
const { Op } = require('sequelize');

const {Producto} = require("../../db");

//Aqui se ejecuta el borrado logico, que no destruye el registro sino que cambia 
async function deleteProductById(req, res){


    const {id} = req.query;
    const borrado = true; 
    try {
        const producto = await Producto.findByPk(id)
        
        if (!producto) {
            
            return res.status(404).json({ message: error.message });
        }
        await producto.update({ borrado });


        return res.status(200).json({message: "producto borrado existosamente"})
    } catch (error) {
        
        res.status(500).json({message: error.message})

    }

}


module.exports = {deleteProductById};