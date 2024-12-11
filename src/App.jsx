import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import "./App.css"
import Navbar from './components/Navbar.jsx';
import Header from './components/Header.jsx';
import About from './components/About.jsx';

const App = () => {
  return (
    <>
    <Navbar/>
    {/* <Header/>
    <About/> */}
    </>
  )
}

export default App