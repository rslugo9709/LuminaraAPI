const axios = require("axios");
const { Op } = require('sequelize');

const {Cliente, Empleado} = require("../../db");

async function getClientById(req, res){


    const {id} = req.query;
    

    try {
        const cliente = await Cliente.findByPk({where:{
            id: id,
            borrado: false
         }})

        return res.status(200).json(cliente)
    } catch (error) {
        
        res.status(500).json({message: error.message})

    }

}


module.exports = {getClientById};
