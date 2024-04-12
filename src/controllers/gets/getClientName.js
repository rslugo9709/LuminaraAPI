const axios = require("axios");
const { Op } = require('sequelize');

const {Cliente, Empleado} = require("../../db");

async function getClientByName(req, res){


    const {name} = req.query;
    const fName= name.toLowerCase()

    try {
        const clientes = await Cliente.findAll({
            where: {
                nombre:{
                    [Op.iLike]: `%${fName}%`
                }
            },
            include: [
                {
                    model: Empleado,
                    attributes: ["id", "nombre"]
                }
            ],
            limit: 15
        })

        return res.status(200).json(clientes)
    } catch (error) {
        
        res.status(500).json({message: error.message})

    }

}


module.exports = {getClientByName};
