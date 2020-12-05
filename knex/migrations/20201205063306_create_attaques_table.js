exports.up = function(knex) 
{
    const fs = require('fs');
    const data = fs.readFileSync('../cx-react-pokemon/db/pokedex.json');
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
}

exports.down = function(knex) {
    return knex.schema.dropTable('attaques');
};
