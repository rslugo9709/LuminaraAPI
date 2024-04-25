const axios = require("axios");
const { Op } = require('sequelize');

const {User} = require("../../db");

//Aqui se ejecuta el borrado logico, que no destruye el registro sino que cambia 
async function deleteUserById(req, res){


    const {username} = req.query;
    const borrado = true; 
    try {
        const user = await User.findByPk(username)
        
        if (!user) {
            
            return res.status(404).json({ message: error.message });
        }
        await user.update({ borrado });


        return res.status(200).json({message: "Usuario borrado existosamente"})
    } catch (error) {
        
        res.status(500).json({message: error.message})

    }

}


module.exports = {deleteUserById};