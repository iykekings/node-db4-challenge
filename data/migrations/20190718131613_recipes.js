exports.up = function(knex) {
  return knex.schema
    .createTable('recipes', tbl => {
      tbl.increments();
      tbl
        .text('title', 128)
        .unique()
        .notNullable();
    })
    .createTable('ingredients', tbl => {
      tbl.increments();
      tbl
        .text('name', 128)
        .unique()
        .notNullable();
    })
    .createTable('steps', tbl => {
      tbl.increments();
      tbl
        .text('step', 128)
        .unique()
        .notNullable();
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('recipes')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('steps');
};
