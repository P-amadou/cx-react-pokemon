const { json } = require('body-parser');
const fs = require('fs');
const { exit } = require('process');
const {development}= require('../knexfile')
const knex = require('knex')(development);

//const data = fs.readFileSync('./db/pokedex.json');
    const data = fs.readFileSync('../db/pokedex.json');
    const pokedex = JSON.parse(data);
    // pokedex.forEach( data => {
    //     console.log(data.numéro)
    //     let propriete = Object.values(data);
    //     console.log("Pokemon : \n")
    //     propriete.forEach(values => {
    //         console.log(values)
    //     }
    //     )

    //     let attaque = data.attaques;
    //     attaque.forEach(dataA => {

    //         let proprieteAttack= Object.values(dataA);
    //         console.log("Attaques : \n")
    //         proprieteAttack.forEach(valuesA => {
                
    //            console.log(valuesA)
    //         });
    //         exit(0);
    //     });
        
    // });
    


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
        return knex.schema.createTable('pokemon',function(t){
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
let tabAttributes=[], tabValues=[]

pokedex.forEach( pokemon => {
            //console.log(pokemon.numéro)
            //knex('pokemon').insert({'id' : parseInt(pokemon.numéro)}).then().catch()
            let propriete = Object.values(pokemon);
            //console.log("Pokemon : \n")
            propriete.forEach(values => {
            tabValues.push(values)
            //knex('pokemon').insert({values}).then().catch()
            //knex('pokemon').where({id : pokemon.numéro}).update({ values }).then().catch();
            }) 
        })

pokedex.forEach( data => {
let propriete = Object.keys(data);

propriete.forEach(key => {
   tabAttributes.push(key)
    console.log(data);
})
});

/*
for (let i = 0; i < tabValues.length; i++) {
    //console.log('tab des columns'+tabAttributes[i]);
    knex('pokemon').insert({numéro : tabValues[i]},{nom:tabValues[i]}).then().catch();
}
 */



//    let propriete = Object.keys(pokemon);
//     propriete.forEach(variable => {
//         console.log(variable + " : " + pokemon[variable] )
//         knex('pokemon').where({id : pokemon.numéro}).update({variable : pokemon[variable] }).then().catch();
//     });

// for (const key in pokedex) {
//     console.log(`${tabAttributes[key]} : ${tabValues[key]}`);
// }