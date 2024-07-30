const express = require('express');
const charactersRouter = require('./character.cjs');
const novelsRouter = require('./novel.cjs');

const apiRouter = express.Router();

// DB tables to create: SCENE, LOCATION, STATE
const scenesRouter = express.Router();
const locationsRouter = express.Router();
const statesRouter = express.Router();

apiRouter
    .use('/characters', charactersRouter)
    .use('/novels', novelsRouter)
    .use('/scenes', scenesRouter)
    .use('/locations', locationsRouter)
    .use('/states', statesRouter);

module.exports = apiRouter;
