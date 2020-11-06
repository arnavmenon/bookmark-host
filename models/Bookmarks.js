const mongoose = require('mongoose');

const bmSchema = new mongoose.Schema({
  link: {
    type: String,
    required: true,
  },
  category: {
    type: String,
  }

});

const BM = mongoose.model('Bookmark', bmSchema);
module.exports = BM;