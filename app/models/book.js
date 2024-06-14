const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    description: String,
    genre: String,
    imageUrl: String,
    pdf: String,
  });

  module.exports = mongoose.model('Book', bookSchema);