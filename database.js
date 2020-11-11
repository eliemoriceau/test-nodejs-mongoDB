const database = {}
const dbUrl = require('./dbInfo')

database.connect = async () =>{
    const MongoClient = require('mongodb').MongoClient;
    const url = dbUrl
    const dbName = 'parkingApi'
    let db

    MongoClient.connect(url, function(err, client) {
        console.log("Connected successfully to server");
        db = client.db(dbName);
        database.db = db
    });
}

module.exports = database