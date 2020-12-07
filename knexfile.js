module.exports={
  
    development: {
        client: 'pg',
        connection: {
          host : 'localhost',
          user : 'postgres',
          password : 'Connecter0',
          database : 'pokedex',
          charset: 'utf8'
        },
        migrations: {
          directory: __dirname + '/knex/migrations',
        },
        seeds: {
          directory: __dirname + '/knex/seeds'
        }
      }
}