import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import '../App.css';
import videovg from '../assets/video_accueil.mp4';
import logovg from '../assets/logo1922.png';

const MobileNavbar = () => {
  const [isActive, setIsActive] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedSubItem, setSelectedSubItem] = useState(null);
  const [activeColumn, setActiveColumn] = useState(1); // Track the active column
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
    setActiveColumn(1); // Reset to the first column when toggling
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setSelectedSubItem(null);
    setActiveColumn(2); // Move to the second column when clicking on an item in the first column
  };

  const handleLinkClick = (e, item, link) => {
    e.preventDefault();

    const isItemInFirstColumn = Object.keys(col1Links).includes(item);
    const isItemInSecondColumn = Object.keys(col2Links).includes(item);

    if (isItemInFirstColumn || isItemInSecondColumn) {
      handleItemClick(item);
    }

    if (isItemInSecondColumn && link && link.url) {
      const selectedLink = col2Links[item].find((col2Link) => col2Link.url === link.url);
      if (selectedLink) {
        setSelectedSubItem(selectedLink.label);
        setActiveColumn(3); // Move to the third column when clicking on a link in the second column

        // Additional logic for links in the third column
        const isLinkInThirdColumn = col3Links[selectedLink.label] !== undefined;
        if (isLinkInThirdColumn) {
          console.log('Link in the third column!');
        } else {
          window.innerWidth <= 968
            ? (document.querySelector('.col-4').style.order = 2)
            : (document.querySelector('.col-4').style.order = 0);

          navigate(link.url);
        }
      }
    }

    if (!isItemInSecondColumn) {
      window.innerWidth <= 968
        ? (document.querySelector('.col-4').style.order = 2)
        : (document.querySelector('.col-4').style.order = 0);

      navigate(link);
    }
  };

  const handleGoBack = () => {
    setActiveColumn((prevColumn) => Math.max(prevColumn - 1, 1)); // Go back to the previous column
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
      { label: 'Département Informatique', url: '/departements/informatique' },
      { label: 'Département Mathématiques', url: '/departements/mathematiques' },
      { label: 'Département Technologie', url: '/departements/technologie' },
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
        <div className='row video-overlay-text-sub'>EXCELLENCE IS A MINDSET</div>
      </div>
      <div className={`menu_icon_box ${isActive ? 'active' : ''}`} onClick={handleToggle}>
        <div className={`line1 ${isActive ? 'line1-active' : ''}`}></div>
        <div className={`line2 ${isActive ? 'line2-active' : ''}`}></div>
        <div className={`line3 ${isActive ? 'line3-active' : ''}`}></div>
      </div>
  
      {isActive !== null && (
        <div className={`box ${isActive ? 'open_box' : 'close_box'}`}>
          <div className='logo'>
            <img src={logovg} alt="Logo" />
          </div>
          <nav>
            <div className="row">
              {activeColumn === 1 && (
                <div className="col-4" id="link1">
                  {Object.entries(col1Links).map(([item, url], index) => (
                    <ul key={index}>
                      <li className="col1Links">
                        <a
                          className={`nav-item ${selectedItem === item ? 'selected' : ''}`}
                          href={url}
                          onClick={(e) => handleLinkClick(e, item, url)}
                        >
                          {item}
                        </a>
                      </li>
                    </ul>
                  ))}
                </div>
              )}
  
              {activeColumn === 2 && selectedItem && col2Links[selectedItem] && (
                <div className="col-4">
                  {col2Links[selectedItem].map((link, index) => (
                    <ul key={index}>
                      <li className="col2Links">
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
  
              {activeColumn === 3 && selectedSubItem && col3Links[selectedSubItem] && (
                <div className="col-4">
                  {col3Links[selectedSubItem].map((link, index) => (
                    <ul key={index}>
                      <li className="col3Links">
                        <a className="nav-item" href={link.url}>
                          {link.label}
                        </a>
                      </li>
                    </ul>
                  ))}
                </div>
              )}
            </div>
          </nav>
  
          {/* Go back button */}
          {activeColumn > 1 && (
            <button className="go-back-button" onClick={handleGoBack}>
              Go Back
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default MobileNavbar;
