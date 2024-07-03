const Session = require('../models/sessionModel');

const sessionController = {};

sessionController.startSession = async (req, res, next) => {
  try {
    await Session.create({ cookieId: res.locals.user });
    return next();
  } catch (err) {
    return next({
      log: 'Error occured in sessionController.startSession.',
      status: 500,
      message: { err: 'An error occured' },
    });
  }
};

sessionController.endSession = async (req, res, next) => {
    try {
        console.log('not yet');
      await Session.endSession();
      console.log('broken');
      return next();
    } catch (err) {
      return next({
        log: 'Error occured in sessionController.startSession.',
        status: 500,
        message: { err: 'An error occured'},
      });
    }
  };

module.exports = sessionController;
