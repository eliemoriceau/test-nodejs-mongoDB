const database = {}

database.connect = async () =>{
    const MongoClient = require('mongodb').MongoClient;
    const url = "mongodb+srv://admin:admin@cluster0.hqbgj.mongodb.net/parkingApi?retryWrites=true&w=majority"
    const dbName = 'parkingApi'
    let db

    MongoClient.connect(url, function(err, client) {
        console.log("Connected successfully to server");
        db = client.db(dbName);
        database.db = db
    });
}

module.exports = database