import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from '../pages/login';
import CharacterSheet from '../pages/characterSheet';
import Home from '../pages/home';
import Signup from '../pages/signup';

const Main = () => {
  return (
    <Routes> {/* The Route decides which component to show based on the current URL.*/}
      <Route path='/character' element={<CharacterSheet/>}/>
      <Route exact path='/' element={<Login/>}/>
      <Route exact path='/home' element={<Home/>}/>
      <Route exact path='/signup' element={<Signup/>}/>
    </Routes>
  );
}

export default Main;