const express = require('express');
const router = express.Router();
const allRecipesController = require('../controllers/allRecipesController');

router.get('/', allRecipesController.getAllRecipes);

module.exports = router;