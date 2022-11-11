const express = require('express');
const dotenv = require('dotenv')
const morgan = require('morgan')
const bodyparser = require("body-parser");
const path = require('path')
const connectDB = require('./server/database/connection');

const app = express();

app.use(morgan('tiny'));

// mongodb connection
connectDB();

app.use(bodyparser.urlencoded({
    extended: true
}))

app.set("view engine", "ejs")

app.use('/', require('./server/routes/router'))

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});