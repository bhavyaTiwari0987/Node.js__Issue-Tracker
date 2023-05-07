const express = require('express');
const path = require('path');
const viewRouter = require('./routes/viewRoute');

const app = express();

// SETTING VIEW ENGINE
app.set('view engine' , 'ejs');
app.set('views' , path.join(__dirname, 'views'));

// SETTING STATIC FILE
app.use(express.static(`${__dirname}/public`));



//MOUNTING THE ROUTERS
app.use('/' , viewRouter);

// RUNNING SERVER
const port = 8000;
app.listen(port, ()=> {
    console.log('Server is running on port:', port);
})