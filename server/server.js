const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');

const userController = require('./controllers/userController');
const cookieController = require('./controllers/cookieController');
const sessionController = require('./controllers/sessionController');
const characterController = require('./controllers/characterController');

const url = require('url');
// var fs = require('fs');

const mongoURI = process.env.NODE_ENV === 'test' ? 'mongodb://localhost/soloProjecttest' : 'mongodb://localhost/soloProjectdev';
mongoose.connect(mongoURI);

/**
 * Automatically parse urlencoded body content and form data from incoming requests and place it
 * in req.body
 */
app.use(express.json());
app.use(express.urlencoded());

// Make sure to use the cookie parser so cookie's can be accessed with req.cookies
app.use(cookieParser());

app.use(express.static('../dist'));
// app.use(express.static('../docs'));


app.post('/', (req,res) => {
  res.redirect('/')
})

app.post('/logout', (req,res) => {
  res.redirect('/')
})

app.post('/saveCharacter', characterController.createCharacter, (req, res) => {
  // what should happen here on successful sign up?
  // res.status(200).json({message: 'user sign up successful'});
  return res.status(200);
});

app.post('/login', userController.verifyUser, sessionController.startSession, cookieController.setSSIDCookie, (req,res) => {
  res.redirect('/home')
})

app.post('/home', (req,res) => {
  res.redirect('/home')
})

app.post('/signup', (req,res) => {
  res.redirect('/signup')
})

app.post('/character', (req,res) => {
  res.redirect('/character')
})

app.get('/character', (req, res) => {
  // console.log('Help Character');
  // const characterIdTest = req.query.valid;
  return res.sendFile(path.resolve(__dirname, '../client/index.html'));
});

app.get('/', (req, res) => {
  console.log('Help login');
  // return res.sendFile(path.resolve(__dirname, '../client/login.html'));
  return res.sendFile(path.resolve(__dirname, '../client/index.html'));
  // res.status(404).send('Login Page');
  // res.status(404).send('Not Found');
  // res.redirect('/secret');
});

// app.get('/api', (req, res) => {
//   console.log('Help 2');
//   // return res.sendFile(path.resolve(__dirname, '../client/index.html'));
//   // res.status(404).send('Not Found');
//   res.redirect('/secret');
// });

app.get('/signup', (req,res) => {
  console.log('Help Signup');
  return res.sendFile(path.resolve(__dirname, '../client/index.html'));
})
/**
 * root
 */
// console.log('Afdafeawd22');

// I changed this since I want it to redirect to login then login, and not have to wait for the cookie/session to expire
// app.post('/signupUser', userController.createUser, sessionController.startSession, cookieController.setSSIDCookie, (req, res) => {
app.post('/signupUser', userController.createUser, (req, res) => {
  res.redirect('/')
})

app.get('/what', (req, res) => {
  console.log('Help 2');
  // return res.sendFile(path.resolve(__dirname, '../client/login.html'));
  // return res.sendFile(path.resolve(__dirname, '../client/index.html'));
  // res.status(404).send('Not Found');
  // res.redirect('/secret');
});

app.get('/home', characterController.getAllCharacters, (req, res) => {
  console.log('Help Home');
  return res.sendFile(path.resolve(__dirname, '../client/index.html'));
  // return res.sendFile(path.resolve(__dirname, '../client/index.html'));
  // res.status(404).send('Not Found');
  // res.redirect('/secret');
});

// app.get('/', (req, res) => {
//   console.log('Help character');
//   // return res.send('what');
//   return res.sendFile(path.resolve(__dirname, '../client/index.html'));
// });
// console.log('Afdafeawd33');

// console.log('Hello');
// app.get('/client/styles.css', (req, res) => {
//   console.log('Help 1');
//   res.sendFile(path.resolve(__dirname, '../client/styles.css'));
// });

// console.log('plsss');


// app.get('/usersPage', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '../client/index.html'));
// });

app.post('/deleteAllCharacters', characterController.deleteAllCharacters, (req, res) => {
  return res.redirect('/home');
})

app.post('/getCharacter', characterController.getCharacter, (req, res) => {
  // res.send( { character: res.locals.character });
  // console.log(res.locals.character._id);
  const resChar = res.locals.character._id.toString();
  // console.log('resChar: ', resChar);
  res.redirect(url.format({
    pathname: "/character",
    query: {
      "char": resChar,
    }
    // "test": resChar,
    // query: {
    //   "/":resChar,
    // }
  }))
})

app.post('/getThisCharacter', characterController.getCharacter, (req, res) => {
  // console.log('in /getThisCharacter: ', res.locals.character._id);
  // console.log('in /getThisCharacter');
  return res.send(res.locals.character);
  // const thisResChar = res.locals.character
})

app.post('/updateCharacter', characterController.updateCharacter, (req, res) => {
  console.log('after updateCharacter');
  const resChar = res.locals.characterid.toString();
  res.redirect(url.format({
    pathname: "/character",
    query: {
      "char": resChar,
    }
    // "test": resChar,
    // query: {
    //   "/":resChar,
    // }
  }))
  // return res.status(200);
  // return res.send('after updateCharacter');
})

app.post('/newCharacterTest', characterController.createCharacter, (req, res) => {
  const resChar = res.locals.character._id.toString();
  // console.log('resChar: ', resChar);
  res.redirect(url.format({
    pathname: "/character",
    query: {
      "char": resChar,
    }
    // "test": resChar,
    // query: {
    //   "/":resChar,
    // }
  }))
})

app.get('/usersPage', userController.getAllUsers, (req, res) => {
  res.send( { users: res.locals.users });
})

app.get('/charactersPage', characterController.getAllCharacters, (req, res) => {
  res.send( { characters: res.locals.characters });
})

app.get('/charactersList', characterController.getAllCharacters, (req, res) => {
  // console.log('')
  return res.send(res.locals.characters);
})

/**
 * 404 handler
 */
app.get('*', (req, res) => {
  console.log('404 not found');
  res.status(404).send('Not Found');
});

/**
 * Global error handler
 */
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send({ error: err });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});

module.exports = app;
