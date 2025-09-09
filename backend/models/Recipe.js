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
  description: {
    type: String,
    required: true,
  },
  method: {
    type: String,
    required: true,
  }
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
