const axios = require("axios");
const { Op } = require('sequelize');

const {Producto} = require("../../db");


async function updateProducto(req, res){

    const {id, nombre, descripcion, TipoServicio,precio, estado } = req.body;

    try {
        const producto = await Producto.findByPk(id)

        if (!producto) {
            
            return res.status(404).json({ message: error.message });
        }
        //Validamos que no haya llegado nada vacio, en caso tal se coloca la informacion original
        if(!nombre){
            nombre = producto.nombre;
        }
        if(!descripcion){
            descripcion = producto.descripcion;
        }
        if(!TipoServicio){
            TipoServicio = producto.TipoServicio;
        }
        if(!precio){
            precio = producto.precio;
        }
        if(!estado){
            estado = producto.estado;
        }

  
        await producto.update({ nombre, descripcion, TipoServicio,precio, estado });


        return res.status(200).json({message: "Producto actualizado exitosamente"})
    } catch (error) {
        
        res.status(500).json({message: error.message})

    }

}


module.exports = {updateProducto};