const axios = require("axios");

const { Sequelize } = require('sequelize');
const {Cliente, Producto} = require("../db");

async function postProducto(req, res){


    try{
    const {nombre, fabricante, descripcion, image, categorias, stock,Uvendidas } = req.body;
    let objeto = {
        nombre: nombre,
        description: descripcion,
        fabricante: fabricante,
        categorias:categorias, 
        stock: stock
    }
    console.log("recibe la info")
    console.log(objeto);
    //si falta algun dato se rechaza
    if(!nombre || !descripcion || !categorias  || !fabricante ){
        return res.status(401).send("Missing info");
    }
    console.log("se verifica que no falte nada")
    let existencia = await revisionExistencia(objeto.nombre)
    if(existencia){
        console.log("se procede a crear el producto")
        const product = await Producto.findOrCreate({
            where: {nombre, descripcion, categorias, fabricante, stock}
        })
        console.log(product)
        let productI = await Producto.findAll({     
            where:{
                nombre: nombre
            },
        })
        return res.status(200).json({message:"Producto creado exitosamente", productI})
    }else{
        return res.status(400).json({message: "El producto ya existe!"})
    }


    }catch(error){
        return res.status(500).json({message: error.message})
    }
}

async function revisionExistencia(nombre){
    //busco por el nombre en la base de datos
    let exists = await Producto.findOne({
        where:{
           nombre: nombre
        }
    })
    if(exists){
        console.log("el Producto existe y no será creado")
        return false;
    }else{
        console.log("Producto será creado")
        return true;
    }
    
} 

module.exports = {postProducto};