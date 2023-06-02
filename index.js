// imports
const path = require('path');
const express = require('express');
const dotenv = require('dotenv').config();
const openaiRoutes = require('./routes/openaiRoutes')

//using PORT from env file
const port = process.env.PORT || 5000;

// initialize experss: returned object is express app
const app = express();

//Enables body parser: easier to handle request data.
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// Set static Folder
app.use(express.static(path.join(__dirname, 'public')))


//mounts routes: first argument designates the path. second argument is the code, imported from openaiRoutes file
app.use('/openai', openaiRoutes)

app.listen(port, () => console.log(`Server started on PORT: ${port}`))