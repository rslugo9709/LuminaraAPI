const axios = require("axios");
const { Op } = require('sequelize');

const {Cliente, Empleado} = require("../../db");

async function getEmpleados(req, res){



    try {
        const empleados = await Empleado.findAll({
            
            include: [
                {
                    model: Cliente,
                    attributes: ["id", "nombre"]
                }
            ],
        })

        return res.status(200).json(empleados)
    } catch (error) {
        
        res.status(500).json({message: error.message})

    }

}


module.exports = {getEmpleados};