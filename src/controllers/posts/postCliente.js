const axios = require("axios");

const { Sequelize } = require('sequelize');
const {Cliente, Producto} = require("../../db");

async function postCliente(req, res){


    try{
    const {nombre, telefono, correo, direccion, activoDesde } = req.body;
    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-US', {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric'
      });
    let objeto = {
        nombre: nombre,
        telefono: telefono,
        correo: correo,
        direccion: direccion,
        activoDesde: formattedDate
    }
    console.log("recibe la info")
    console.log(objeto);
    //si falta algun dato se rechaza
    if(!nombre || !telefono || !correo  || !direccion ){
        return res.status(401).send("Missing info");
    }
    console.log("se verifica que no falte nada")
    let existencia = await revisionExistencia(objeto.nombre)
    if(existencia){
        console.log("se procede a crear el producto")
        const client = await Cliente.findOrCreate({
            where: objeto
        })
        console.log(client)
        let clientI = await Cliente.findAll({     
            where:{
                nombre: nombre
            },
        })
        return res.status(200).json({message:"Cliente creado exitosamente", clientI})
    }else{
        return res.status(400).json({message: "El cliente ya existe!"})
    }


    }catch(error){
        console.log("error aqui")
        return res.status(500).json({message: error.message})
    }
}

async function revisionExistencia(nombre){
    //busco por el nombre en la base de datos
    let exists = await Cliente.findOne({
        where:{
           nombre: nombre
        }
    })
    if(exists){
        console.log("el Cliente existe y no será creado")
        return false;
    }else{
        console.log("Cliente será creado")
        return true;
    }
    
} 

module.exports = {postCliente};