/*
Modelo Quiz Responses.
*/
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var Item = require('./item');
var Quiz = require('./quiz');

var QuizResponseSchema = new Schema({
   quizId: { type: Schema.ObjectId, ref: 'Quiz'},
   userId: String,
   fechaCreacion:{type: Date, default: Date.now},
   responses: [{
       itemId:{type: Schema.ObjectId, ref: 'Item'},
       itemType:String,
       itemText:String,
       value: Schema.Types.Mixed
   }]
});
var QuizResponse = mongoose.model('QuizReponse', QuizResponseSchema);

module.exports = {
  QuizResponse: QuizResponse
}


//answer example
/*
{
item_number:2,
item_type:text
item_text:"que es la vida?",
item_value:"buena",
esCorrecta: true,
}




*/
