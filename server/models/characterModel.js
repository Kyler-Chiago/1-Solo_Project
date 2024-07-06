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
  pP: {type: String},
  oPandL: {type: String},
  acInp: {type: String},
  iniInp: {type: String},
  spdiInp: {type: String},
  hpMax: {type: String},
  hp: {type: String},
  acrButOpa: {type: String},
  acrButCol: {type: String},
  aniButOpa: {type: String},
  aniButCol: {type: String},
  arcButOpa: {type: String},
  arcButCol: {type: String},
  athButOpa: {type: String},
  athButCol: {type: String},
  decButOpa: {type: String},
  decButCol: {type: String},
  hisButOpa: {type: String},
  hisButCol: {type: String},
  insButOpa: {type: String},
  insButCol: {type: String},
  intButOpa: {type: String},
  intButCol: {type: String},
  invButOpa: {type: String},
  invButCol: {type: String},
  medButOpa: {type: String},
  medButCol: {type: String},
  ntrButOpa: {type: String},
  ntrButCol: {type: String},
  perButOpa: {type: String},
  perButCol: {type: String},
  prfButOpa: {type: String},
  prfButCol: {type: String},
  prsButOpa: {type: String},
  prsButCol: {type: String},
  rlgButOpa: {type: String},
  rlgButCol: {type: String},
  sohButOpa: {type: String},
  sohButCol: {type: String},
  sthButOpa: {type: String},
  sthButCol: {type: String},
  srvButOpa: {type: String},
  srvButCol: {type: String},
  inspButOpa: {type: String},
  strSTButOpa: {type: String},
  dexSTButOpa: {type: String},
  conSTButOpa: {type: String},
  intSTButOpa: {type: String},
  wisSTButOpa: {type: String},
  chaSTButOpa: {type: String},
  tempHp: {type: String},
  ttlHdInp: {type: String},
  curHdInp: {type: String},
  curDSSuc: {type: String},
  curDSFal: {type: String},
  atkNam1: {type: String},
  atkNam2: {type: String},
  atkNam3: {type: String},
  atkBon1: {type: String},
  atkBon2: {type: String},
  atkBon3: {type: String},
  dmgTyp1: {type: String},
  dmgTyp2: {type: String},
  dmgTyp3: {type: String},
  atkSplInp: {type: String},
  cB3InpAre: {type: String},
  cpInp: {type: String},
  spInp: {type: String},
  epInp: {type: String},
  gpInp: {type: String},
  ppInp: {type: String},
});

module.exports = mongoose.model('Character', characterSchema);
