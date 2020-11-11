const reservations = require('../model/reservations')
const reservationsController = {}

reservationsController.getByParking = (req, res) => {
    const id = parseInt(req.params.id)
    reservations.listByParking(id)
        .then(docs => res.status(200).json(docs))
        .catch(err => {
            if (err) {
                console.log(err)
                throw err
            }
    })
}

reservationsController.getReservation = (req, res) => {
    const id = parseInt(req.params.id)
    const idReservation = parseInt(req.params.idReservation)
    reservations.getOne(id, idReservation)
        .then(docs => res.status(200).json(docs))
        .catch(err => {
            if (err) {
                console.log(err)
                throw err
            }
    })
}

reservationsController.create = (req, res) => {
    reservations.create(req.body)
        .then(docs => res.status(200).json(docs.ops))
        .catch(err => {
            if (err) {
                console.log(err)
                throw err
            }})
}

reservationsController.replace = (req, res) => {
    const id = parseInt(req.params.id)
    const idReservation = parseInt(req.params.idReservation)
    reservations.replace(id, idReservation, req.body)
        .then(docs => res.status(200).json(docs.ops))
        .catch(err => {
            if (err) {
                console.log(err)
                throw err
            }})
}

reservationsController.delete = (req, res) => {
    const id = parseInt(req.params.id)
    const idReservation = parseInt(req.params.idReservation)
    reservations.delete(id, idReservation)
        .then(docs => res.status(200).json(docs))
        .catch(err => {
            if (err) {
                console.log(err)
                throw err
            }})
}

module.exports = reservationsController