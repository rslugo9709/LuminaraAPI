const { Router } = require('express');


const router = Router();

const {getClientByName} = require("../controllers/getClientName");
const{getClients} = require("../controllers/getClients");
const {getProducts} = require("../controllers/getProducts")
const {getProductName} = require("../controllers/getProductName")
const {getEmpleados} = require("../controllers/getEmpleados");
const {getEmpleadoName} = require("../controllers/getEmpleadoName");
const {postProducto} = require("../controllers/postProducto");
const {postCliente} = require("../controllers/postCliente");
router.get("/clientes/name", getClientByName);
router.get("/clientes/", getClients);
router.get("/productos/", getProducts);
router.get("/productos/name", getProductName);
router.get("/empleados/", getEmpleados);
router.get("/empleados/name", getEmpleadoName);

router.post("/crearproducto/", postProducto);
router.post("/crearCliente/",postCliente)

module.exports = router;
