const express = require("express");
const router = express.Router();
const PublicationController = require("../controllers.js/publication");
const check = require("../middlewares/auth");

// Definir rutas
router.post('/save', check.auth, PublicationController.save)
router.get('/detail/:id', check.auth, PublicationController.detail)


// Exportar router
module.exports = router;
