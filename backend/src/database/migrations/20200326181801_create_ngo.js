/**
 * method up => what is to be done to create it
 */
exports.up = function(knex) {
  return knex.schema.createTable("NGOs", function(table) {
    table.string("id").primary();
    table.string("name").notNullable();
    table.string("email").notNullable();
    table.string("whatsapp").notNullable();
    table.string("city").notNullable();
    table.string("state", 2).notNullable();
  });
};

/**
 * method down => what is to be done if there is an issue
 */
exports.down = function(knex) {
  return knex.schema.dropTable("NGOs");
};
