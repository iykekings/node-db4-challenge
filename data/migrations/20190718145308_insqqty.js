exports.up = function(knex) {
  return knex.schema
    .createTable('instructions', table => {
      table.increments();
      table
        .integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      table
        .integer('step_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('steps')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    })
    .createTable('quantities', table => {
      table.increments();
      table.float('quantity');
      table
        .integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      table
        .integer('ingredients_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('ingredients')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('enrollments');
};
