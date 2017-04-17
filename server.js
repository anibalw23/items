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

/*Controlador de Items*/
var itemController = require('./controllers/item');
app.get('/api/items',  itemController.list_all_items);
app.post('/api/items',  itemController.create_item);
app.get('/api/items/:id',  itemController.find_item);
app.post('/api/itemsByClasificadores',  itemController.findByClasificatores);
app.delete('/api/items/',  itemController.delete_item);
app.put('/api/items/',  itemController.edit_item);

/*Controlador de clasificadores*/
var clasificadorController = require('./controllers/clasificador');
app.get('/api/clasificadores',  clasificadorController.list_all_clasificadores);
app.post('/api/clasificadores',  clasificadorController.create_clasificador);
app.get('/api/clasificadores/:id',  clasificadorController.find_clasificador);
app.delete('/api/clasificadores/:id',  clasificadorController.delete_clasificador);
app.put('/api/clasificadores/',  clasificadorController.edit_clasificador);


var bancopreguntasController = require('./controllers/bancopregunta');
app.get('/api/bancopreguntas',  bancopreguntasController.list_all_bancopreguntas);
app.post('/api/bancopreguntas',  bancopreguntasController.create_bancopregunta);
app.get('/api/bancopreguntas/:id',  bancopreguntasController.find_bancopregunta);
app.delete('/api/bancopreguntas/:id',  bancopreguntasController.delete_bancopregunta);
app.put('/api/bancopreguntas/',  bancopreguntasController.edit_bancopregunta);


var quizController = require('./controllers/quiz');
app.get('/api/quiz',  quizController.list_all_quizes);
app.post('/api/quiz',  quizController.create_quiz);
app.get('/api/quiz/:id',  quizController.find_quiz);
app.delete('/api/quiz/:id',  quizController.delete_quiz);
app.put('/api/quiz/',  quizController.edit_quiz);





/*var mongoose = require('mongoose');
var Clasificador = require('./models/clasificador').Clasificador;
cat = new Clasificador({label: "Familia 1"});
cat.save(function(err, foods){
    // append new sub category
    foods.appendChild({label: "Familia 1.1"}, function(err, vega){
        // vega: { name: "Vegetables", parentId: [foods ID], path: ',[foods ID]' }
    });
    foods.appendChild({label: "Familia 1.2"}, function(err, vega){
        // vega: { name: "Vegetables", parentId: [foods ID], path: ',[foods ID]' }
    });
    // or make new
    //var vega = new Clasificador({label: "Vegetables"});
    // saving with append
    //foods.appendChild(vega, function(err, data){  });
    // or save traditional way
    //vega.parentId = foods._id;
    //vega.save(function(err, data){ });
});*/






// Carga una vista HTML simple donde irá nuestra Single App Page
// Angular Manejará el Frontend
app.get('/', function(req, res) {
   res.sendfile('index.html');
});


// Escucha en el puerto 8080 y corre el server
app.listen(8080, function() {
    console.log('App listening on port 8080');
});
