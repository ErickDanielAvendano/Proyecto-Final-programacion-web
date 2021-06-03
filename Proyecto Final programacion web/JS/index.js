//Llamado de los módulos requeridos para la API.
const express = require('express');
const morgan = require('morgan');
const mysql = require('mysql');
//Servidor
const app=express();

//Conexión con la base de datos.
var conectar = mysql.createConnection({
    host: 'sql5.freemysqlhosting.net',
    password: 'xxPmv2AG8H',
    database: 'sql5414103',
    user: 'sql5414103',
});

//Comprobación de la conexión con la base de datos.
conectar.connect(function(error){
    if(!!error){
        console.log(error);
    } else {
        console.log('Base de datos conectada =D');
    }
});

//Configuración del servidor.
app.set('Nombre del servidor','Gasolina');
app.set('port',8181);
//Lectura de archivos
app.set(express.json());
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

//Métodos y direcciones a las cuales dirigirse.
app.post('/suma', (req,res)=>{
    res.send('Petición recivida');
});

app.get('/view',(req,res)=>{
    res.redirect('desarrolladores.html');
});

//Middleware para enviar archivos al frontend.
app.use(express.static('public'));
//Puerto y nombre del servidor mostrados por consola.
app.listen(app.get('port'), () =>{
    console.log(app.get('Nombre del servidor'));
    console.log('Servidor en línea en el puerto: ',app.get('port'));
});