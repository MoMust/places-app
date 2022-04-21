import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Front from './components/front';
import About from './components/about';
import Browser from './components/browser';
// Creates paths for singel page from components
function App() {
  return (
    <>
        <Routes>
            <Route exact path="/" element={<Front />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/browser" element={<Browser />}/>
        </Routes>
    </>
   
  );
}

export default App;