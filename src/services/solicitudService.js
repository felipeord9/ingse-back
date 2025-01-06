const { models } = require('../libs/sequelize')
const boom = require('@hapi/boom')

const find = async () => {
  const Solicitudes = await models.Solicitud.findAll()
  return Solicitudes
}

const findOne = async (id) => {
  const Solicitud = await models.Solicitud.findByPk(id)

  if(!Solicitud) throw boom.notFound('Solicitud no encontrado')

  return Solicitud
}

const create = async(body)=>{
    const newSolicitud = await models.Solicitud.create(body)
    return newSolicitud  
}

const update = async (id, changes) => {
  const Solicitud = await findOne(id)
  const updatedSolicitud = await Solicitud.update(changes)

  return updatedSolicitud
}

module.exports = {
  find,
  findOne,
  create,
  update,
}