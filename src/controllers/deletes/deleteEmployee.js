const axios = require("axios");
const { Op } = require('sequelize');

const {Cliente, Empleado} = require("../../db");

//Aqui se ejecuta el borrado logico, que no destruye el registro sino que cambia 
async function deleteEmpleadoById(req, res){


    const {id} = req.query;
    const borrado = true;
    try {
        const empleado = await Empleado.findByPk(id)
        
        if (!empleado) {
            
            return res.status(404).json({ message: error.message });
        }
        await empleado.update({ borrado });


        return res.status(200).json({message: "empleado borrado existosamente"})
    } catch (error) {
        
        res.status(500).json({message: error.message})

    }

}


module.exports = {deleteEmpleadoById};