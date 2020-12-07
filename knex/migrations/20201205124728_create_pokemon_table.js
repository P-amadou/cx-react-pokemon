const fs = require('fs');

exports.up = function(knex) {
    const data = fs.readFileSync('../cx-react-pokemon/db/pokedex.json');
    const pokedex = JSON.parse(data);

    knex.schema.hasTable('pokemon').then(function(exists) {
        if (!exists) {
            return knex.schema.createTable('pokemon',function(t,insertData){
                t.bigInteger('idP').primary()
                let check = new Object();
                pokedex.forEach( data => {
                    let propriete = Object.keys(data);
                    propriete.forEach(key => {
                        if(check[key] == null || check[key] == false)
                        {
                            check[key] = true;
                            t.string(key, 500)
                        }
                        // if(key === 'attaques'){
                        //     t.json('attaques').nullable()
                        // }
                        // pokemon['attaques'] = JSON.stringify(pokemon['attaques'])
                    })
                });         
            });
        }
      });
};

exports.down = function(knex) {
    return knex.schema.dropTable('pokemon');

};
