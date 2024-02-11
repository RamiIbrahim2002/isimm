import React, { useState,useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';


import '../App.css';
import videovg from '../assets/video_accueil.mp4';
import logovg from '../assets/logo1922.png';

const DesktopNavbar = () => {
  const [isActive, setIsActive] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedSubItem, setSelectedSubItem] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Find the corresponding item in col1Links based on the current location
    const selectedItemFromPath = Object.keys(col1Links).find(
      (item) => col1Links[item] === location.pathname
    );
  
    // Set the initial state based on the current URL
    setSelectedItem(selectedItemFromPath || null);
  }, [location.pathname]); // Re-run the effect when the pathname changes
  
  
  const handleToggle = () => {
    setIsActive((prev) => (prev === null ? true : !prev));
    setSelectedItem(null);
    setSelectedSubItem(null);
    document.body.classList.toggle('navbar-open', isActive === null ? true : !isActive);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setSelectedSubItem(null); // Reset the selected sub-item when clicking on an item in the first column
  };



  const handleLinkClick = (e, item, link) => {
    e.preventDefault();
    console.log('Clicked item:', item);
    console.log('Clicked link:', link);

    const isItemInFirstColumn = Object.keys(col1Links).includes(item);
    const isItemInSecondColumn = Object.keys(col2Links).includes(item);

    if (isItemInFirstColumn || isItemInSecondColumn) {
      handleItemClick(item);
    }

    // Additional logic for updating selectedItem when clicking on links in the second div
    if (isItemInSecondColumn && link && link.url) {
      const selectedLink = col2Links[item].find((col2Link) => col2Link.url === link.url);
      if (selectedLink) {
        setSelectedSubItem(selectedLink.label);

        // Check if the selected link in the second column is also in the third column
        const isLinkInThirdColumn = col3Links[selectedLink.label] !== undefined;

        if (isLinkInThirdColumn) {
          // Handle logic for links in the third column
          console.log('Link in the third column!');
        } else {
          
          // If not in the third column, navigate to the link using react-router-dom
          window.location.href = link.url;
          navigate(link.url)
          console.log("hani hné")
        }
      }
    }

    // If not in the second column, navigate to the link using react-router-dom
    if (!isItemInSecondColumn) {
      window.location.href = link;

    }
  };

   


  const col1Links = {
    Acceuil: '/acceuil',
    ISIMM: '/isimm',
    Recherche: '/recherche',
    VieEtudiant : '/vieEtudiant',
    Internatioanal :'/internationnal',
    Actualités :'/actualités'
  };

  const col2Links = {
    ISIMM: [
      { label: 'Mission,Vision et Valeurs', url: '/isimm/mission' },
      { label: 'AssuranceQualité', url: '/isimm/assurance-qualite' },
      { label: 'Gouvernance', url: '/isimm/gouvernance' },
      { label: 'Départements', url: '/isimm/departements' },
      { label: 'Campus', url: '/isimm/campus' },
      { label: 'ISIMM Responsable', url: '/isimm/isimm-responsable' },
      { label: 'Contact', url: '/isimm/contact' },
    ],
    Recherche: [
      { label: 'Recherche1', url: '/recherche/recherche1.1' },
      { label: 'Recherche2', url: '/recherche/detail2' },
      { label: 'Recherche3', url: '/recherche/detail3' },
    ],
    VieEtudiant: [
      { label: 'Bibliothèque', url: '/vieEtudiant/bibliotheque' },
      { label: 'Clubs étudiants', url: '/vieEtudiant/clubs-etudiants' },
      { label: 'Sport', url: '/vieEtudiant/sport' },
      { label: 'Culture', url: '/vieEtudiant/culture' },
      { label: 'Evènements et news', url: '/vieEtudiant/evenements-news' },
    ],

  };

  const col3Links = {
    AssuranceQualité :[
      {label :'Projets',url:'/proj'},
      {label :'Politique',url:'projequa'}
    ],

    Gouvernance: [
      { label: 'Direction Générale', url: '/gouvernance/direction-generale' },
      { label: 'Direction des études', url: '/gouvernance/direction-etudes' },
      { label: 'Direction des Stages ', url: '/gouvernance/direction-stages' },
      { label: 'Secrétariat Général', url: '/gouvernance/secretariat-general' },
      { label: 'Organigramme', url: '/gouvernance/organigramme' },
    ],
    Départements: [
      { label: 'Département Gestion', url: '/departements/gestion' },
      { label: 'Département Finance', url: '/departements/finance' },
      { label: 'Départ Méthodes Quantitatives', url: '/departements/methodes-quantitatives' },
      { label: 'Département Comptabilité', url: '/departements/comptabilite' },
      { label: 'Département Economie', url: '/departements/economie' },
      { label: 'Département Droit', url: '/departements/droit' },
    ],

  };

  return (
    
    <div className={`custom_container`}>
      <video autoPlay loop muted className="video-bg">
        <source src={videovg} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="video-overlay-text">
        <div className='row '>ISIM Monastir</div>
        <div className='row video-overlay-text-sub'>EXCELENCE IS A MINDSET</div>
      </div>
      <div className={`menu_icon_box ${isActive ? 'active' : ''}`} onClick={handleToggle}>
        <div className={`line1 ${isActive ? 'line1-active' : ''}`}></div>
        <div className={`line2 ${isActive ? 'line2-active' : ''}`}></div>
        <div className={`line3 ${isActive ? 'line3-active' : ''}`}></div>
      </div>

      
      

      {isActive !== null && (
        
        <div className={`box ${isActive ? 'open_box' : 'close_box'}`}>
            <div className='logo'>
                    <img src={logovg} ></img>
            </div>
          <nav>
            <div className="row">
             {/* Render the first column */}
{/* Render the first column for small screens or all links in the same column for larger screens */}
<div className="col-4" id='link1'>
  {Object.entries(col1Links).map(([item, url], index) => (
    <ul key={index}>
      <li className='col1Links'>
        <a
          className={`nav-item ${selectedItem === item ? 'selected' : ''}`}
          href={url}
          onClick={(e) => handleLinkClick(e, item, url) }
        >
          {item}
        </a>
      </li>
    </ul>
  ))}

  {/* Render col2Links when selectedItem is set and screen is smaller */}
  {selectedItem && window.innerWidth <= 968 && col2Links[selectedItem] && (
    <ul>
      {col2Links[selectedItem].map((link, index) => (
        <li key={index} className='col2Links'>
          <a
            className={`nav-item ${selectedSubItem === link.label ? 'selected' : ''}`}
            href={link.url}
            onClick={(e) => handleLinkClick(e, selectedItem, link)}
          >
            {link.label}
            {col3Links[link.label] && col3Links[link.label].length > 0 && (
              <span className="sub-item-indicator">▶</span>
            )}
          </a>
        </li>
      ))}
    </ul>
  )}
</div>

{/* Render the second column for larger screens */}
{selectedItem && col2Links[selectedItem] && window.innerWidth > 968 && (
  <div className="col-4">
    {col2Links[selectedItem].map((link, index) => (
      <ul key={index}>
        <li className='col2Links'>
          <a
            className={`nav-item ${selectedSubItem === link.label ? 'selected' : ''}`}
            href={link.url}
            onClick={(e) => handleLinkClick(e, selectedItem, link)}
          >
            {link.label}
            {col3Links[link.label] && col3Links[link.label].length > 0 && (
              <span className="sub-item-indicator">▶</span>
            )}
          </a>
        </li>
      </ul>
    ))}
  </div>
)}

{/* Render the third column for larger screens */}
{selectedSubItem && col3Links[selectedSubItem] && window.innerWidth > 968 && (
  <div className="col-4">
    {col3Links[selectedSubItem].map((link, index) => (
      <ul key={index}>
        <li className='col3Links'>
          <a
            className="nav-item"
            href={link.url}
          >
            {link.label}
          </a>
        </li>
      </ul>
    ))}
  </div>
)}


            </div>
          </nav>
        </div>
      )}
      
    </div>
  );
};

export default DesktopNavbar;
