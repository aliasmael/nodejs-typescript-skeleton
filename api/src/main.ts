import {config} from './config/config';

// Import modules routes
import {testRouter} from './modules/test/routes/TestRouter';

const express = require('express');
const app = express();

// use test routes under /api/test
app.use('/api/test', testRouter);

// Handle error routes
app.use(function(req, res){
    res.sendStatus(404);
});

// app listens on http://{{host}}:{{port}}
app.listen(config.port, config.host);