import * as express from 'express';
import { Test } from '../models/Test';

export let testRouter = express.Router();

// Default get route
testRouter.get('/', (req, res, next) => {
    res.json({
        message: 'test router!',
        data: Test.getTest()
    });
});