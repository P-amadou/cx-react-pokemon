const express = require('express')
const {development}= require('../knexfile')
//const fileData=require('./fillData')
var cors = require('cors')
let app = express()
let port=process.argv[2]
const router=express.Router()
const routePokemon=require('./route')
const knex = require('../knex/knex.js')(development);
 

let selectAllPokemon=knex.select().from('pokemon').orderBy('numéro')
let attaquesAllPokemon=knex.select().from('attaques')
app.use(cors())
app.get('/',(req,res)=>{
      res.send(`<h1>Welcome to our API Pokedex </h1>`)
   })

app.get('/pokemons',(req,res)=>{
  selectAllPokemon 
    .then((data)=>{
      res.send(data)
    })
    attaquesAllPokemon.then((data)=>{
      res.send(data)
    })
   })

app.get('/pokemons/:id',(req,res)=>{
  let {id}=req.params
  let reg=/:/g
  id=id.replace(reg,"")
    console.log(id);
    let selectAllDataPokemonById=knex.select().from('pokemon').where('idP', id)
    selectAllDataPokemonById.then((data)=>{
      res.send(data)
    })
  })

app.post('/pokemons',(req,res)=>{
    knex.insert(req.body).returning('*').into('pokemon').then((data)=>{
      res.send(data)
    })
  })

/*app.delete('/pokemons/:id',(req,res)=>{
  let {id}=req.params
  let reg=/:/g
  id=id.replace(reg,"")
  let deleteAllDataPokemonById=knex('pokemon').del().where('idP', id)
  deleteAllDataPokemonById.then((data)=>{
    res.send(data)
  })
})*/

app.listen(port, () => {
    if (port==undefined||port==null) {
      console.log(`Syntaxe: node server.js <PORT>`);
      
    }else{
      console.log(`Server is listening on port ${port}`)
    }
    })