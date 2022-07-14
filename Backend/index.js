const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();

//Settings

app.set('port', process.env.PORT || 3000);

//Middlewares 
//Cada que llega un dato comprueba que la informacion enviada sea json
app.use(morgan('dev'));
app.use(express.json());

//Routes

//Creamos la API
app.use('/api/tasks',require('./routes/task.routes'))


//Static files

app.use(express.static(path.join(__dirname, '..', 'Frontend', 'dist')));

// console.log(path.join(__dirname,'public'))
console.log(path.join(__dirname, '..', 'Frontend', 'public'))


//Starting the server 

app.listen(app.get('port'), () => {
    console.log(`${app.get('port')}`);
});