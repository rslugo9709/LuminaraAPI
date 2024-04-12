const { Router } = require('express');


const router = Router();

const {getClientByName} = require("../controllers/gets/getClientName");
const {getClientById} = require("../controllers/gets/getClientId");
const{getClients} = require("../controllers/gets/getClients");
const {getProducts} = require("../controllers/gets/getProducts")
const {getProductName} = require("../controllers/gets/getProductName")
const {getEmpleados} = require("../controllers/gets/getEmpleados");
const {getEmpleadoById} = require("../controllers/gets/getEmpleadoId");
const {getEmpleadoName} = require("../controllers/gets/getEmpleadoName");
const {postProducto} = require("../controllers/posts/postProducto");
const {postCliente} = require("../controllers/posts/postCliente");
const {postEmpleado} = require("../controllers/posts/postEmpleado");
const {deleteClientById} = require("../controllers/deletes/deleteClient")
const {deleteEmpleadoById} = require("../controllers/deletes/deleteEmployee")
const {deleteProductById} = require("../controllers/deletes/deleteProduct")

router.get("/clientes/name", getClientByName);
router.get("/clientes/id", getClientById);
router.get("/clientes/", getClients);
router.get("/productos/", getProducts);
router.get("/productos/name", getProductName);
router.get("/empleados/", getEmpleados);
router.get("/empleados/name", getEmpleadoName);
router.get("/empleados/id", getEmpleadoById);

router.post("/crearproducto/", postProducto);
router.post("/crearCliente/",postCliente);
router.post("/crearEmpleado/",postEmpleado);

router.delete("/eliminarCliente/", deleteClientById);
router.delete("/eliminarEmpleado/", deleteEmpleadoById);
router.delete("/eliminarProducto/", deleteProductById);


module.exports = router;
