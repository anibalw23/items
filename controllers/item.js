/*
Controlador Item.
*/

var mongoose = require('mongoose');
var Item = require('../models/item').Item;


exports.list_all_items = function(req, res) {
   res.setHeader('Content-Type', 'application/json');
    Item.find(function(err, items) {
        if(err) {
            res.send(err);
        }
        console.log(items);
        res.send(JSON.stringify(items));
    });
};

exports.find_item = function(req, res) {
  res.setHeader('Content-Type', 'application/json');
    Proyecto.findOne({'_id' : req.params.id },function(err, items) {
        if(err) {
            res.send(err);
        }
        res.send(JSON.stringify(items));
    });
};

exports.delete_item = function(req, res) {
  res.setHeader('Content-Type', 'application/json');
    Proyecto.findByIdAndRemove({'_id' : req.params.id },function(err, item) {
        if(err) {
            res.send(err);
        }
        var response = {
            message: "Proyecto Borrado Exitosamente!",
            id: item._id
        };
        res.send(res);
    });
};



exports.edit_item = function(req, res) {
    Item.findOne({'_id' : req.body._id }, function (err, item) {
    // Handle any possible database errors
    if (err) {
        res.status(500).send(err);
    } else {
        // Update each attribute with any possible attribute that may have been submitted in the body of the request
        // If that attribute isn't in the request body, default back to whatever it was before.
        item.titulo = req.body.titulo || item.titulo;
        item.tipo_pregunta = req.body.tipo_pregunta || item.tipo_pregunta;

        // Save the updated document back to the database
        item.save(function (err, item) {
            if (err) {
                res.status(500).send(err)
            }
            res.send(item);
        });
    }
    });
 //res.send("OK");
};



exports.create_item = function(req, res) {
    console.log("Req = " + req.body);
    console.log(req.body);
    Item.create({
            titulo : req.body.titulo,
            tipo_pregunta : req.body.tipo_pregunta,
        }, function(err, item) {
            if (err)
                res.send(err);

            // get and return all the todos after you create another
            Item.find(function(err, item) {
                if (err)
                    res.send(err)
                res.json(item);
            });
        });
};
