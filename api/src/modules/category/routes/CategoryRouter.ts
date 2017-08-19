import * as express from 'express';
import { Category } from '../models/Category';

export let categoryRouter = express.Router();

// Default get route
categoryRouter.get('/', (req, res, next) => {
    
    // Get all categories
    Category.getAllCategories( function (response) {
        
        // Return categories to response
        res.json({
            message: 'category router!',
            data: response
        });

    });
});