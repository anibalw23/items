/*
Modelo Clasificador.
*/

var mongoose = require('mongoose'),
    materializedPlugin = require('mongoose-materialized'),
    Schema = mongoose.Schema;

var clasificadorSchema = new Schema({ label: String });
clasificadorSchema.plugin(materializedPlugin);
var Clasificador = mongoose.model('clasificador', clasificadorSchema);

module.exports = {
  Clasificador: Clasificador
}
