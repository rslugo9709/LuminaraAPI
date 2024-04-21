const axios = require("axios");
const { Op } = require('sequelize');

const {Empleado} = require("../../db");


async function updateEmployee(req, res){

    const {id, nombre, telefono, correo, direccion, salario, cargo, fechaIngreso, activo } = req.body;
    console.log(id);
    //return res.status(200).json(req.body)
    try {
        const empleado = await Empleado.findByPk(id)

        if (!empleado) {
            
            return res.status(404).json({ message: "Empleado no encontrado"});
        }

  
        await empleado.update({ nombre, telefono, correo, direccion, salario, cargo, fechaIngreso, activo });


        return res.status(200).json({message: "Empleado actualizado exitosamente"})
    } catch (error) {
        
        res.status(500).json({message: error.message})

    }

}


module.exports = {updateEmployee};