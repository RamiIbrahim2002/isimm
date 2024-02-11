import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import logovg from './assets/logo1922.png'

export default function Footer() {
  const handleLinks = (text) => {
    // Replace 'path goes here' with the actual paths for each link
    const pathMapping = {
      'Histoire de l\'ISIMM': '/histoire-isimm',
      'Mission, Vision, valeurs': '/mission-vision-valeurs',
      'Galerie des photos': '/galerie-photos',
      'Galerie Vidéos': '/galerie-videos',
      'Clubs': '/vieEtudiant/clubs-etudiants',
      'Bibliothèque': '/vieEtudiant/bibliotheque',
      'Culture': '/vieEtudiant/culture',
      'Candidatures mastères': '/candidatures-masteres',
      'Pré-inscriptions en ligne': '/pre-inscriptions-en-ligne',
      'Liste des enseignants': '/liste-enseignants',
      'Département Gestion': '/departement-gestion',
      'Département Finance': '/departement-finance',
      'Dép. Méthodes Quantitatives': '/departement-methodes-quantitatives',
      'Département Comptabilité': '/departement-comptabilite',
      'Département Economie': '/departement-economie',
      'Département Droit': '/departement-droit',
    };

    const path = pathMapping[text] || '/';
    window.location.href = path;
  };
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>LA VIE ÉTUDIANTE CONTINUE SUR LES RÉSEAUX SOCIAUX !:</span>
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            {/* ... */}
            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Institut</h6>
              <p>
                <a href='t' className='text-reset' onClick={() => handleLinks('Histoire de l\'ISIMM')}>
                  Histoire de l'ISIMM
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset' onClick={() => handleLinks('Mission, Vision, valeurs')}>
                  Mission, Vision, valeurs
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset' onClick={() => handleLinks('Galerie des photos')}>
                  Galerie des photos
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset' onClick={() => handleLinks('Galerie Vidéos')}>
                  Galerie Vidéos
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Etudiants</h6>
              <p>
                <a href='#!' className='text-reset' onClick={() => handleLinks('Clubs')}>
                  Clubs
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset' onClick={() => handleLinks('Bibliothèque')}>
                  Bibliothèque
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset' onClick={() => handleLinks('Culture')}>
                  Culture
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset' onClick={() => handleLinks('Candidatures mastères')}>
                  Candidatures mastères
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset' onClick={() => handleLinks('Pré-inscriptions en ligne')}>
                  Pré-inscriptions en ligne
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Enseignants</h6>
              <p>
                <a href='#!' className='text-reset' onClick={() => handleLinks('Liste des enseignants')}>
                  Liste des enseignants
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset' onClick={() => handleLinks('Département Gestion')}>
                  Département Gestion
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset' onClick={() => handleLinks('Département Finance')}>
                  Département Finance
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset' onClick={() => handleLinks('Dép. Méthodes Quantitatives')}>
                  Dép. Méthodes Quantitatives
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset' onClick={() => handleLinks('Département Comptabilité')}>
                  Département Comptabilité
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset' onClick={() => handleLinks('Département Economie')}>
                  Département Economie
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset' onClick={() => handleLinks('Département Droit')}>
                  Département Droit
                </a>
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          Rami & Baha
        </a>
      </div>
    </MDBFooter>
  );
}