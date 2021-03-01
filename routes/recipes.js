const router = require('express').Router();
let Recipe = require('../models/recipe.model');

router.route('/').get((req, res) =>{
    Recipe.find()
        .then(recipe => res.json(recipe))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const mealname = req.body.mealname;
    const instructions = req.body.instructions;
    const ingredients = req.body.ingredients;
    

    const newRecipe = new Recipe({
        username,
        mealname,
        instructions,
        ingredients
    });

    newRecipe.save()
            .then(() => res.json("added your recipe"))
            .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Recipe.findByis(req.params.id)
          .then(recipe => res.json(recipe))
          .catch(err => res.status(400).json('Error: ' + err));
});
module.exports = router;