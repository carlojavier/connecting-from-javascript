const { Client } = require('pg');
const settings = require("./settings");

const config = {
    user     : settings.user,
    password : settings.password,
    database : settings.database,
    host     : settings.hostname,
    port     : settings.port,
    ssl      : settings.ssl
  };

  const client = new Client(config);
  const queryType = process.argv.slice(2)[0];
  let id = null;

  client.connect((err) => {
      if (err) {
          console.error('something is wrong', err);
          return false;
      }
      console.log('connected to the pg server');
  
        id = process.argv.slice(2)[0];
        client.query('SELECT * FROM famous_people WHERE id = $1', [id], (err, result) => {
            if (err) {
            return console.error("error running query", err);
            }
            console.log(result.rows);
            client.end();
        });             
    });
    