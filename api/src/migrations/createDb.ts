class CreateDb {
    
    // Run migration when declearing CreateDb class
    constructor () {
        let MongoClient = require('mongodb').MongoClient;
        let url = "mongodb://localhost:27017/nodejs-typescript-skeleton";

        MongoClient.connect(url, function(err, db) {
            if (err) throw err;
            console.log("Database created!");
            db.close();
        });
    }

}

new CreateDb();