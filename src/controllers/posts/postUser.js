const axios = require("axios");

const { Sequelize } = require('sequelize');
const {User} = require("../../db");

async function postUser(req, res){


    try{
    const {username, password } = req.body;
    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-US', {
        month: '2-digit',
        day: '2-digit', 
        year: 'numeric'
      });
    let objeto = {
        username: username,
        password: password,
        activoDesde: formattedDate,
        
    }
    console.log("recibe la info")
    console.log(objeto);
    //si falta algun dato se rechaza
    if(!username || !password){
        return res.status(401).send("Missing info");
    }
    console.log("se verifica que no falte nada")
    let existencia = await revisionExistencia(objeto.username)
    if(existencia){
        console.log("se procede a crear el producto")
        const usuario = await User.findOrCreate({
            where: objeto
        })
        console.log(usuario)
        let userI = await User.findAll({     
            where:{
                username: username
            },
        })
        return res.status(200).json({message:"Usuario creado exitosamente", userI})
    }else{
        return res.status(400).json({message: "El Usuario ya existe!"})
    }


    }catch(error){
        console.log("error aqui")
        return res.status(500).json({message: error.message})
    }
}

async function revisionExistencia(username){
    //busco por el nombre en la base de datos
    let exists = await User.findOne({
        where:{
           username: username
        }
    })
    if(exists){
        console.log("el Usuario existe y no será creado")
        return false;
    }else{
        console.log("Usuario será creado")
        return true;
    }
    
} 

module.exports = {postUser};