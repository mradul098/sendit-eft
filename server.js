require('dotenv').config();
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;
const path = require('path');
app.use(express.static('public'));  //we are telling the express to get the static files which are going to be fetched in our ejs from public folder

const connectDB = require('./config/db');
connectDB();

app.use(express.json());

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

//Routes
app.use('/api/files',require('./router/files'));
app.use('/files', require('./router/show'));
app.use('/files/download',require('./router/download'));

app.listen(PORT,()=>{
    console.log(`listening on the port ${PORT}`);
})