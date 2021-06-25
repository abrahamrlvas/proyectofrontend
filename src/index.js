const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors');
const database = require('./settings/databaseConnection');

dotenv.config()
const app = express();
const port = process.env.PORT || 4000

app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors({
  origin: ['http://localhost:8080' || 'http://localhost:8081'],
  methods: ['GET', 'POST', 'DELETE', 'PUT'],
  credentials: true
}));

app.listen(port, async () => {
  try {
    await database.sync();
    console.log('Server listening in port', port);
    console.log('Database is connected succesfully');
  } catch (error) {
    console.error('Something is wrong', error);
  }
});