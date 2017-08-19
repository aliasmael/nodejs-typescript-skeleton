import { config } from './../../../config/config';
import { ICategoryRepository } from './ICategoryRepository'
import { MongoClient } from 'mongodb'

export class CategoryMongoRepository implements ICategoryRepository {

    // MongoDb url
    dbUrl: string = config.mongoDb.url;
    
    // get all categories
    public getAllCategories (callback) {

        MongoClient.connect(this.dbUrl, function(err, db) {
            if (err)
                callback( { error: true, message: err } );

            db.collection("categories").find().toArray(function(err, result) {
                if (err)
                    callback( { error: true, message: err } );
                
                // close connection with DB
                db.close();

                // return result to callback
                callback( { error: false, categories: result } );
            });
        });
    }
}
