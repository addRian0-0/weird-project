const express = require('express');
const path = require('path');
const app = express();
const morgan = require('morgan');
app.set('port', process.env.PORT || 4000);

//app.set('port', );
app.set('views', path.join(__dirname, './src/public/views'));
app.set('view engine', '.ejs');

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use('/', require('./src/routes/control.routes'));

app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), () => {
    console.log(`Servidor en el puerto ${app.get('port')}`);
})
