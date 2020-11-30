const { response } = require("express")
const express = require('express')
const knex = require('../knex/knex.js');
let app = require('express')()
let port=process.argv[2]

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