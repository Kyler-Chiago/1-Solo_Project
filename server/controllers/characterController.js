const Character = require('../models/characterModel');

const characterController = {};

/**
* createUser - create and save a new User into the database.
*/
characterController.createCharacter = async (req, res, next) => {
    // write code here
    console.log(req.body);
    const {charName, strAbi, profBon, strSav, dexSav, conSav, intSav, wisSav, chaSav} = req.body;
    // if(!strAbi || !profBon || !strSav || !dexSav || !conSav || !intSav || !wisSav || !chaSav){
    //   // Make sure error message uses capital E for error
    //   return next({
    //     log: 'Missing info in characterController.createCharacter',
    //     status: 400,
    //     message: { err: 'An Error occurred' },
    //   });
    // }
    try {
        // console.log({username, password});
        // console.log({username: username, password: password})
    //   const character = await Character.create({username: username, password: password});
    // console.log('hello')
      const character = await Character.create({charName, strAbi, profBon, strSav, dexSav, conSav, intSav, wisSav, chaSav});
    //   console.log('there')
      res.locals.character = character._id;
      return next();
    } catch (err) {
      return next({
        log: 'Error occurred in characterController.createCharacter.',
        status: 500,
        message: { err: 'An error occured'},
      });
    }
}

characterController.getAllCharacters = async (req, res, next) => {
    // User.find({}, (err, users) => {
    //   // if a database error occurs, call next with the error message passed in
    //   // for the express global error handler to catch
    //   if (err) return next('Error in userController.getAllUsers: ' + JSON.stringify(err));
      
    //   // store retrieved users into res.locals and move on to next middleware
    //   res.locals.users = users;
    //   return next();
    // });
    try {
      const characters = await Character.find({});
      res.locals.characters = characters;
      return next();
    } catch (err) {
      return next({
        log: 'Error occurred in userController.getAllUsers',
        status: 500,
        message: {err: 'An error occurred'},
      });
    }
  };

module.exports = characterController;