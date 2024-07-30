const { Router } = require('express');
const controller = require('../controllers/novel.controller.cjs');

const novelsRouter = Router();
novelsRouter
    .route('/')
    .get(controller.getAllNovells)
    .post(controller.createNovel);

novelsRouter
    .route('/:novel_id')
    .get(controller.getNovell)
    .post(controller.updateNovel);

module.exports = novelsRouter;
