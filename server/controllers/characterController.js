const Character = require('../models/characterModel');

const characterController = {};

/**
 * createUser - create and save a new User into the database.
 */
characterController.createCharacter = async (req, res, next) => {
  // write code here
  // console.log(req.body);
  // Destructuring and setting a default value if it's undefined
  const {
    charName = '',
    strAbi = '',
    profBon = '',
    strSav = '',
    dexSav = '',
    conSav = '',
    intSav = '',
    wisSav = '',
    chaSav = '',
    charLev = '',
    charBack = '',
    player = '',
    race = '',
    align = '',
    exp = '',
    charClass = '',
    dexAbi = '',
    conAbi = '',
    intAbi = '',
    wisAbi = '',
    chaAbi = '',
    strMod = '',
    dexMod = '',
    conMod = '',
    intMod = '',
    wisMod = '',
    chaMod = '',
    acrSkl = '',
    AniSkl = '',
    ArcSkl = '',
    AthSkl = '',
    decSkl = '',
    hisSkl = '',
    insSkl = '',
    intSkl = '',
    invSkl = '',
    medSkl = '',
    ntrSkl = '',
    perSkl = '',
    prfSkl = '',
    prsSkl = '',
    rlgSkl = '',
    sohSkl = '',
    sthSkl = '',
    srvSkl = '',
    acrSklButtonOpacity = '0.7',
    pP = '',
    oPandL = '',
    acInp = '',
    iniInp = '',
    spdiInp = '',
    hpMax = '',
    hp = '',
  } = req.body;

  console.log('acrSklButtonOpacity in cC.cC: ', acrSklButtonOpacity);
  console.log('typeof acrSklButtonOpacity in cC.cC: ', typeof acrSklButtonOpacity);
  try {
    const character = await Character.create({
      charName,
      strAbi,
      profBon,
      strSav,
      dexSav,
      conSav,
      intSav,
      wisSav,
      chaSav,
      charLev,
      charBack,
      player,
      race,
      align,
      exp,
      charClass,
      dexAbi,
      conAbi,
      intAbi,
      wisAbi,
      chaAbi,
      strMod,
      dexMod,
      conMod,
      intMod,
      wisMod,
      chaMod,
      acrSkl,
      AniSkl,
      ArcSkl,
      AthSkl,
      decSkl,
      hisSkl,
      insSkl,
      intSkl,
      invSkl,
      medSkl,
      ntrSkl,
      perSkl,
      prfSkl,
      prsSkl,
      rlgSkl,
      sohSkl,
      sthSkl,
      srvSkl,
      acrSklButtonOpacity,
      pP,
      oPandL,
      acInp,
      iniInp,
      spdiInp,
      hpMax,
      hp,
    });

    console.log('character.acrSklButtonOpacity: ', character.acrSklButtonOpacity);
    //   console.log('there')
    res.locals.character = character._id;
    return next();
  } catch (err) {
    return next({
      log: 'Error occurred in characterController.createCharacter.',
      status: 500,
      message: { err: 'An error occured' },
    });
  }
};

characterController.getCharacter = async (req, res, next) => {
  // console.log('in characterController.getAllCharacters from /charactersList');
  // console.log('req.body: ', req.body);
  try {
    // console.log('characterController.getCharacter req.body.charId: ', req.body.charId);
    let id;
    if (req.body.charId) {
      id = req.body.charId // for the post request in characterSheet
    } else {
      id = req.body; // for the form post request in other stuff
    }
    const character = await Character.findOne({_id: id});
    // console.log('characterController.getCharacter character: ', character);
    res.locals.character = character;
    // if (!_.isEmpty(req.body)) {
    //   res.locals.character = "yes";
    // }
    // console.log('cC.gC res.locals.character: ', res.locals.character);
    return next();
  } catch (err) {
    return next({
      log: 'Error occurred in userController.getAllCharacters',
      status: 500,
      message: { err: 'An error occurred' },
    });
  }
};

characterController.updateCharacter = async (req, res, next) => {
  const {
    charName,
    strAbi,
    profBon,
    strSav,
    dexSav,
    conSav,
    intSav,
    wisSav,
    chaSav,
    charLev,
    charBack,
    player,
    race,
    align,
    exp,
    charClass,
    dexAbi,
    conAbi,
    intAbi,
    wisAbi,
    chaAbi,
    strMod,
    dexMod,
    conMod,
    intMod,
    wisMod,
    chaMod,
    acrSkl,
    AniSkl,
    ArcSkl,
    AthSkl,
    decSkl,
    hisSkl,
    insSkl,
    intSkl,
    invSkl,
    medSkl,
    ntrSkl,
    perSkl,
    prfSkl,
    prsSkl,
    rlgSkl,
    sohSkl,
    sthSkl,
    srvSkl,
    acrSklButtonOpacity,
    pP,
    oPandL,
    acInp,
    iniInp,
    spdiInp,
    hpMax,
    hp,
  } = req.body;


  console.log('req.body in cC.update: ', req.body)
  console.log('acrSklButtonOpacity in cC.update: ', acrSklButtonOpacity);

  // console.log('req.body: ', req.body)
  try {
    let id;
    if (req.body.charId) {
      id = req.body.charId // for the post request in characterSheet
    } else if (req.body._id) {
      id = req.body._id; // for the form post request in other stuff
    } else {
      id = req.body;
    }
    // console.log('id before Character.updateOne: ', id);
    // const character = await Character.findOne({_id: id});
    // console.log('character before update: ', character);

    await Character.updateOne(
      {"_id": id},
      {$set: {
      charName,
      strAbi,
      profBon,
      strSav,
      dexSav,
      conSav,
      intSav,
      wisSav,
      chaSav,
      charLev,
      charBack,
      player,
      race,
      align,
      exp,
      charClass,
      dexAbi,
      conAbi,
      intAbi,
      wisAbi,
      chaAbi,
      strMod,
      dexMod,
      conMod,
      intMod,
      wisMod,
      chaMod,
      acrSkl,
      AniSkl,
      ArcSkl,
      AthSkl,
      decSkl,
      hisSkl,
      insSkl,
      intSkl,
      invSkl,
      medSkl,
      ntrSkl,
      perSkl,
      prfSkl,
      prsSkl,
      rlgSkl,
      sohSkl,
      sthSkl,
      srvSkl,
      acrSklButtonOpacity,
      pP,
      oPandL,
      acInp,
      iniInp,
      spdiInp,
      hpMax,
      hp,
    }});
    // character = await Character.findOne({_id: id});
    // console.log('character after update: ', character);
      // console.log('there')
      // console.log('id after update: ', id)
    res.locals.characterid = id;
    // console.log("res.locals.characterid: ", res.locals.characterid);
    return next();
  } catch (err) {
    return next({
      log: 'Error occurred in characterController.updateCharacter.',
      status: 500,
      message: { err: 'An error occured' },
    });
  }
}

characterController.getAllCharacters = async (req, res, next) => {
  // console.log('in characterController.getAllCharacters from /charactersList');

  try {
    const characters = await Character.find({});
    res.locals.characters = characters;
    return next();
  } catch (err) {
    return next({
      log: 'Error occurred in characterController.getAllCharacters',
      status: 500,
      message: { err: 'An error occurred' },
    });
  }
};

characterController.deleteCharacter = async (req, res, next) => {
  try {
    let id;
    if (req.body.charId) {
      id = req.body.charId // for the post request in characterSheet
    } else if (req.body._id) {
      id = req.body._id; // for the form post request in other stuff
    } else {
      id = req.body;
    }
    console.log('id in cC.deleteCharacter: ', id);
    await Character.deleteOne({"_id": id});
    return next();
  } catch (err) {
    return next({
      log: 'Error occurred in characterController.updateCharacter.',
      status: 500,
      message: { err: 'An error occured' },
    });
  }
}

characterController.deleteAllCharacters = async (req, res, next) => {
  // console.log('in characterController.getAllCharacters from /charactersList');

  try {
    await Character.deleteMany({});
    // res.locals.characters = characters;
    return next();
  } catch (err) {
    return next({
      log: 'Error occurred in userController.deleteAllUsers',
      status: 500,
      message: { err: 'An error occurred' },
    });
  }
};

module.exports = characterController;
