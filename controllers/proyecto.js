/*
Controlador Proyecto.
*/

var mongoose = require('mongoose');
var Proyecto = require('../models/proyecto').Proyecto;


exports.list_all_proyectos = function(req, res) {
  res.setHeader('Content-Type', 'application/json');
    Proyecto.find(function(err, proyectos) {
        if(err) {
            res.send(err);
        }
        res.send(JSON.stringify(proyectos));
    });
};

exports.find_proyecto = function(req, res) {
  res.setHeader('Content-Type', 'application/json');
    Proyecto.findOne({'_id' : req.params.id },function(err, proyectos) {
        if(err) {
            res.send(err);
        }
        res.send(JSON.stringify(proyectos));
    });
};

exports.delete_proyecto = function(req, res) {
  res.setHeader('Content-Type', 'application/json');
    Proyecto.findByIdAndRemove({'_id' : req.params.id },function(err, proyecto) {
        if(err) {
            res.send(err);
        }
        var response = {
            message: "Proyecto Borrado Exitosamente!",
            id: proyecto._id
        };
        res.send(res);
    });
};



exports.edit_proyecto = function(req, res) {
    Proyecto.findOne({'_id' : req.body._id }, function (err, proyecto) {
    // Handle any possible database errors
    if (err) {
        res.status(500).send(err);
    } else {
        // Update each attribute with any possible attribute that may have been submitted in the body of the request
        // If that attribute isn't in the request body, default back to whatever it was before.
        proyecto.nombre = req.body.nombre || proyecto.nombre;
        proyecto.codigo = req.body.codigo || proyecto.codigo;
        proyecto.fechaInicio = req.body.fechaInicio || proyecto.fechaInicio;
        proyecto.fechaFin = req.body.fechaInicio || proyecto.fechaInicio;

        // Save the updated document back to the database
        proyecto.save(function (err, proyecto) {
            if (err) {
                res.status(500).send(err)
            }
            res.send(proyecto);
        });
    }
    });
 //res.send("OK");
};



exports.create_proyecto = function(req, res) {
    console.log("Req = " + req.body);
    console.log(req.body);
    Proyecto.create({
            codigo : req.body.codigo,
            nombre : req.body.nombre,
            fechaInicio:req.body.fechaInicio,
            fechaFin:req.body.fechaFin,
        }, function(err, proyecto) {
            if (err)
                res.send(err);

            // get and return all the todos after you create another
            Proyecto.find(function(err, proyectos) {
                if (err)
                    res.send(err)
                res.json(proyectos);
            });
        });
    //console.log(req.body);
};
