exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('ingredients').insert([
        { id: 1, name: 'tomato' },
        { id: 2, name: 'onions' },
        { id: 3, name: 'curry' },
        { id: 4, name: 'chicken flavour' },
        { id: 5, name: 'thyme' }
      ]);
    });
};
