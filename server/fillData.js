const fs = require('fs')
const knex = require('knex')({
    client: 'pg',
    version: '13',
    connection: {
      host : 'localhost',
      user : 'postgres',
      password : 'password',
      database : 'pokedex'
    }
    });

    const data = fs.readFileSync('../db/pokedex.json');
    const pokedex = JSON.parse(data);


    knex.schema.hasTable('pokemon').then(function(exists) {
    if (!exists) {
        return knex.schema.createTable('pokemon',function(t){
            t.increments();
            t.timestamps();
            t.json('data');
        });
    }
  });

    pokedex.forEach(function(pokemon) {
    knex('pokemon').insert({data : JSON.stringify(pokemon)}).returning('*').toString();
    });
 
 

  