import React, { useState } from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
// App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import Recherche1_1 from './component/Pages/Recherche1_1'; // Import other page components as needed
import Recherche1_2 from './component/Pages/Recherche1_2';
import Home from './component/Pages/Home';
import Footer from './Footer';
import './App.css';
import Mission from './component/Pages/Mission';
import Article_version_article from './component/Article_version_article';
import Article_version_club from './component/Article_version_club';

  // Placeholder data for news items
  const catalogData = [
    {
      id: 1,
      title: 'Catalog Item 1',
      description: 'This is the description for Catalog Item 1.',
      imageUrl: 'https://picsum.photos/300/200', // Replace with the actual image URL
    },
    {
      id: 2,
      title: 'Catalog Item 2',
      description: 'This is the description for Catalog Item 2.',
      imageUrl: 'https://picsum.photos/300/200', // Replace with the actual image URL
    },
    {
      id: 3,
      title: 'Catalog Item 3',
      description: 'This is the description for Catalog Item 3.',
      imageUrl: 'https://picsum.photos/300/200', // Replace with the actual image URL
    },
    // Add more catalog items as needed
  ];

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
        <Route
          path="/"
          element={<Home catalogData={catalogData} />}
          />
        <Route
          path="/acceuil"
          element={<Home catalogData={catalogData} />}
          />
          <Route path="/recherche/recherche1.1" element={<Recherche1_1 />} />
          <Route path="/recherche/detail2" element={<Recherche1_2 />} />
          
          {/* Add more routes for other components/pages */}
          {/* Create Page.js under pages and then add it as element linked to the right path */}
          <Route path="/isimm/mission" element={<Mission />} />
          <Route path="/article/:itemId" element={<Article_version_article catalogData={catalogData} />} />
          <Route path="/vieEtudiant/clubs-etudiants" element={<Article_version_club 
              title="IEEE Association"
              description="In 2019, ISIMM IEEE Student Branch was born, uniting diverse student talents. We thrive on collaboration, innovation, and academic excellence to foster growth in tech skills and connections. Together, we’re a close-knit family committed to your success."
              imageUrl="https://picsum.photos/300/200"
              socialLinks={[{ name: 'Facebook',  text: 'Follow on Facebook',url: 'https://www.facebook.com/', icon: 'https://picsum.photos/20/20' },
              { name: 'Instagram', text: 'Follow on Instagram' ,url: 'https://instagram.com/', icon: 'https://picsum.photos/20/20' },]}/>} />
          <Route path="/event/:itemId" element={<Article_version_club 
          title="IEEE Association"
          description="In 2019, ISIMM IEEE Student Branch was born, uniting diverse student talents. We thrive on collaboration, innovation, and academic excellence to foster growth in tech skills and connections. Together, we’re a close-knit family committed to your success."
          imageUrl="https://picsum.photos/300/200"
          socialLinks={[{ name: 'Facebook',  text: 'Follow on Facebook',url: 'https://www.facebook.com/', icon: 'https://picsum.photos/20/20' },
          { name: 'Instagram', text: 'Follow on Instagram' ,url: 'https://instagram.com/', icon: 'https://picsum.photos/20/20' },]}
          />} />

        </Routes>
        </div>
      </div>
      <Footer> </Footer>
    </Router>

  </>
    
    

  )
}

export default App;