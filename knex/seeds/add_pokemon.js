const fs = require('fs');

const data = fs.readFileSync('../cx-react-pokemon/db/pokedex.json');
const pokedex = JSON.parse(data);

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('pokemon').del()
    .then(function () {
      // Inserts seed entries
        let resultat = []
        pokedex.forEach(pokemon => {
        pokemon['id'] = parseInt(pokemon.numéro)
        pokemon['attaques'] = ""
        //console.log(pokemon)
        resultat.push(knex('pokemon').insert(pokemon))
        //knex('pokemon').insert(pokemon)
        
      });
      return Promise.all(resultat)
    });
};
