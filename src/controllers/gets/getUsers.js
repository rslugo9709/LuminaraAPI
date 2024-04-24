const axios = require("axios");
const { Op } = require('sequelize');

const {Cliente, User} = require("../../db");

async function getUsers(req, res){



    try {
        const usuarios = await User.findAll({
            where: {
                borrado: false // Exclude clients with deleted: true
              },
            include: [
                {
                    model: Cliente,
                    as: "client",
                    attributes: ["id"]
                }
            ],
        })

        return res.status(200).json(usuarios)
    } catch (error) {
        
        res.status(500).json({message: error.message})

    }

}


module.exports = {getUsers};