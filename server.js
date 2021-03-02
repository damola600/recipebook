const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;



app.use(cors());
app.use(express.json());

//const uri = process.env.ATLAS_URI;

mongoose.connect('mongodb+srv://dbUser:dbUserPassword@cluster0.dw6pw.mongodb.net/recipebook?retryWrites=true&w=majority', { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});

const connection = mongoose.connection;

connection.once('open', () => {
  console.log("database connection established");
});
const recipeRouter = require('./routes/recipes');
const userRouter = require('./routes/users');


app.use('/users', userRouter);
app.use('/recipes', recipeRouter);

//...other imports
const path = require("path")

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, 'client/build')))

// Anything that doesn't match the above, send back index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'))
})

app.listen(port, () => {
    console.log(`server running on port: ${port}`);
});