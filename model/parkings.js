const connection = require('../database')
const parking = {}

parking.list = async () => await connection.db.collection('parkings').find({}).toArray()
parking.getOne = async (id) => await connection.db.collection('parkings').findOne({id})
parking.create = async (data) => await connection.db.collection('parkings').insertOne(data)
parking.replace = async (id, data) => await connection.db.collection('parkings').replaceOne({id}, data)
parking.edit = async (id, data) => await connection.db.collection('parkings').updateOne({id}, {$set: data}, {upsert:true})
parking.delete = async (id) => await connection.db.collection('parkings').deleteOne({id})

module.exports = parking