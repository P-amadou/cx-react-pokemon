const express = require('express')
const {development}= require('../knexfile')
//const fileData=require('./fillData')
let cors = require('cors')
let app = express()
let port=process.argv[2] || 4242
// const router=express.Router()
// const routePokemon=require('./route')
const knex = require('../knex/knex.js')(development);

let selectAllPokemon=knex.select().from('pokemon').join('attaques','pokemon.idP','attaques.idA')

//let selectAllPokemon=knex.select().from('pokemon').orderBy('numéro')
let selectAllDataPokemonById
app.use(cors())
app.get('/',(req,res)=>{
      res.send(`<h1>Welcome to our API Pokedex </h1>`)
   })

app.get('/pokemons',(req,res)=>{
  knex.clear('select').clear('where')
  selectAllPokemon 
    .then((data)=>{
      res.json(data)
    })
    
   })
   
app.get('/pokemons/:id',(req,res)=>{
  knex.clear('select').clear('where')
  let {id}=req.params
    // console.log(id);
    knex.select('*').from('pokemon').where('idP', id).then(data => {
      res.json(data)
    })
  })

app.post('/pokemons',(req,res)=>{
     knex.insert(req.query).returning('*').into('pokemon').then((data)=>{
      res.json(data)
     })
    // console.log(req.query);
  })

app.delete('/pokemons/:id',(req,res)=>{
  let {id}=req.params
  let deleteAllDataPokemonById=knex('pokemon').where('idP', id).del()
  deleteAllDataPokemonById.then((data)=>{
    res.json(data)
  })
})

app.listen(port, () => {
    if (port==undefined||port==null) {
      console.log(`Syntaxe: node server.js <PORT>`);
      process.exit(0)
    }else{
      console.log(`Server is listening on port ${port}`)
    }
    })