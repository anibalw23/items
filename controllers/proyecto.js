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
