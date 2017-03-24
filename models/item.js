/*
Modelo Item.
*/
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var choiceSchema = new Schema({ titulo: String, peso:Number, esCorrecta:Boolean });

var Item = mongoose.model('Item', {
   titulo: String,
   tipo_pregunta:String,
   creadoPor:String,
   fechaCreacion: {type: Date, default: Date.now},
   choices:[choiceSchema],
});

module.exports = {
  Item: Item
}
