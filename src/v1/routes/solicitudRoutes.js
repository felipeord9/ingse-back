const express = require("express");
const passport = require('passport')
const SolicitudController = require("../../controllers/solicitudController");

const router = express.Router();

router.use(
  passport.authenticate('jwt', { session: false })
)

router
  .get("/", SolicitudController.findAllSolicitudes)
  .get("/:id", SolicitudController.findOneSolicitud)
  .post('/', SolicitudController.createSolicitud)
  .post('/multiple', SolicitudController.createSolicitud)
  .patch('/:id', SolicitudController.updateSolicitud)

module.exports = router