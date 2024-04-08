const { Router } = require('express');


const router = Router();

const {getClientByName} = require("../controllers/getClientName");
const{getClients} = require("../controllers/getClients");


router.get("/clientes/name", getClientByName)
router.get("/clientes/", getClients)




module.exports = router;
