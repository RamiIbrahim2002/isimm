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
              <p className="cataloge_desc">{item.name}</p>
      
            </div>
          ))}
      </div>
    </div>
  );
};


export default Cataloge;
