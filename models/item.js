/*
Modelo Item.
*/
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var Item = mongoose.model('Item', {
   titulo: String,
   tipo_pregunta:String,
   creadoPor:String,
   fechaCreacion: {type: Date, default: Date.now},

});

module.exports = {
  Item: Item
}
