import * as express from 'express'
import { Category } from '../models/Category'
import { ObjectId } from 'mongodb'

export let categoryRouter = express.Router();

// Default get route
categoryRouter.get('/', (req, res, next) => {
    
    let category = new Category();

    // Get all categories
    category.getAllCategories( function (response) {
        
        // Return categories to response
        res.json( response );

    });
});


// Default post route
categoryRouter.post('/', (req, res, next) => {
    
    let category = new Category();
    
    category.name = req.body.name;
    category.description = req.body.description;
    category.items = req.body.items;


    // Add new category
    category.add( function (response) {
        
        // Return categories to response
        res.json( response );

    });
});

// Default delete route
categoryRouter.delete('/', (req, res, next) => {
    
    let category = new Category();
    category._id = ObjectId(req.body.id);
    
    // delete category
    category.delete( function (response) {
        
        // Return categories to response
        res.json( response );

    });
});