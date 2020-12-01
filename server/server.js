
const express = require('express')
//const knex = require('../knex/knex.js');
let app = express()
let port=process.argv[2]

const knex = require('../knex/knex.js')({
  client: 'pg',
  version: '13',
  connection: {
    host : 'localhost',
    user : 'postgres',
    password : '',
    database : 'pokedex'
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