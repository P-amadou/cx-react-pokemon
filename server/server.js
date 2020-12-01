const express = require('express')
const knex = require('../knex/knex.js');
let app = require('express')()
let port=4242  //process.argv[2]

app.get('/',(request,response)=>{
    response.send('<h1>test !</h1>')
})

app.listen(port, () => {
    if (port==undefined) {
      console.log(`Syntaxe: node server.js <PORT>`);
    }else{
      console.log(`Server is listening on port ${port}`)
    }
    })