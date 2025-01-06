'use strict';
const { SOLICITUD_TABLE, SolicitudSchema } = require('../models/solicitudModel')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(SOLICITUD_TABLE,SolicitudSchema);

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(SOLICITUD_TABLE);

  }
};