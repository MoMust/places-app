import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Front from './components/front';
import Browser from './components/browser';
import SpotsPage from '../src/components/spotsPage'

// import Nav from '../src/sticky/nav2';
// Creates paths for singel page from components
function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Front />} />
        <Route path="/browser" element={<Browser />} />
        <Route path="/SpotsPage" element={<SpotsPage />} />
      </Routes>
    </>
  );
}

export default App;