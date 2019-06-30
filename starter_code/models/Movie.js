const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: String,
  director: String,
  stars: Array,
  image: String,
  description: String,
  showtimes: Array,
});

const Movie = mongoose.model('Movie', movieSchema);

//Con esta linea se define lo que quedara publico, ya que se pasara en el exports de otra clase
module.exports = Movie;
