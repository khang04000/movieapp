const mongoose = require('mongoose');
const db = `mongodb://ykwong997:ljyk180426@ds241133.mlab.com:41133/khangmovies`;

mongodb: mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log('Connected to database');
  })
  .catch(error => {
    console.log('Mongoose connection error', error);
  });

//Title,Year,Genre,Actors,Plot and Poster

const schema = mongoose.Schema({
  title: { type: String },
  year: { type: String },
  genre: { type: String },
  actors: { type: String },
  plot: { type: String },
  poster: { type: String }
});

const Movie = mongoose.model('Movie', schema, 'movieCollecion');

module.exports = Movie;
