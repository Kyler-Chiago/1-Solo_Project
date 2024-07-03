const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const characterSchema = new Schema({
    // I don't want them required since most people aren't going to fill out every slot before saving

//   charName: {type: String, required: true},
charName: {type: String},
  strAbi: {type: String},
//   dexAbi: {type: String, required: true},
//   conAbi: {type: String, required: true},
//   intAbi: {type: String, required: true},
//   wisAbi: {type: String, required: true},
//   insp: {type: String, required: true},
  profBon: {type: String},
  strSav: {type: String},
  dexSav: {type: String},
  conSav: {type: String},
  intSav: {type: String},
  wisSav: {type: String},
  chaSav: {type: String},
});

module.exports = mongoose.model('Character', characterSchema);