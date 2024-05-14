const db = require('../db');

exports.getRandomRecipe = async() => {

    try {
        const recipeQuery = 'SELECT id, recipeName, imageurl, instructions FROM recipe ORDER BY RANDOM() LIMIT 1;';
        const recipeResult = await db.query(recipeQuery);
        const selectedRecipe = recipeResult.rows[0];
        
        const ingredientsQuery = 'SELECT b.ingredientName FROM ingredient b INNER JOIN IngredientInRecipe c ON b.id = c.ingredientId WHERE c.recipeId = $1;';

        const ingredientsResult = await db.query(ingredientsQuery, [selectedRecipe.id]);  
        const ingredients = ingredientsResult.rows.map( element => element.ingredientname);
        
        return {
            recipe: selectedRecipe,
            ingredients: ingredients
        };
        
    } catch(error) {
        throw(error);
    }

}