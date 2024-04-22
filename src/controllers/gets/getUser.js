const axios = require("axios");
const { Op } = require('sequelize');

const {Cliente,User} = require("../../db");

async function getUser(req, res){


    const {username} = req.query;
   

    try {
        const user = await User.findOne({
            where: {
                username: username
            },
            include: [
                {
                    model: Cliente,
                    as: 'cliente',
                    attributes: ["id", "nombre"]
                }
            ]
            
        })

        return res.status(200).json(user)
    } catch (error) {
        
        res.status(500).json({message: error.message})

    }

}


module.exports = {getUser};
