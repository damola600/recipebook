const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    username: {type: String, require: true},
    mealname: {type: String, require: true},
    instructions: {type: String, require: true},
    ingredients: {type: String, require: true},
    
    
},{
    timestamps: true,
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;