const { User, UserSchema } = require('./userModel')
const { Solicitud, SolicitudSchema } = require('./solicitudModel')

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize))
  Solicitud.init(SolicitudSchema, Solicitud.config(sequelize))

  User.associate(sequelize.models)
  Solicitud.associate(sequelize.models)

}

module.exports = setupModels