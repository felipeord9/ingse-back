const express = require('express');
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');
const { config } = require('../../config/config')
const { models } = require("../../libs/sequelize");

const router = express.Router();

router.post('/', async (req, res) => {
  const { initialDate, finalDate } = req.body;

  console.log(`Fechas recibidas: ${initialDate} - ${finalDate}`);

  try {
    const result = await models.Solicitud.sequelize.query(
      `SELECT * FROM solicitudes WHERE created_at BETWEEN ? AND ?`,
      {
        replacements: [initialDate, finalDate],
        type: models.Solicitud.sequelize.QueryTypes.SELECT
      }
    );
    console.log(result)

    res.json(result);
    } catch (error) {
      console.error('Error al filtrar por fecha:', error);
      res.status(500).send('Error del servidor');
    }
});

module.exports=router