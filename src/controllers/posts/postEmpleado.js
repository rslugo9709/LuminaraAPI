const axios = require("axios");

const { Sequelize } = require('sequelize');
const {Empleado, CLiente} = require("../../db");

async function postEmpleado(req, res){


    try{
    const {nombre, telefono, correo, direccion, salario, cargo, fechaIngreso } = req.body;
    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-US', {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric'
      });

    console.log("recibe la info")
    try {
        console.log(objeto);
    } catch (error) {
        console.log("Aqui estaba el error");
    }
    
    //si falta algun dato se rechaza
    if(!nombre || !telefono || !correo  || !direccion || !cargo || !salario ){
        return res.status(401).send("Missing info");
    }
    console.log("Antes de llegar al obj");
    let objeto = {
        nombre: nombre,
        telefono: telefono,
        correo: correo,
        salario: salario,
        cargo: cargo,
        direccion: direccion,
        fechaIngreso: fechaIngreso,
        
    }
    console.log("Despues de llegar al obj");
    if(!fechaIngreso){
        objeto.fechaIngreso = formattedDate
    }
    console.log("se verifica que no falte nada")
    const existencia = await revisionExistencia(objeto.nombre)

    if(existencia){
        console.log("se procede a crear el empleado")
        const empleado = await Empleado.findOrCreate({
            where: objeto
        })
        console.log(empleado)
        let empleadoI = await Empleado.findAll({     
            where:{
                nombre: nombre
            },
        })
        return res.status(200).json({message:"Empleado creado exitosamente", empleadoI})
    }else{
        return res.status(400).json({message: "El empleado ya existe!"})
    }


    }catch(error){
        console.log("error aqui")
        return res.status(500).json({message: error.message})
    }
}

async function revisionExistencia(nombre){
    //busco por el nombre en la base de datos
    let exists = await Empleado.findOne({
        where:{
           nombre: nombre
        }
    })
    if(exists){
        console.log("el Empleado existe y no será creado")
        return false;
    }else{
        console.log("Empleado será creado")
        return true;
    }
    
} 

module.exports = {postEmpleado};