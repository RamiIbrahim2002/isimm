// Cataloge.js
import React from 'react';

const Cataloge = ({ catalogData, onClick }) => {

  return (
    <div>
      <div className="row catalogeContainer">
        {Array.isArray(catalogData) &&
          catalogData.map((item) => (
            <div key={item.id} className="col-12 col-md catalogeItem" onClick={() => onClick(item)}>
              {/* Pass the entire item to the onClick handler */}
              <img src={item.imageUrl} alt={`Catalog Item ${item.id}`} className="catalogeImage" />
              <h3 className="titleCataloge">{item.title}</h3>
              <p className="cataloge_desc">{item.description}</p>
            </div>
          ))}
      </div>
    </div>
  );
};


export default Cataloge;
