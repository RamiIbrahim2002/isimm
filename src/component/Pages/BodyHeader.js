import React from 'react';

const BodyHeader = ({ title, description }) => {
  return (
    <div className="container text-center">
      <div className="row g-2">
        <div className="col-6 col1Links">
          <div className="p-3 title_pages">{title}</div>
        </div>
        <div className="col-6 title_description">
          <div className="p-3 title_desc">{description}</div>
        </div>
      </div>
    </div>
  );
};

export default BodyHeader;
