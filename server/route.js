const express = require('express')
const routerPokemon= express.Router()
routerPokemon.get('/pokemons',(req,res)=>{
    response.send(`Liste des pokemons:\n`)
})

module.exports=routerPokemon