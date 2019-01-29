require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

// const { SERVER_PORT } = process.env;


const app = express();
app.use(bodyParser.json());
app.use( express.static( `${__dirname}/../build` ) );

const port = 4000;
app.listen(port, () => {
    console.log(`Port ${port} is up and running!`)
});