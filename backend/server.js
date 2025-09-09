const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./db.js');
const Recipe = require('./models/Recipe.js');

dotenv.config();

connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

const whitelist = ['http://localhost:3000'];
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

app.use(cors(corsOptions));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hyrule Cookbook API is running!');
});

app.get('/api/recipes', async (req, res) => {
  try {
    const dbRecipes = await Recipe.find({});
    res.json(dbRecipes);
  } catch (err) {
    console.error('Error fetching recipes from DB:', err);
    res.status(500).json({ message: 'Error fetching recipes from the database' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});