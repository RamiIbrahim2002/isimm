import React, { useState } from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
// App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Recherche1_1 from './component/Pages/Recherche1_1'; // Import other page components as needed
import Recherche1_2 from './component/Pages/Recherche1_2';
import Home from './component/Pages/Home';
import Footer from './Footer';
import './App.css';

function App(){
  return(
    <>

<Router>
      <div>
        <div>
        <Navbar />
        </div>
        <div>
        <Routes>
        <Route path="/acceuil" element={<Home />} />
          <Route path="/recherche/recherche1.1" element={<Recherche1_1 />} />
          {/* Add more routes for other components/pages */}
        </Routes>
        </div>
      </div>
      <Footer> </Footer>
    </Router>

  </>
    
    

  )
}

export default App;