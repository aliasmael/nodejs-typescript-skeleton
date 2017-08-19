import { ICategoryRepository } from './../repositories/ICategoryRepository'
import { CategoryMongoRepository } from './../repositories/CategoryMongoRepository'


export class Category {
    
    // Category repository
    private static _repository: ICategoryRepository = new CategoryMongoRepository();
    
    // Public attributes
    public id: number;
    public name: string;
    public description: string;
    public items: string[];

    // Get all categories
    static getAllCategories( callback ) {
        this._repository.getAllCategories(function (res) {
            callback(res);
        });
    }
}