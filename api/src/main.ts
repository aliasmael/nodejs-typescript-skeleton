import {config} from './config/config';

// Import modules routes
import {testRouter} from './modules/test/routes/TestRouter';
import {categoryRouter} from './modules/category/routes/CategoryRouter';

const express = require('express');
const app = express();

// use test routes under /api/test
app.use('/api/test', testRouter);

// use category routes under /api/category
app.use('/api/category', categoryRouter);

// Handle error routes
app.use(function(req, res){
    res.sendStatus(404);
});

// app listens on http://{{host}}:{{port}}
app.listen(config.port, config.host);