
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

  //app.set("db", db);

app.get('/',(request,response)=>{
    response.send('test')
})

app.listen(port, () => {
    if (port==undefined) {
      console.log(`Syntaxe: node server.js <PORT>`);
    }else{
      console.log(`Server is listening on port ${port}`)
    }
    })