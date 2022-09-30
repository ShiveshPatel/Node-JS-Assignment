const mongoose = require('mongoose');
const { db } = require('./model/Book');

try {
    mongoose.connect('mongodb://localhost:27017/Book');
  } catch (error) {
    handleError(error);
  }
  module.exports=db;


