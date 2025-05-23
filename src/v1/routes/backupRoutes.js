const express = require('express');
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');
const { config } = require('../../config/config')

const router = express.Router();

router.post('/', (req, res) => {
  try{
  const carpetaBackup = 'C:\\backupBD';
  if (!fs.existsSync(carpetaBackup)) {
    fs.mkdirSync(carpetaBackup, { recursive: true });
  }

  const ahora = new Date();
  const pad = n => n.toString().padStart(2, '0');
  const timestamp = `${ahora.getFullYear()}${pad(ahora.getMonth() + 1)}${pad(ahora.getDate())}_${pad(ahora.getHours())}${pad(ahora.getMinutes())}`;
  const nombreArchivo = `${config.bdServidor}_${timestamp}.bak`;
  const rutaCompleta = path.join(carpetaBackup, nombreArchivo).replace(/\\/g, '\\\\');

  /* const comando = `sqlcmd -S ${servidor} -U ${usuario} -P ${contraseña} -Q "BACKUP DATABASE [${baseDatos}] TO DISK='${rutaCompleta}'"`; */
  /* const comando = `sqlcmd -S ${config.bdServidor} -E -Q "BACKUP DATABASE [${config.bdName}] TO DISK='${rutaCompleta}'"`; */

  /* exec(comando, (error, stdout, stderr) => {
    if (error || stderr) {
      console.log(`${error}`)
      return res.status(500).json({
        exito: false,
        mensaje: 'Error al realizar el backup.',
        error: error?.message || stderr,
      });
    }
    console.log(`Backup realizado correctamente en: C:\backupBD\MiBase2.bak ${rutaCompleta} .`)
    res.json({
      exito: true,
      mensaje: `Backup realizado correctamente en: ${rutaCompleta} .`,
      archivo: rutaCompleta,      
    });
    
  }); */


  // Ruta absoluta al archivo .bat
  const rutaBat = path.resolve('C:\\Users\\Administrador\\Desktop\\backup_bd.bat');

  exec(`${rutaBat}`, { windowsHide: false }, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error ejecutando .bat: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout:\n${stdout}`);
  });

  res.json({
    exito: true,
    mensaje: `Backup realizado correctamente en: ${rutaCompleta} .`,
    archivo: rutaCompleta,      
  });


  }catch (error) {
    console.error('Error al hacer el backup:', error);
    res.status(500).send('Error del servidor');
  }

});

module.exports=router