const axios = require("axios");
const { Op } = require('sequelize');

const {Empleado} = require("../../db");

async function getEmpleadoById(req, res){


    const {id} = req.query;
    

    try {
        const empleado = await Empleado.findByPk({where:{
            id: id,
            borrado: false
         }})

        return res.status(200).json(empleado)
    } catch (error) {
        
        res.status(500).json({message: error.message})

    }

}


module.exports = {getEmpleadoById};