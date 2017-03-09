/*
Modelo Proyecto.
*/
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var Proyecto = mongoose.model('Proyecto', {
   nombre: String,
   codigo: String,
   fechaInicio:{type: Date, default: Date.now},
   fechaFin:  {type: Date, default: Date.now},
});

module.exports = {
  Proyecto: Proyecto
}
