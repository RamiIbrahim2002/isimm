import React from 'react';

const Cataloge = () => {
  // Placeholder data for catalog items
  const catalogData = [
    {
      id: 1,
      title: 'Catalog Item 1',
      description: 'This is the description for Catalog Item 1.',
      imageUrl: 'https://picsum.photos/300/200', // Replace with the actual image URL
    },
    {
      id: 2,
      title: 'Catalog Item 2',
      description: 'This is the description for Catalog Item 2.',
      imageUrl: 'https://picsum.photos/300/200', // Replace with the actual image URL
    },
    {
      id: 3,
      title: 'Catalog Item 3',
      description: 'This is the description for Catalog Item 3.',
      imageUrl: 'https://picsum.photos/300/200', // Replace with the actual image URL
    },
    // Add more catalog items as needed
  ];

  return (
    <div>
      <div className="row catalogeContainer">
        {catalogData.map((item) => (
          <div key={item.id} className="col catalogeItem">
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
