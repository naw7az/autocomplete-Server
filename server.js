const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const usersRouter = require('./routes/users');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB is connected Successfull.')
})

app.get('/', (req, res) => {
  res.send('Success')
})

app.use('/users', usersRouter)

app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`))
