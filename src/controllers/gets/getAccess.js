const axios = require("axios");
const { Op } = require('sequelize');

const {Cliente,User} = require("../../db");

async function getAccess(req, res){


    const {username, password} = req.query;
   
    var obj = {
        encontrado: false
    }
    try {
        const user = await User.findOne({
            where: {
                username: username
            }
            
        })
        if(user.username== username && user.password == password){
            obj.encontrado = true;
        }
        return res.status(200).json(obj)
    } catch (error) {
        
        res.status(500).json({message: error.message})

    }

}


module.exports = {getAccess};