const connection = require('../database')
const reservations = {}

reservations.listByParking = async (idParking) => await connection.db.collection('reservation').find({ parkingId: idParking }).toArray()
reservations.getOne = async (idParking, idReservation) => await db.collection('reservation').find({parkingId: idParking, id: idReservation})
reservations.create = async (data) => await connection.db.collection('reservation').insertOne(data)
reservations.replace = async (idParking, idReservation, data) => await connection.db.collection('reservation').replaceOne({parkingId: idParking, id: idReservation}, data)
reservations.delete = async (idParking, idReservation) => await connection.db.collection('reservation').deleteOne({parkingId: idParking, id: idReservation})