const { Router } = require('express');


const router = Router();

//importar los gets
const {getClientByName} = require("../controllers/gets/getClientName");
const {getClientById} = require("../controllers/gets/getClientId");
const{getClients} = require("../controllers/gets/getClients");
const {getProducts} = require("../controllers/gets/getProducts");
const {getProductName} = require("../controllers/gets/getProductName");
const {getEmpleados} = require("../controllers/gets/getEmpleados");
const {getEmpleadoById} = require("../controllers/gets/getEmpleadoId");
const {getEmpleadoName} = require("../controllers/gets/getEmpleadoName");
const {getUsers} = require("../controllers/gets/getUsers");
const {getUser} = require("../controllers/gets/getUser")
//importar los posts
const {postProducto} = require("../controllers/posts/postProducto");
const {postCliente} = require("../controllers/posts/postCliente");
const {postEmpleado} = require("../controllers/posts/postEmpleado");
const {postUser} = require("../controllers/posts/postUser");
//importar deletes
const {deleteClientById} = require("../controllers/deletes/deleteClient");
const {deleteEmpleadoById} = require("../controllers/deletes/deleteEmployee");
const {deleteProductById} = require("../controllers/deletes/deleteProduct");
const {deleteUserById} = require("../controllers/deletes/deleteUser");
//importar updates
const {updateEmployee} = require("../controllers/updates/updateEmployee");
const {updateClient} = require("../controllers/updates/updateClient");
const {updateProduct} = require("../controllers/updates/updateProduct");
const { getAccess } = require('../controllers/gets/getAccess');
const { updateUser } = require('../controllers/updates/updateUser');

router.post("/crearproducto/", postProducto);
router.post("/crearCliente/",postCliente);
router.post("/crearEmpleado/",postEmpleado);
router.post("/crearUsuario/", postUser);

router.put("/actualizarEmpleado/",updateEmployee);
router.put("/actualizarCliente/",updateClient);
router.put("/actualizarServicio/",updateProduct);
router.put("/actualizarUsuario/", updateUser)

router.get("/clientes/name", getClientByName);
router.get("/clientes/id", getClientById);
router.get("/clientes/", getClients);
router.get("/productos/", getProducts);
router.get("/productos/name", getProductName);
router.get("/empleados/", getEmpleados);
router.get("/empleados/name", getEmpleadoName);
router.get("/empleados/id", getEmpleadoById);
router.get("/usuarios/", getUsers);
router.get("/usuario/", getUser);
router.get("/login/", getAccess)


router.delete("/eliminarCliente/", deleteClientById);
router.delete("/eliminarEmpleado/", deleteEmpleadoById);
router.delete("/eliminarProducto/", deleteProductById);
router.delete("/eliminarUsuario/", deleteUserById);



module.exports = router;
