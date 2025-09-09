const mongoose = require('mongoose');
const dotenv = require('dotenv');
const axios = require('axios');
const connectDB = require('./db.js');
const Recipe = require('./models/Recipe.js');

dotenv.config();

connectDB();

const importData = async () => {
  try {
    const GITHUB_RAW_URL = 'https://raw.githubusercontent.com/omercha/zelda-recipes-json/main/recipes.json';
    const { data: recipesData } = await axios.get(GITHUB_RAW_URL);

    console.log('Data fetched from external repository.');

    await Recipe.deleteMany();

    const recipesToInsert = recipesData.default || recipesData;
    await Recipe.insertMany(recipesToInsert);

    console.log('Data Imported Successfully!');
    process.exit();
  } catch (error) {
    console.error(`Error with data import: ${error}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Recipe.deleteMany();
    console.log('Data Destroyed Successfully!');
    process.exit();
  } catch (error) {
    console.error(`Error with data destruction: ${error}`);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
