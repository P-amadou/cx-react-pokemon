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
   /* pokedex.forEach( data => {
        console.log(data.numéro)
        let propriete = Object.keys(data);
        console.log("Pokemon : \n")
        propriete.forEach(key => {
            //console.log(key)
        }
        )

        let attaque = data.attaques;
        attaque.forEach(dataA => {

            let proprieteAttack= Object.keys(dataA);
            console.log("Attaques : \n")
            proprieteAttack.forEach(keyA => {
                
               //console.log(keyA)
            });
            exit(0);
        });
        
        
    });
    
*/

knex.schema.hasTable('attaques').then(function(exists) {
    if (!exists) {
        return knex.schema.createTable('attaques',function(t){
            t.bigInteger('id').primary()
            let check = new Object();
            pokedex.forEach( data => {
                let attaque = data.attaques;
                attaque.forEach(dataA => {

                    let propriete= Object.keys(dataA);
                    propriete.forEach(keyA => {
                        
                        if(check[keyA] == null || check[keyA] == false)
                        {
                            check[keyA] = true;
                            console.log(keyA)
                            t.string(keyA, 100)
                        }
                    });
                }); 
            });
        });
    }
    });


  knex.schema.hasTable('pokemon').then(function(exists) {
    if (!exists) {
        return knex.schema.createTable('pokemon',function(t){
            t.bigInteger('id').primary()
            let check = new Object();
            pokedex.forEach( data => {
                let propriete = Object.keys(data);
                propriete.forEach(key => {
                    if(check[key] == null || check[key] == false)
                    {
                        check[key] = true;
                        console.log(key)
                        t.string(key, 100)
                    }


                })
            }); 
        });
    }
  });

  pokedex.forEach(pokemon => {
    knex('pokemon').insert({'id' : parseInt(pokemon.numéro)})
    console.log(pokemon.numéro);
    let propriete = Object.keys(pokemon);
    propriete.forEach(variable => {
        //console.log(variable + " : " + pokemon[variable] )
        knex('pokemon').insert({variable : pokemon[variable] })
        })
    });
    


/*
    pokedex.forEach(function(pokemon) {
    knex('pokemon').insert({data : JSON.stringify(pokemon), created_at : new Date(), updated_at: new Date()}).returning('*').toString();
    });
 
 */

  