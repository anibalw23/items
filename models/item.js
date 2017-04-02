/*
Modelo Item.
*/
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var choiceSchema = new Schema({ titulo: String, peso:Number, esCorrecta:Boolean });
var Clasificador = require('./clasificador');



var Item = mongoose.model('Item', {
   titulo: String,
   tipo_pregunta:String,
   creadoPor:String,
   fechaCreacion: {type: Date, default: Date.now},
   choices:[choiceSchema],
   clasificadores:[{
       type: Schema.ObjectId,
       ref: 'Clasificador'
   }]
});

module.exports = {
  Item: Item
}
