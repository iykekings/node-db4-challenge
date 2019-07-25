exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('quantities')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('quantities').insert([
        { id: 1, recipe_id: 1, ingredients_id: 3, quantity: 10.0 },
        { id: 2, recipe_id: 1, ingredients_id: 2, quantity: 10.7 },
        { id: 3, recipe_id: 2, ingredients_id: 2, quantity: 10.6 },
        { id: 4, recipe_id: 3, ingredients_id: 1, quantity: 10.2 }
      ]);
    });
};
