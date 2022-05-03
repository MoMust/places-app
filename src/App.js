import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Front from './components/front';
import About from './components/about';
import Browser from './components/browser';
import Places from '../src/components/places'

// import Nav from '../src/sticky/nav2';
// Creates paths for singel page from components
function App() {
  return (
    <>
        <Routes>
            <Route exact path="/" element={<Front />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/browser" element={<Browser />}/>
            <Route path="/places" element={<Places />}/>
        </Routes>
    </>
   
  );
}

export default App;