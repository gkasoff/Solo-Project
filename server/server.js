const express = require('express');
const mongoose = require('mongoose')
const colors = require('colors')
const dotenv = require('dotenv').config();
const path = require('path')
const cors = require('cors')

const app = express();

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use(cors());

app.use('/goals', require('./routes/goalRoutes'))

app.use((err, req, res, next) => {
   const defaultErr = {
     log: 'Express error handler caught unknown middleware error',
     status: 400,
     message: { err: 'An error occurred' },
   };
   const errorObj = Object.assign({}, defaultErr, err);
   console.log(errorObj.log);
   return res.status(errorObj.status).json(errorObj.message);
 });

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));