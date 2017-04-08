/*
Controlador Item.
*/

var mongoose = require('mongoose');
var BancoPregunta = require('../models/bancopregunta').BancoPregunta;


exports.list_all_bancopreguntas = function(req, res) {
   res.setHeader('Content-Type', 'application/json');
    BancoPregunta.find(function(err, bancopreguntas) {
        if(err) {
            res.send(err);
        }
        console.log(bancopreguntas);
        res.send(JSON.stringify(bancopreguntas));
    });
};

exports.find_bancopregunta = function(req, res) {
  res.setHeader('Content-Type', 'application/json');
    BancoPregunta.findOne({'_id' : req.params.id },function(err, bancopreguntas) {
        if(err) {
            res.send(err);
        }
        res.send(JSON.stringify(bancopreguntas));
    });
};

exports.delete_bancopregunta = function(req, res) {
  res.setHeader('Content-Type', 'application/json');
    BancoPregunta.findByIdAndRemove({'_id' : req.params.id },function(err, bancopregunta) {
        if(err) {
            res.send(err);
        }
        var response = {
            message: "Proyecto Borrado Exitosamente!",
            id: bancopregunta._id
        };
        res.send(response);
    });
};



exports.edit_bancopregunta = function(req, res) {
    BancoPregunta.findOne({'_id' : req.body._id }, function (err, bancopregunta) {
    // Handle any possible database errors
    if (err) {
        res.status(500).send(err);
    } else {
        // Update each attribute with any possible attribute that may have been submitted in the body of the request
        // If that attribute isn't in the request body, default back to whatever it was before.
        bancopregunta.titulo = req.body.titulo || item.titulo;

        // Save the updated document back to the database
        bancopregunta.save(function (err, item) {
            if (err) {
                res.status(500).send(err)
            }
            res.send(bancopregunta);
        });
    }
    });
 //res.send("OK");
};



exports.create_bancopregunta = function(req, res) {
    console.log("Req = " + req.body);
    console.log(req.body);
     BancoPregunta.create({
        titulo : req.body.titulo,
        items:req.body.items,
    }, function(err, bancopregunta) {
        if (err)
            res.send(err);

        // get and return all the todos after you create another
        BancoPregunta.find(function(err, bancopregunta) {
            if (err)
                res.send(err)
            res.json(bancopregunta);
        });
    });

};
