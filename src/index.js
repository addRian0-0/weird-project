const express = require('express');
const path = require('path');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 5000;

//app.set('port', );
app.set('views', path.join(__dirname, 'public/views'));
app.set('view engine', '.ejs');

app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use('/', require('./routes/control.routes'));

app.use((req,res,next)=>{
    next();
})
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT,() =>{
    console.log(`Servidor en el puerto ${PORT}`);
})
