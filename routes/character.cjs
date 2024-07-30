const express = require('express');
const controller = require('../controllers/character.controller.cjs');

const charactersRouter = express.Router();
charactersRouter
    .route('/')
    .get(controller.getAllCharacters)
    .post(controller.createCharacter);
charactersRouter
    .route('/:novel_id')
    .get(controller.getCharacter)
    .patch(controller.updateCharacter);
// .delete(deleteCharacter);

module.exports = charactersRouter;
