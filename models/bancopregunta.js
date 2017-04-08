/*
Modelo Banco Pregunta.
*/
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var Item = require('./item');

var BancoPregunta = mongoose.model('BancoPregunta', {
   titulo: String,
   creadoPor:String,
   fechaCreacion: {type: Date, default: Date.now},
   items:[{
       type: Schema.ObjectId,
       ref: 'Item'
   }]
});

module.exports = {
  BancoPregunta: BancoPregunta
}
