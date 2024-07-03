const cookieController = {};

/**
* setCookie - set a cookie with a random number
*/
cookieController.setCookie = (req, res, next) => {
  // write code here
  res.cookie('CharacterCreator', 'hi', {httpOnly: true});
  const randomNumber = Math.floor(Math.random() * 100);
  res.cookie('secret', randomNumber.toString(), { httpOnly: true });
  return next();
}

/**
* setSSIDCookie - store the user id in a cookie
*/
cookieController.setSSIDCookie = (req, res, next) => {
  res.cookie('ssid', res.locals.user, {httpOnly: true});
  return next();
}

module.exports = cookieController;