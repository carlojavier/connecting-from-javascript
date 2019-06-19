const { Client } = require('pg');
const settings = require("./settings");
const knex = require('knex')
    
 const config =   {
    client: 'pg',
    connection: settings
}

const client = knex(config)

const first_name = process.argv[2];
const last_name = process.argv[3];
const birthdate = process.argv[4];

client('famous_people')
    .returning('*')
    .insert({
        first_name: first_name,
        last_name: last_name,
        birthdate: birthdate
    })
    .asCallback((err, rows) => {
        console.log(err, rows)
        client.destroy()
    })
