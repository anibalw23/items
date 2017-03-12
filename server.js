console.log("Hola Mundo Items");
var express = require("express");
var app = express();
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/dbBancoPreguntas');

// Configuración
app.configure(function() {
    // Localización de los ficheros estÃ¡ticos
    app.use("node_modules", express.static('node_modules'));
    app.use('/app', express.static(__dirname + '/app'));
    app.use('/assets/json', express.static(__dirname + '/assets/json'));
    app.use('/assets/css', express.static(__dirname + '/assets/css'));
    app.use('/assets/img', express.static(__dirname + '/assets/img'));
    app.use('/assets/js', express.static(__dirname + '/assets/js'));
    app.use('/assets/lib', express.static(__dirname + '/assets/lib'));
    app.use('/bower_components/', express.static(__dirname + '/bower_components/'));
    // Muestra un log de todos los request en la consola
    app.use(express.logger('dev'));
    // Permite cambiar el HTML con el método POST
    app.use(express.bodyParser());

    // Simula DELETE y PUT
    app.use(express.methodOverride());
});

/*Controlador de Proyectos*/
var proyectoController = require('./controllers/proyecto');
app.get('/api/proyectos',  proyectoController.list_all_proyectos);
app.post('/api/proyectos',  proyectoController.create_proyecto);
app.get('/api/proyectos/:id',  proyectoController.find_proyecto);
app.delete('/api/proyectos/:id',  proyectoController.delete_proyecto);
app.put('/api/proyectos/',  proyectoController.edit_proyecto);

// Carga una vista HTML simple donde irá nuestra Single App Page
// Angular Manejará el Frontend
app.get('/', function(req, res) {
   res.sendfile('index.html');
});


// Escucha en el puerto 8080 y corre el server
app.listen(8080, function() {
    console.log('App listening on port 8080');
});
