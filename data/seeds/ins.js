exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructions')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('instructions').insert([
        { id: 1, recipe_id: 1, step_id: 3 },
        { id: 2, recipe_id: 1, step_id: 2 },
        { id: 3, recipe_id: 2, step_id: 2 },
        { id: 4, recipe_id: 3, step_id: 1 }
      ]);
    });
};
