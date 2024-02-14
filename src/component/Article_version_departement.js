// Article_version_club.js
import React from 'react';
import { useParams } from 'react-router-dom';

const Article_version_departement = ({ directeur, description, tel, mail, imageUrl }) => {
    const { departmentName } = useParams();

  return (
    <div className="article-version-club">
      <div className="circle-image">
        <img src={imageUrl} alt={directeur} />
      </div>
      <p>Department Name: {departmentName}</p>
      <h3 className="directeurName">{directeur}</h3>
      <p className="description">{description}</p>
      <p className="tel">{tel}</p>
      <p className="mail">{mail}</p>
    </div>
  );
};

export default Article_version_departement;
