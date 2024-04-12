const axios = require("axios");
const { Op } = require('sequelize');

const {Cliente, Empleado} = require("../../db");

async function getClients(req, res){



    try {
        const clientes = await Cliente.findAll({
            
            include: [
                {
                    model: Empleado,
                    attributes: ["id", "nombre"]
                }
            ],
        })

        return res.status(200).json(clientes)
    } catch (error) {
        
        res.status(500).json({message: error.message})

    }

}


module.exports = {getClients};