const express = require('express')
const UserRoutes = require('./userRoutes')
const MailRoutes = require('./mailRoutes')
const AuthRoutes = require('./authRoutes')
const SolicitudRoutes = require('./solicitudRoutes')
const BackUpRoutes = require('./backupRoutes')
const ReportRoutes = require('./reportRoutes')

function routerApi(app) {
    const router = express.Router()

    app.use('/api/v1/', router)

    router.use('/auth', AuthRoutes)
    router.use('/users', UserRoutes)
    router.use('/mail', MailRoutes)
    router.use('/solicitud', SolicitudRoutes)
    router.use('/backup', BackUpRoutes)
    router.use('/report', ReportRoutes)
}

module.exports = routerApi