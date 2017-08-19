import { Category } from './../models/Category'

export interface ICategoryRepository {
    getAllCategories (callback);
    add (category: Category, callback);
    delete (category: Category, callback);
}
