const axios = require("axios");
const { Op } = require('sequelize');

const {User} = require("../../db");


async function updateUser(req, res){

    const {username, password, id} = req.body;
    let obj ={
        username: username,
        password: password
    }
    try {
        const user = await User.findByPk(id)

        if (!user) {
            
            return res.status(404).json({ message: "Usuario no encontrado" });
        }
        
        


        await user.update(obj);


        return res.status(200).json({message: "Usuario actualizado exitosamente"})
    } catch (error) {
        
        res.status(500).json({message: error.message})

    }

}


module.exports = {updateUser};