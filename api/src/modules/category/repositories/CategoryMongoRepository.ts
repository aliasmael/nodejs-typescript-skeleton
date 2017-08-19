import { config } from './../../../config/config';
import { ICategoryRepository } from './ICategoryRepository'
import { MongoClient, ObjectId } from 'mongodb'
import { Category } from './../models/Category'

export class CategoryMongoRepository implements ICategoryRepository {

    // MongoDb url
    dbUrl: string = config.mongoDb.url;
    
    // get all categories
    public getAllCategories (callback) {

        MongoClient.connect(this.dbUrl, function(err, db) {
            if (err)
                callback( { error: true, message: err } );

            db.collection("categories").find().toArray(function(err, obj) {
                if (err)
                    callback( { error: true, message: err } );
                
                // close connection with DB
                db.close();

                // return result to callback
                callback( { error: false, message: 'Categories retrived!', categories: obj } );
            });
        });
    }

    // Add new category
    public add (category: Category, callback) {
        
        MongoClient.connect(this.dbUrl, function(err, db) {
            if (err) 
                callback( { error: true, message: err } );

            db.collection("categories").insertOne(category, function(err, obj) {
                if (err)
                    callback( { error: true, message: err } );
                
                // close connection with DB
                db.close();

                // return result to callback
                callback( { error: false, message: 'Category added!', category: category } );
            });
        });
    }

    // Delete category
    public delete (category: Category, callback) {
        
        MongoClient.connect(this.dbUrl, function(err, db) {
            if (err) 
                callback( { error: true, message: err } );

            db.collection("categories").deleteOne({_id: ObjectId(category._id) }, function(err, obj) {
                if (err)
                    callback( { error: true, message: err } );
                
                // close connection with DB
                db.close();
                
                // Count of affected rows
                if ( obj.result.n > 0 )
                    callback( { error: false, message: 'Category deleted!' } );
                else
                    callback( { error: true, message: 'No category found!' } );
            });
        });
    }
}
