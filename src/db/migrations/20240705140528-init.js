'use strict';
const { USER_TABLE, UserSchema } = require('../models/userModel')
const { SOLICITUD_TABLE, SolicitudSchema } = require('../models/solicitudModel')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(USER_TABLE,UserSchema);
    await queryInterface.createTable(SOLICITUD_TABLE,SolicitudSchema);

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(USER_TABLE);
    await queryInterface.dropTable(SOLICITUD_TABLE);

  }
};
