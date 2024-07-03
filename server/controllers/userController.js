const User = require('../models/userModel');

const userController = {};

const bcrypt = require('bcryptjs');


/**
* getAllUsers - retrieve all users from the database and stores it into res.locals
* before moving on to next middleware.
*/
userController.getAllUsers = async (req, res, next) => {
    try {
        console.log('in userController.getAllUsers')
      const users = await User.find({});
      res.locals.users = users;
      return next();
    } catch (err) {
      return next({
        log: 'Error occurred in userController.getAllUsers',
        status: 500,
        message: {err: 'An error occurred'},
      });
    }
  };

/**
 * createUser - create and save a new User into the database.
 */
userController.createUser = async (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return next({
      log: 'Missing username or password in userController.createUser',
      status: 400,
      message: { err: 'An Error occurred' },
    });
  }
  try {
    const user = await User.create({ username, password });
    res.locals.user = user._id;
    return next();
  } catch (err) {
    return next({
      log: 'Error occurred in userController.createUser.',
      status: 500,
      message: { err: `An error occured ${err}` },
    });
  }
};

userController.verifyUser = async (req, res, next) => {
    // write code here
    const {username, password} = req.body;
    // Best practice is to verify the cookie when you verify the user
    // findOne and bcrypt
    if(!username || !password){
      // return next (
      //   'error in userCreator userController: password and username needed'
      // )
      return next ({
        log: 'Missing username or password in userController.verifyUser',
        status: 400,
        message: { err: 'An error occurred' },
      });
    }
  
    try {
      const user = await User.findOne({username});
      if (!user) {
        return res.redirect('/signup');
      } else {
        const result = await bcrypt.compare(password, user.password);
        // if (user.password !== password) {
        if (!result) {
          return res.redirect('/signup');
        } else {
          res.locals.user = user._id;
          return next(); 
        }
      }
    } catch (err) {
      return next('Error in userController.verifyUser: ' + JSON.stringify(err));
    }
  };

module.exports = userController;
