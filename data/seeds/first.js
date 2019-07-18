exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('recipes').insert([
        { id: 1, title: 'Recipe 1' },
        { id: 2, title: 'Recipe 2' },
        { id: 3, title: 'Recipe 3' }
      ]);
    });
};
