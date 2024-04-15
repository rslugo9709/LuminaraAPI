const axios = require("axios");
const { Op } = require('sequelize');

const {Cliente, Empleado} = require("../../db");

async function getEmpleadoName(req, res){


    const {name} = req.query;
    const fName= name.toLowerCase()

    try {
        const empleado = await Empleado.findAll({
            where: {
                name:{
                    [Op.iLike]: `%${fName}%`
                },
                borrado: false
            },
            include: [
                {
                    model: Cliente,
                    attributes: ["id", "nombre"]
                }
            ],
            limit: 15
        })

        return res.status(200).json(empleado)
    } catch (error) {
        
        res.status(500).json({message: error.message})

    }

}


module.exports = {getEmpleadoName};