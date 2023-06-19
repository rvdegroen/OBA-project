// IMPORTS
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

// different routers
const frontendRoutes = require('./routes/frontend');
const obaRoutes = require('./routes/oba')



// VARIABLES
const app = express();
const port = 4400;

// MIDDLEWARE
// for static files
app.use(express.static('public'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}));
// parse application/json
app.use(bodyParser.json());

app.set('views', './views');
app.set('view engine', 'ejs');

// MIDDLEWARE ROUTES
app.use('/', frontendRoutes);
app.use('/api/search',obaRoutes)

// homepage
// app.use('/', frontendRouter);

// api
// app.use('/api', apiRouter);



app.listen(port, () => {
    console.log(`The server is running on port http://localhost:${port}/`);
});