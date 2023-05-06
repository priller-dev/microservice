require('dotenv').config();

const {
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_PORT,
  DB_NAME,
} = process.env;

const express = require('express');
const mongoose = require('mongoose');
const mongoString = `mongodb://root:aSLJqN22pBluITGH@mongodb:27017/testdb`;
const routes = require('./routes/routes');


mongoose.connect(mongoString);
const database = mongoose.connection;

console.log(mongoString)

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
const app = express();

app.use(express.json());

app.listen(8080, () => {
    console.log(`Server Started at ${8080}`)
})

app.use('/api', routes)