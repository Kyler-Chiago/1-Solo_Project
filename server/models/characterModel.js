const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const characterSchema = new Schema({
  // I don't want them required since most people aren't going to fill out every slot before saving

  //   charName: {type: String, required: true},
  charName: { type: String },
  charLev: { type: String },
  charBack: { type: String },
  player: { type: String },
  race: { type: String },
  align: { type: String },
  exp: { type: String },
  strAbi: { type: String },
  dexAbi: {type: String},
  conAbi: {type: String},
  intAbi: {type: String},
  wisAbi: {type: String},
  chaAbi: {type: String},
  profBon: { type: String },
  strSav: { type: String },
  dexSav: { type: String },
  conSav: { type: String },
  intSav: { type: String },
  wisSav: { type: String },
  chaSav: { type: String },
  charClass: {type: String },
  strMod: {type: String},
});

module.exports = mongoose.model('Character', characterSchema);
