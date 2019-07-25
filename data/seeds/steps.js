exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('steps').insert([
        { id: 1, step: 'Cut fishes' },
        { id: 2, step: 'Wash utensils' },
        { id: 3, step: 'fry everything' }
      ]);
    });
};
