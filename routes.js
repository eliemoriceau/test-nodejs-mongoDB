const parkingController = require('./controller/parkingController')
const reservationsController = require('./controller/reservationsController')
const express = require('express')
const router = express.Router()

/* parkings */
router.get('/parkings', parkingController.getParkings)
router.get('/parkings/:id', parkingController.getParking)
router.post('/parkings', parkingController.create)
router.put('/parkings/:id', parkingController.replace)
router.patch('/parkings/:id', parkingController.update)
router.delete('/parkings/:id', parkingController.delete)

/* reservation */
router.get('/parkings/:id/reservations', reservationsController.getByParking)
router.get('/parkings/:id/reservations/:idReservation', reservationsController.getReservation)
router.post('/parkings/:id/reservations', reservationsController.create)
router.put('/parking/:id/reservations/:idReservation', reservationsController.replace)
router.delete('/parking/:id/reservations/:idReservation', reservationsController.delete)

module.exports = router