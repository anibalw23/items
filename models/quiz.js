/*
Modelo Quiz.
*/
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var Item = require('./item');


var QuizSchema = new Schema({
   titulo: String,
   descripcion:String,
   creadoPor:String,
   duracion:Number,
   fechaCreacion:{type: Date, default: Date.now},
   fechaInicio:{type: Date},
   fechaFin:  {type: Date, default: Date.now},
   tipo_quiz: ['Manual', 'Aleatoria', 'TRI'],
   items:[{
       type: Schema.ObjectId,
       ref: 'Item',
   }]
});


var Quiz = mongoose.model('Quiz', QuizSchema);



module.exports = {
  Quiz: Quiz
}
