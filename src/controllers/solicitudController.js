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
    
    /* if(body.tipo === 'MOTOCICLETAS'){
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
        await SolicitudService.create({
          cedulaPropietario: body.cedulaPropietario,
          nombrePropietario: body.nombrePropietario,
          tipo: body.tipo,
          placa: `${body.letras}${numeroProcesado}`,
          createdAt: body.createdAt,
          userId: body.userId,
        })
      }
    } */
  
    /* if(body.tipo === 'MOTOCICLETAS'){
      if(body.letrasDesde === body.letrasHasta){
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
            placa: `${body.letrasDesde}${numeroProcesado}${body.letraFinal}`,
            createdAt: body.createdAt,
            userId: body.userId,
          })
        }
      }else{
        const abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const preInicio = body.letrasDesde.slice(0, 2); // primeras 2 letras de la constante desde
        const letraInicio = body.letrasDesde[2]; // tercer caracter de las letras desde
        const letraFin = body.letrasHasta[2]; // tercer caracter de las letras hasta

        const iStart = abc.indexOf(letraInicio);
        const iEnd = abc.indexOf(letraFin);

        for (let i = iStart; i <= iEnd; i++) {
          const letraActual = abc[i];
          let numStart = 1;
          let numEnd = 99;
      
          if (i === iStart) numStart = body.desde;
          if (i === iEnd) numEnd = body.hasta;
          for (let num = numStart; num <= numEnd; num++) {
            let numero = num.toString().padStart(2, '0');
            await SolicitudService.create({
              cedulaPropietario: body.cedulaPropietario,
              nombrePropietario: body.nombrePropietario,
              tipo: body.tipo,
              placa: `${preInicio}${letraActual}${numero}${body.letraFinal}`,
              createdAt: body.createdAt,
              userId: body.userId,
            })
          }
        }
      }
    }else{
      if(body.letrasDesde === body.letrasHasta){
        for (let i = body.desde; i <= body.hasta; i++) {
          let numeroProcesado;
          if(i >= 0 && i < 10){
            numeroProcesado = `00${i}`
          }else if(i >= 10 && i < 100){
            numeroProcesado = `0${i}`
          }else{
            numeroProcesado = `${i}`
          }
          if(body.tipo === 'MOTOCARRO'){
            await SolicitudService.create({
              cedulaPropietario: body.cedulaPropietario,
              nombrePropietario: body.nombrePropietario,
              tipo: body.tipo,
              placa: `${numeroProcesado}${body.letrasDesde}`,
              createdAt: body.createdAt,
              userId: body.userId,
            })
          }else{
            await SolicitudService.create({
              cedulaPropietario: body.cedulaPropietario,
              nombrePropietario: body.nombrePropietario,
              tipo: body.tipo,
              placa: `${body.letrasDesde}${numeroProcesado}`,
              createdAt: body.createdAt,
              userId: body.userId,
            })
          }
        }
      }else{
        const abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const preInicio = body.letrasDesde.slice(0, 2); // primeras 2 letras de la constante desde
        const letraInicio = body.letrasDesde[2]; // tercer caracter de las letras desde
        const letraFin = body.letrasHasta[2]; // tercer caracter de las letras hasta

        const iStart = abc.indexOf(letraInicio);
        const iEnd = abc.indexOf(letraFin);

        for (let i = iStart; i <= iEnd; i++) {
          const letraActual = abc[i];
          let numStart = 1;
          let numEnd = 999;
      
          if (i === iStart) numStart = body.desde;
          if (i === iEnd) numEnd = body.hasta;
          for (let num = numStart; num <= numEnd; num++) {
            let numero = num.toString().padStart(3, '0');
            if(body.tipo === 'MOTOCARRO'){
              await SolicitudService.create({
                cedulaPropietario: body.cedulaPropietario,
                nombrePropietario: body.nombrePropietario,
                tipo: body.tipo,
                placa: `${numero}${preInicio}${letraActual}`,
                createdAt: body.createdAt,
                userId: body.userId,
              })
            }else{
              await SolicitudService.create({
                cedulaPropietario: body.cedulaPropietario,
                nombrePropietario: body.nombrePropietario,
                tipo: body.tipo,
                placa: `${preInicio}${letraActual}${numero}`,
                createdAt: body.createdAt,
                userId: body.userId,
              })
            }
          }
      }
      }
    } */
    
      if(body.tipo === 'MOTOCICLETAS'){
        const placas = [];
        if(body.letrasDesde === body.letrasHasta){
          for (let i = body.desde; i <= body.hasta; i++) {
            let numeroProcesado;
            if(i < 10){
              numeroProcesado = `0${i}`
            }else{
              numeroProcesado = `${i}`
            }
            const placa = `${body.letrasDesde}${numeroProcesado}${body.letraFinal}`;
            placas.push(placa)
          }
        }else{
          const abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
          const preInicio = body.letrasDesde.slice(0, 2); // primeras 2 letras de la constante desde
          const letraInicio = body.letrasDesde[2]; // tercer caracter de las letras desde
          const letraFin = body.letrasHasta[2]; // tercer caracter de las letras hasta
  
          const iStart = abc.indexOf(letraInicio);
          const iEnd = abc.indexOf(letraFin);
  
          for (let i = iStart; i <= iEnd; i++) {
            const letraActual = abc[i];
            let numStart = 1;
            let numEnd = 99;
        
            if (i === iStart) numStart = body.desde;
            if (i === iEnd) numEnd = body.hasta;
            for (let num = numStart; num <= numEnd; num++) {
              let numero = num.toString().padStart(2, '0');
              const placa = `${preInicio}${letraActual}${numero}${body.letraFinal}`;
              placas.push(placa)
            }
          }
        }
        // Ahora creamos una sola instancia con la primera, última y cantidad
        const placaInicial = placas[0];
        const placaFinal = placas[placas.length - 1];
        const cantidad = ((body.concepto === 'NUEVA' && body.tipo === 'AUTOMOVILES') || (body.concepto === 'NUEVA' && body.tipo === 'TRACTOMULA')) ? placas.length * 2 : placas.length;

        await SolicitudService.create({
          cedulaPropietario: body.cedulaPropietario,
          nombrePropietario: body.nombrePropietario,
          tipo: body.tipo,
          servicio: body.servicio,
          concepto: body.concepto,
          placaDesde: placaInicial,
          placaHasta: placaFinal,
          numPlacas: cantidad,
          createdAt: body.createdAt,
          userId: body.userId,
        })

      }else{
        const placas = [];
        if(body.letrasDesde === body.letrasHasta){
          for (let i = body.desde; i <= body.hasta; i++) {
            let numeroProcesado;
            if(i >= 0 && i < 10){
              numeroProcesado = `00${i}`
            }else if(i >= 10 && i < 100){
              numeroProcesado = `0${i}`
            }else{
              numeroProcesado = `${i}`
            }
            if(body.tipo === 'MOTOCARRO'){
              const placa = `${numeroProcesado}${body.letrasDesde}`;
              placas.push(placa)
            }else{
              const placa = `${body.letrasDesde}${numeroProcesado}`;
              placas.push(placa)
            }
          }
        }else{
          const abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
          const preInicio = body.letrasDesde.slice(0, 2); // primeras 2 letras de la constante desde
          const letraInicio = body.letrasDesde[2]; // tercer caracter de las letras desde
          const letraFin = body.letrasHasta[2]; // tercer caracter de las letras hasta
  
          const iStart = abc.indexOf(letraInicio);
          const iEnd = abc.indexOf(letraFin);
  
          for (let i = iStart; i <= iEnd; i++) {
            const letraActual = abc[i];
            let numStart = 0;
            let numEnd = 999;
        
            if (i === iStart) numStart = body.desde;
            if (i === iEnd) numEnd = body.hasta;
            for (let num = numStart; num <= numEnd; num++) {
              let numero = num.toString().padStart(3, '0');
              if(body.tipo === 'MOTOCARRO'){
                const placa = `${numero}${preInicio}${letraActual}`;
                placas.push(placa)
              }else{
                const placa = `${preInicio}${letraActual}${numero}`;
                placas.push(placa)
              }
            }
        }
        }

        // Ahora creamos una sola instancia con la primera, última y cantidad
        const placaInicial = placas[0];
        const placaFinal = placas[placas.length - 1];
        const cantidad = body.concepto === 'NUEVA' ? placas.length * 2 : placas.length;

        await SolicitudService.create({
          cedulaPropietario: body.cedulaPropietario,
          nombrePropietario: body.nombrePropietario,
          tipo: body.tipo,
          servicio: body.servicio,
          concepto: body.concepto,
          placaDesde: placaInicial,
          placaHasta: placaFinal,
          numPlacas: cantidad,
          createdAt: body.createdAt,
          userId: body.userId,
        })
      }
      res.status(201).json({
      message: 'Created'
    })
  } catch (error) {
    console.log(error.message)
    next(error)
  }
}

const createWithDiffPlaca = async (req, res, next) => {
  try {
    const { body } = req

    console.log(JSON.stringify(body))
    
    for(let placa of body.placas.agregados) {
      await SolicitudService.addItem({
        cedulaPropietario: placa.cedulaPropietario,
        nombrePropietario: placa.nombrePropietario,
        celularPropietario: placa.celularPropietario,
        correoPropietario: placa.correoPropietario,
        concepto: placa.concepto,
        servicio: placa.servicio,
        placaDesde: placa.placaDesde,
        numPlacas: placa.numPlacas,
        tipo: placa.tipo,
        observations: placa.observations,
        createdAt: placa.createdAt,
        userId: placa.userId,
      })
    }

    res.status(201).json({
      message: 'Created',
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
  createWithDiffPlaca,
  updateSolicitud,
};