import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { createContext, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Login from './components/login';
import Signup from './components/signup';
import Example from './components/Example';
import Navbar from './components/Navbar';
import ContactUs from './components/ContactUs';
import About from './components/About';
import Register from './components/Register';
import Protected from './components/Protected';
import socketIO from "socket.io-client";
import ContextAPiex from './components/ContextAPiex';
import Ex from './Example/Ex';
import Moviehome from './movie/Moviehome';
import MovieDetails from './movie/MovieDetails';
import MovieNavbar from './movie/MovieNavbar';
import Example4 from './Example/Example4';

// const ENDPOINT = "http://localhost:8080/";
// const socket=socketIO(ENDPOINT,{transports:['websocket']})

export const Globleinfo = createContext();

function App() {
  // socket.on("connection",()=>{
  // })
  const [color, setColor] = useState('red');
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Navbar /> */}
        {/* <MovieNavbar /> */}
        <Routes>
          <Route path="/" element={<Example />}> </Route>
          <Route path="/home" element={<Protected Cmp={Home} />}> </Route>
          <Route path="/login" element={<Login />}> </Route>
          <Route path="/register" element={<Register />}> </Route>
          <Route path="/signup" element={<Signup />}> </Route>
          <Route path="/about" element={<Protected Cmp={About} />}> </Route>
          <Route path="/contactus" element={<Protected Cmp={ContactUs} />}> </Route>
          <Route path='/moviehome' element={<Moviehome/>}></Route>
          <Route path='/example4' element={<Example4/>}></Route>
          <Route path='/moviedetails/:movieId' element={<MovieDetails/>}></Route>
        </Routes>
      </BrowserRouter>
      {/* <Globleinfo.Provider value={{ appcolor: color }}>
        <div>
          <h1>context api components</h1>
          <ContextAPiex />
        </div>
      </Globleinfo.Provider>
      <Ex /> */}
    </div>
  );
}

export default App;
