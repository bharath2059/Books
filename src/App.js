
import logo from './logo.svg';
import './App.css';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';

function App() {
  return (
    <>

<Login/>

    </>
    
  );
}

import React from 'react';
import './App.css'
import { Route,Routes, Switch } from 'react-router-dom';
import RegLog from './components/LogReg/RegLog';
import Home from './components/Home/Home';

const App = () => {
  return (
    <div>
        <Routes>
          <Route exact  path='/' element={<RegLog/>}/>
          <Route exact path='/Home' element={<Home/>} />
        </Routes>
    </div>
  );
};


export default App;
