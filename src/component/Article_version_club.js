// version club .js
import React from 'react';
import { useParams } from 'react-router-dom';

const Article_version_club = ({ title, description, imageUrl,socialLinks }) => {
    return (
      <div className="article-version-club">
        <div className="circle-image">
          <img src={imageUrl} alt={title} />
        </div>
        <h3 className="title_club">{title}</h3>
        <p className="description">{description}</p>

      {/* Social Links */}
      <div className="social-links">
        {socialLinks && socialLinks.map((link, index) => (
          <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
            <div className="social-link-item">
              <img src={link.icon} alt={link.name} />
              <span>{link.text}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

  
  export default Article_version_club;
