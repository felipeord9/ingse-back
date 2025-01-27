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

    console.log(body)
    
    /* const values = []; */
    if(body.tipo === 'MOTO'){
      for (let i = body.desde; i <= body.hasta; i++) {
        let numeroProcesado;
        if(i < 10){
          numeroProcesado = `0${i}`
        }else{
          numeroProcesado = `${i}`
        }
        await SolicitudService.create({
          cedulaPropietario: body.cedulaPropietario,
          nombrePropietario: body.nombrePropietario,
          tipo: body.tipo,
          placa: `${body.letras}${numeroProcesado}${body.letraFinal}`,
          createdAt: body.createdAt,
          userId: body.userId,
        })
      }
    }else{
      for (let i = body.desde; i <= body.hasta; i++) {
        let numeroProcesado;
        if(i >= 0 && i < 10){
          numeroProcesado = `00${i}`
        }else if(i >= 10 && i < 100){
          numeroProcesado = `0${i}`
        }else{
          numeroProcesado = `${i}`
        }
        /* numeroProcesado.toString().padStart(3, '0'); */
        /* values.push([`${letras}${i}`]); */
        await SolicitudService.create({
          cedulaPropietario: body.cedulaPropietario,
          nombrePropietario: body.nombrePropietario,
          tipo: body.tipo,
          placa: `${body.letras}${numeroProcesado}`,
          createdAt: body.createdAt,
          userId: body.userId,
        })
      }
    }

    res.status(201).json({
      message: 'Created'
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