const { json } = require('body-parser');
const fs = require('fs');
const { exit } = require('process');

const knex = require('knex')({
    client: 'pg',
    connection: {
      host : 'localhost',
      user : 'postgres',
      password : 'password',
      database : 'pokedex',
    }
    });

    const data = fs.readFileSync('../db/pokedex.json');
    const pokedex = JSON.parse(data);

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
        return knex.schema.createTable('pokemon',function(t,insertData){
            t.bigInteger('id').primary()
            let check = new Object();
            pokedex.forEach( data => {
                let propriete = Object.keys(data);
                propriete.forEach(key => {
                    if(check[key] == null || check[key] == false)
                    {
                        check[key] = true;
                        t.string(key, 100)
                    }
                })
            });         
        });
    }
  });

  

  pokedex.forEach(pokemon => {
    pokemon['id'] = parseInt(pokemon.numéro)
    pokemon['attaques'] = ""
    //console.log(pokemon)
    knex('pokemon').insert(pokemon).then().catch()
}); 
/*
pokedex.forEach(pokemon => {
    let insertValue = []
    let propriete = Object.keys(pokemon);
    propriete.forEach(variable => {
        //console.log(`{${variable} : ${pokemon[variable]}}`)
        insertValue.push(`${variable} : ${pokemon[variable]}`)
        //knex('pokemon').where({id : pokemon.numéro}).update({variable : pokemon[variable]});
}); 
    insertValue.pop()
    console.log(insertValue)
    let value = JSON.stringify(insertValue)
    console.log(value)
    exit()
    console.log(knex('pokemon').insert(insertValue).toString())
});

*/
/*
pokedex.forEach(pokemon => {
    let columns  = Object.keys(pokemon);
    let values  = Object.values (pokemon);
    const sql = `
                INSERT INTO pokemon (${columns .map(col => col).join(',')})
                VALUES (${values.map(() => values).join(',')})
                `;
                knex.raw(sql);
    
    const dataToInsert = columns.map(col => 
        ({ col: pokemon[col] })); 
   //${columns.map(col => col).join(',')} : ${values.map(() => values).join(',')}  
   console.log(dataToInsert)
   exit()
   console.log(knex('pokemon').insert(dataToInsert).toString())
   
});
*/

  /*
  knex.transaction(function(t){
    pokedex.forEach(pokemon => {
        knex('pokemon').transacting(t).insert({'id' : parseInt(pokemon.numéro)}).then(t.commit).catch();

        let propriete = Object.keys(data);
        propriete.forEach(variable => {
            knex('pokemon').transacting(t).where({id : pokemon.numéro}).update({variable : pokemon[variable] }).then(t.commit).catch();
           }); 
    });
  }).then(function() {
    // it worked
   },
   function() {
    // it failed
   });
*/


 


 
 

  