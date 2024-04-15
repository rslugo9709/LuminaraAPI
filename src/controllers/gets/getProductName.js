const axios = require("axios");
const { Op } = require('sequelize');

const {Cliente,Producto, Empleado} = require("../../db");

async function getProductName(req, res){


    const {name} = req.query;
    const fName= name.toLowerCase()

    try {
        const productos = await Producto.findAll({
            where: {
                name:{
                    [Op.iLike]: `%${fName}%`
                },
                borrado: false
            },
            include: [
                { 
                    model: Producto,
                    attributes: ["id", "nombre"]
                }
            ],
            limit: 15
        })

        return res.status(200).json(productos)
    } catch (error) {
        
        res.status(500).json({message: error.message})

    }

}


module.exports = {getProductName};