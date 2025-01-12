const SolicitudService = require("../services/solicitudService");

const findAllSolicitudes = async (req, res, next) => {
  try {
    const data = await SolicitudService.find();

    res.status(200).json({
      message: "OK",
      data,
    });
  } catch (error) {
    next(error);
  }
};

const findOneSolicitud = async (req, res, next) => {
  try {
    const { params: { id } } = req;
    const data = await SolicitudService.findOne(id);

    res.status(200).json({
      message: 'OK',
      data,
    });
  } catch (error) {
    next(error)
  }
};

const createSolicitud = async (req, res, next) => {
  try {
    const { body } = req
    
    const data = await SolicitudService.create(body)

    res.status(201).json({
      message: 'Created',
      data
    })
  } catch (error) {
    console.log(error.message)
    next(error)
  }
}

const createMultipleSolicitud = async (req, res, next) => {
  try {
    const { body } = req
    
    /* const values = []; */
    for (let i = body.desde; i <= body.hasta; i++) {
      /* values.push([`${letras}${i}`]); */
      await SolicitudService.create({
        cedulaPropietario: body.cedulaPropietario,
        nombrePropietario: body.nombrePropietario,
        placa: `${letras}${i}`
      })
    }
    
    res.status(201).json({
      message: 'Created',
      data
    })
  } catch (error) {
    console.log(error.message)
    next(error)
  }
}

const updateSolicitud = async (req, res, next) => {
  try {
    const { params: { id }, body } = req
    const data = await SolicitudService.update(id, body)

    res.json(200).json({
      message: 'Updated',
      data
    })
  } catch (error) {
    next(error)
  }
}

module.exports = {
  findAllSolicitudes,
  findOneSolicitud,
  createSolicitud,
  createMultipleSolicitud,
  updateSolicitud,
};