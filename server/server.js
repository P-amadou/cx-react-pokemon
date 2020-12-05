const express = require('express')
const {development}= require('../knexfile')
const fileData=require('./fillData')
let app = express()
let port=4242 //process.argv[2]

const knex = require('../knex/knex.js')(development);
  

  //app.use()
  
let selectAllPokemon=knex.select().from('pokemon')
app.get('/',(request,response)=>{
  selectAllPokemon 
    .then((id)=>{
      response.send(id)
    })
  
})

app.listen(port, () => {
    if (port==undefined||port==null) {
      console.log(`Syntaxe: node server.js <PORT>`);
      
    }else{
      console.log(`Server is listening on port ${port}`)
    }
    })