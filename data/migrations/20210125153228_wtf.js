exports.up = function(knex) {
    return knex.schema.createTable("acronyms", acronyms => {
      acronyms
      .increments();
      acronyms
        .string("name", 128)
        .notNullable()
      acronyms
      .string("definition", 256)
      .notNullable();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists("acronyms");
  };
  