const express = require('express');
const randomRecipeController = require('../controllers/randomRecipeController');
const router = express.Router();


router.get('/', randomRecipeController.getRandomRecipe);

module.exports = router;
