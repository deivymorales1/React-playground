const express = require("express");
const router = express.Router();
const FollowController = require("../controllers.js/follow");

// Definir rutas
router.get("/prueba-follow", FollowController.pruebaFollow);

// Exportar router
module.exports = router;
