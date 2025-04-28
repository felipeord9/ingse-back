const { Sequelize } = require('sequelize')

const { config } = require('../config/config')
const setupModels = require('../db/models')

const options = {
  dialect: 'postgres',
  logging: !config.isProd
}

if(config.isProd) {
  options.dialectOptions = {
    ssl: {
      rejectUnauthorized: false
    }
  }
}

const sequelize = new Sequelize(config.dbUrl, options)
/* const sequelize = new Sequelize('ingse_web', 'sa', '031466Ok', {
  host: 'localhost',    // Cambia esto si tu base de datos está en otro servidor
  dialect: 'mysql',     // Indicamos que estamos usando MySQL
  logging: false,       
}); */

setupModels(sequelize)

module.exports = sequelize