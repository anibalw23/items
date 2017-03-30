/*
Controlador Clasificador.
*/

var mongoose = require('mongoose');
var Clasificador = require('../models/clasificador').Clasificador;


exports.list_all_clasificadores = function(req, res) {
   res.setHeader('Content-Type', 'application/json');
   Clasificador.GetFullArrayTree(function (err, tree) {
          if(err) {
                res.send(err);
          }
        res.send(JSON.stringify(tree));
   });
  /* Clasificador.findOne({parentId: null}, function(err, doc){
        doc.getArrayTree(function(err, tree){
          if(err) {
                res.send(err);
          }
          res.send(JSON.stringify(tree));
        });
   }); */
};

exports.find_clasificador = function(req, res) {
  res.setHeader('Content-Type', 'application/json');
    Clasificador.findOne({'_id' : req.params.id },function(err, clasificadores) {
        if(err) {
            res.send(err);
        }
        res.send(JSON.stringify(clasificadores));
    });
};

exports.delete_clasificador = function(req, res) {
  res.setHeader('Content-Type', 'application/json');
    Clasificador.remove({'_id' : req.params.id },function(err, clasificador) {
        if(err) {
            res.send(err);
        }
        var response = {
            message: "Proyecto Borrado Exitosamente!",
            id: clasificador._id
        };
        res.send(response);
    });
};



exports.edit_clasificador = function(req, res) {
    Clasificador.findOne({'_id' : req.body._id }, function (err, clasificador) {
    // Handle any possible database errors
    if (err) {
        res.status(500).send(err);
    } else {
        // Update each attribute with any possible attribute that may have been submitted in the body of the request
        // If that attribute isn't in the request body, default back to whatever it was before.
        clasificador.label = req.body.label || clasificador.label;

        // Save the updated document back to the database
        clasificador.save(function (err, clasificador) {
            if (err) {
                res.status(500).send(err)
            }
            res.send(clasificador);
        });
    }
    });
 //res.send("OK");
};



exports.create_clasificador = function(req, res) {
    console.log(req.body);
    if(req.body.parentId == null){
        console.log("parentId == null");
        clasificador = new Clasificador({label: req.body.label, parentId: null, path:''});
        clasificador.save(function(err, clasificadores){
            res.json(clasificadores);
        });
    }
    else{
       Clasificador.findOne({'_id' : req.body.parentId },function(err, clasificador) {
            if(err) {
               res.send(err);
            }
            clasificador.appendChild({label: req.body.label}, function(err, childClasificador){
                res.json(childClasificador);
            });
        });

    }



};
