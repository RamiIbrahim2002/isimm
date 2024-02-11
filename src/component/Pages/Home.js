import React from 'react';
import Cataloge from '../Cataloge';
import BodyHeader from '../BodyHeader';
import Counter from '../Counter';
import { useNavigate, Route, Routes } from 'react-router-dom';
import Article from '../Article_version_article';

const Home = ({ catalogData }) => {
  const navigate = useNavigate();

  const handleCatalogeClickActualite = (itemId) => {
    // Navigate to the article page using the selected item's ID
    navigate(`/article/${itemId.id}`);
  };
  const handleCatalogeClickEvent = (itemId) => {
    // Navigate to the article page using the selected item's ID
    navigate(`/event/${itemId.id}`);
  };
  return (
    <div>
      <div className="container">
        <BodyHeader title="Actualités" description="Les dernières actualités de l'IHEC Carthage : restez informés!" />
        <Cataloge catalogData={catalogData} onClick={handleCatalogeClickActualite} />
        <BodyHeader
          title="ISIMM en chiffres"
          description="La progression du nombre d’étudiants, du corps enseignant, des partenariats et bien d’autres indicateurs de témoignent l’évolution de l'ISIMM"
        />

      <div className="container-fluid facts p-5 my-5" style={{ width: '100%', backgroundColor: '#3559E0' }}>
        <div className="row gx-5 gy-4 py-5">
          <Counter iconClass="fa-star" title="Experience" count={10} />
          <Counter iconClass="fa-users" title="Our Trainers" count={8} />
          <Counter iconClass="fa-check" title="Complete Project" count={3} />
          <Counter iconClass="fa-mug-hot" title="Happy Students" count={300} />
        </div>
      </div>
      <Cataloge catalogData={catalogData} onClick={handleCatalogeClickEvent} />
      </div>
    </div>
  );
};

export default Home;
