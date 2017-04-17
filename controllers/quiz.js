/*
Controlador Quiz.
*/

var mongoose = require('mongoose');
var Quiz = require('../models/quiz').Quiz;


exports.list_all_quizes = function(req, res) {
  res.setHeader('Content-Type', 'application/json');
    Quiz.find(function(err, quizes) {
        if(err) {
            res.send(err);
        }
        res.send(JSON.stringify(quizes));
    });
};

exports.find_quiz = function(req, res) {
  res.setHeader('Content-Type', 'application/json');
    Quiz.findOne({'_id' : req.params.id })
        .populate('items') // <--
        .exec(function (err, quiz) {
          if (err){
              res.send(err);
          }
          res.send(JSON.stringify(quiz));
          // prints "The creator is Aaron"
        });
};

exports.delete_quiz = function(req, res) {
  res.setHeader('Content-Type', 'application/json');
    Quiz.findByIdAndRemove({'_id' : req.params.id },function(err, quiz) {
        if(err) {
            res.send(err);
        }
        var response = {
            message: "Quiz Borrado Exitosamente!",
            id: quiz._id
        };
        res.send(res);
    });
};



exports.edit_quiz = function(req, res) {
    Quiz.findOne({'_id' : req.body._id }, function (err, quiz) {
    // Handle any possible database errors
    if (err) {
        res.status(500).send(err);
    } else {
        // Update each attribute with any possible attribute that may have been submitted in the body of the request
        // If that attribute isn't in the request body, default back to whatever it was before.
        quiz.nombre = req.body.nombre || quiz.nombre;
        quiz.codigo = req.body.codigo || quiz.codigo;
        quiz.fechaInicio = req.body.fechaInicio || quiz.fechaInicio;
        quiz.fechaFin = req.body.fechaInicio || quiz.fechaInicio;

        // Save the updated document back to the database
        quiz.save(function (err, quiz) {
            if (err) {
                res.status(500).send(err)
            }
            res.send(quiz);
        });
    }
    });
 //res.send("OK");
};



exports.create_quiz = function(req, res) {
    console.log("Req = " + req.body);
    console.log(req.body);
    Quiz.create({
            titulo : req.body.titulo,
            descripcion : req.body.descripcion,
            duracion:req.body.duracion,
            tipo_quiz:req.body.tipo_quiz,
            items:req.body.items,
        }, function(err, quiz) {
            if (err)
                res.send(err);

            // get and return all the todos after you create another
            Quiz.find(function(err, quizes) {
                if (err)
                    res.send(err)
                res.json(quizes);
            });
        });
    //console.log(req.body);
};
