const knex = require('knex');
const config = require('../knexfile').development;

const db = knex(config);

const getRecipes = () => db('recipes');

const getShoppingList = recipe_id =>
  db
    .select('recipes.title', 'ingredients.name', 'quantities.quantity')
    .from('quantities')
    .join('recipes', 'recipes.id', 'quantities.recipe_id')
    .join('ingredients', 'ingredients.id', 'quantities.ingredients_id')
    .where('recipes.id', recipe_id);

const getInstructions = recipe_id =>
  db
    .select('r.title', 's.step')
    .from('instructions as i')
    .join('recipes r', 'r.id', 'i.recipe_id')
    .join('steps as s', 's.id', 'i.step_id')
    .where('r.id', recipe_id);

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions
};
// const
