const knex = require('knex')
const pokemon = require ('../db/pokedex.json')
const pg = require('pg');
const fs = require('fs');

/*
let sql = fs.readFileSync('../db/PokedexScriptDB.sql').toString();

pg.connect('postgres://:@localhost:5432/pokedex', (err, client, done) => {
    if(err){
        console.log('error: ', err);
        process.exit(1);
    }
    client.query(sql,(err, result) => {
        done();
        if(err){
            console.log('error: ', err);
            process.exit(1);
        }
        process.exit(0);
    });
});*/