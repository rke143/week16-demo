const randomRecipeModel = require('../models/randomRecipeModel');

exports.getRandomRecipe = async (req, res) => {
    
    try {
        const randomRecipe = await randomRecipeModel.getRandomRecipe();
        res.json(randomRecipe);
    } catch(error) {
        res.status(500).json({errorMessage: 'Internal Server error.'});
    }
}
