require('dotenv').config()

const config = {
    port: process.env.PORT,
    host: process.env.HOST,
    dbUrl: process.env.DB_URL,
    recoveryUrl: process.env.RECOVERY_URL,
    requestUrl: process.env.REQUEST_URL,
    isProd: false,
    smtpHost: process.env.SMTP_HOST,
    smtpPort: process.env.SMTP_PORT,
    smtpEmail: process.env.SMTP_EMAIL,
    smtpPassword: process.env.SMTP_PASSWORD,
    jwtSecret: process.env.JWT_SECRET,
    bdServidor: process.env.BD_SERVIDOR,
    bdUsuario: process.env.BD_USUARIO,
    bdPassword: process.env.BD_PASSWORD,
    bdName: process.env.BD_NAME,
}

module.exports = { config }