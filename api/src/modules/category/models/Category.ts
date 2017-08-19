import { ICategoryRepository } from './../repositories/ICategoryRepository'
import { CategoryMongoRepository } from './../repositories/CategoryMongoRepository'
import { ObjectId } from 'mongodb'

// Category repository
let _repository: ICategoryRepository = new CategoryMongoRepository();

export class Category {
    
    
    // Public attributes
    public _id: ObjectId;
    public name: string;
    public description: string;
    public items: string[];

    // Get all categories
    public getAllCategories( callback ) {
        _repository.getAllCategories(function (res) {
            callback(res);
        });
    }

    // Add new category
    public add(callback) {
        _repository.add(this, function (res) {
            callback(res);
        });
    }

    // Delete category    
    public delete(callback) {
        _repository.delete(this, function (res) {
            callback(res);
        });
    }
}