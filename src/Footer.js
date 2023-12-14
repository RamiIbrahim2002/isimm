import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import logovg from './assets/logo1922.png'

export default function Footer() {
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
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                
                <MDBIcon className="me-3" />
                
                ISIM Monastir
              </h6>
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
  <h6 className='text-uppercase fw-bold mb-4'>Institut</h6>

  {/* Additional Content */}

  <p>
    <a href='#!' className='text-reset'>
      Histoire de l'ISIMM
    </a>
  </p>
  <p>
    <a href='#!' className='text-reset'>
      Mission, Vision, valeurs
    </a>
  </p>
  <p>
    <a href='#!' className='text-reset'>
      Galerie des photos
    </a>
  </p>
  <p>
    <a href='#!' className='text-reset'>
      Galerie Vidéos
    </a>
  </p>
</MDBCol>


            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Etudiants</h6>
  <p>
    <a href='#!' className='text-reset'>
      Clubs
    </a>
  </p>
  <p>
    <a href='#!' className='text-reset'>
      Bibliothèque
    </a>
  </p>
  <p>
    <a href='#!' className='text-reset'>
      Culture
    </a>
  </p>
  <p>
    <a href='#!' className='text-reset'>
      Candidatures mastères
    </a>
  </p>
  <p>
    <a href='#!' className='text-reset'>
      Pré-inscriptions en ligne
    </a>
  </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
           <h6 className='text-uppercase fw-bold mb-4'>Etudiants</h6>
            <p>
  </p>
  <p>
    <a href='#!' className='text-reset'>
      Liste des enseignants
    </a>
  </p>
  <p>
    <a href='#!' className='text-reset'>
      Département Gestion
    </a>
  </p>
  <p>
    <a href='#!' className='text-reset'>
      Département Finance
    </a>
  </p>
  <p>
    <a href='#!' className='text-reset'>
      Dép. Méthodes Quantitatives
    </a>
  </p>
  <p>
    <a href='#!' className='text-reset'>
      Département Comptabilité
    </a>
  </p>
  <p>
    <a href='#!' className='text-reset'>
      Département Economie
    </a>
  </p>
  <p>
    <a href='#!' className='text-reset'>
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