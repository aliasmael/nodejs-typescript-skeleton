class CreateCategoryCollection {
    
    // Run migration when declearing CreateDb class
    constructor () {
        let MongoClient = require('mongodb').MongoClient;
        let url = "mongodb://localhost:27017/nodejs-typescript-skeleton";

        MongoClient.connect(url, function(err, db) {
            if (err) throw err;
            db.createCollection("categories", function(err, res) {
                if (err) throw err;
                console.log("Collection created!");
                db.close();
            });
        });
    }

}

new CreateCategoryCollection();