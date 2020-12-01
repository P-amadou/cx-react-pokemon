const { json } = require('body-parser');
const fs = require('fs');
const { exit } = require('process');
const knex = require('knex')({
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      user : 'postgres',
      password : 'Connecter0',
      database : 'pokedex',
      charset: 'utf8'
    }
    });

const data = fs.readFileSync('../db/pokedex.json');
const pokedex = JSON.parse(data);

pokedex.forEach( data => {
    let propriete = Object.keys(data);
    console.log("Pokemon : \n")
    propriete.forEach(key => {
        console.log(key)
    }
    )

    let attaque = data.attaques;
    attaque.forEach(dataA => {

        let proprieteAttack= Object.keys(dataA);
        console.log("Attaques : \n")
        proprieteAttack.forEach(keyA => {
            console.log(keyA)
        });
       exit(0);
    });
    
    
});




knex.schema.hasTable('pokemon').then(function(exists) {
if (!exists) {
    return knex.schema.createTable('pokemon',function(t){
        t.increments();
        t.timestamps();
        t.json('data');
        
    });
}
else{
    return knex.schema.dropTable('pokemon')
}
});


/*

pokedex.forEach(function(pokemon) {
knex('pokemon').insert({data : JSON.stringify(pokemon), created_at : new Date(), updated_at: new Date()}).returning('*').toString();
});

*/

  