const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  ingredients: {
    type: [String],
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  effect: String,
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
