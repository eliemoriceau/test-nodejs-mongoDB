const parkings = require('../model/parkings')
const parkingController = {}

parkingController.getParkings = (req, res) => {
    parkings.list()
        .then(docs => res.status(200).json(docs))
        .catch(err => {
            console.log(err)
            throw err
        })
}

parkingController.getParking = (req, res) => {
    const id = parseInt(req.params.id)
    parkings.getOne(id)
        .then(docs => res.status(200).json(docs))
        .catch(err => {
            if (err) {
                console.log(err)
                throw err
            }
        })
}

parkingController.create = (req, res) => {
    parkings.create(req.body)
    .then(docs => res.status(200).json(docs.ops))
    .catch(err => {
        if (err) {
            console.log(err)
            throw err
        }
    })
}

parkingController.replace = (req,res) => {
    const id = parseInt(req.params.id)
    parkings.replace(id, req.body)
        .then(docs => res.status(200).json(docs.ops))
        .catch(err => {
            if (err) {
                console.log(err)
                throw err
            }})
}

parkingController.update = (req,res) => {
    const id = parseInt(req.params.id)
    parkings.update(id, req.body)
        .then(docs => res.status(200).json(docs.ops))
        .catch(err => {
            if (err) {
                console.log(err)
                throw err
            }})
}

parkingController.delete = (req,res) => {
    const id = parseInt(req.params.id)
    parkings.delete(id)
        .then(docs => res.status(200).json(docs.ops))
        .catch(err => {
            if (err) {
                console.log(err)
                throw err
            }})
}

module.exports = parkingController