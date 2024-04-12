const axios = require("axios");
const { Op } = require('sequelize');

const {Empleado} = require("../../db");


async function updateEmployee(req, res){

    const {id, nombre, telefono, correo, direccion, salario, cargo, fechaIngreso } = req.body;

    try {
        const empleado = await Empleado.findByPk(id)

        if (!empleado) {
            
            return res.status(404).json({ message: error.message });
        }
        //Validamos que no haya llegado nada vacio, en caso tal se coloca la informacion original
        if(!nombre){
            nombre = empleado.nombre;
        }
        if(!telefono){
            telefono = empleado.telefono;
        }
        if(!correo){
            direccion = empleado.direccion;
        }
        if(!salario){
            salario = empleado.salario;
        }
        if(!cargo){
            cargo = empleado.cargo;
        }
        if(!fechaIngreso){
            fechaIngreso = empleado.fechaIngreso;
        }


  
        await empleado.update({ nombre, telefono, correo, direccion, salario, cargo, fechaIngreso });


        return res.status(200).json({message: "Empleado actualizado exitosamente"})
    } catch (error) {
        
        res.status(500).json({message: error.message})

    }

}


module.exports = {updateEmployee};