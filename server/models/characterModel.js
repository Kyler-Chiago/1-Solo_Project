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
  dexMod: {type: String},
  conMod: {type: String},
  intMod: {type: String},
  wisMod: {type: String},
  chaMod: {type: String},
  acrSkl: {type: String},
  AniSkl: {type: String},
  ArcSkl: {type: String},
  AthSkl: {type: String},
  decSkl: {type: String},
  hisSkl: {type: String},
  insSkl: {type: String},
  intSkl: {type: String},
  invSkl: {type: String},
  medSkl: {type: String},
  ntrSkl: {type: String},
  perSkl: {type: String},
  prfSkl: {type: String},
  prsSkl: {type: String},
  rlgSkl: {type: String},
  sohSkl: {type: String},
  sthSkl: {type: String},
  srvSkl: {type: String},
  acrSklButtonOpacity: {type: String}, //trying to get this one to work right
  pP: {type: String},
  oPandL: {type: String},
  acInp: {type: String},
  iniInp: {type: String},
  spdiInp: {type: String},
  hpMax: {type: String},
  hp: {type: String},
});

module.exports = mongoose.model('Character', characterSchema);
