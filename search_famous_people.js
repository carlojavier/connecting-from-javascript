const { Client } = require('pg');
const settings = require("./settings");
const knex = require('knex')
    
 const config =   {
    client: 'pg',
    connection: settings
}

const client = knex(config)

const name = process.argv[2];

 
client('famous_people')
.select().where('first_name', name)
.asCallback(function(err, rows) {
    if (err) return console.error(err);
        console.log(rows);
})