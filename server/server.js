const fileData=require('./fillData')
const express = require('express')
let app = express()
let port=4242 //process.argv[2]

const knex = require('../knex/knex.js')({
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      user : 'postgres',
      password : 'Connecter0',
      database : 'pokedex',
      charset: 'utf8'
    }
  });

  //app.use()
  
selectAllPokemon=knex.select('id').from('pokemon')
app.get('/',(request,response)=>{
  selectAllPokemon 
    .then((id)=>{
      response.send(id)
    })
  
})

app.listen(port, () => {
    if (port==undefined) {
      console.log(`Syntaxe: node server.js <PORT>`);
    }else{
      console.log(`Server is listening on port ${port}`)
    }
    })