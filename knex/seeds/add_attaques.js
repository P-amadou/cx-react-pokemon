const fs = require('fs');

const data = fs.readFileSync('../cx-react-pokemon/db/pokedex.json');
const pokedex = JSON.parse(data);

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('attaques').del()
    .then(function () {
      // Inserts seed entries
        let resultat = []
        pokedex.forEach(pokemon => {
        let attaques = pokemon['attaques']
        attaques.forEach(attaque => {
          attaque['idA'] = parseInt(pokemon.numéro)
          resultat.push(knex('attaques').insert(attaque))
        })
        
        
      });
      return Promise.all(resultat)
    });
};