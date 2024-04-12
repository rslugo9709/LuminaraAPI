const axios = require("axios");
const { Op } = require('sequelize');

const {Cliente, Producto} = require("../../db");

async function getProducts(req, res){



    try {
        const productos = await Producto.findAll({
            
            include: [
                {
                    model: Cliente,
                    attributes: ["id", "nombre"]
                }
            ],
        })

        return res.status(200).json(productos)
    } catch (error) {
        
        res.status(500).json({message: error.message})

    }

}


module.exports = {getProducts};