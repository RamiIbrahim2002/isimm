// version article .js
import React from 'react';
import { useParams } from 'react-router-dom';

const Article_version_article = ({ catalogData }) => {
  const { itemId } = useParams();

  // Find the selected catalog item based on the route parameter
  const selectedItem = catalogData.find((item) => item.id === Number(itemId));

  if (!selectedItem) {
    // Handle case where the item is not found
    return <div>Item not found</div>;
  }

  return (
    <div>
      <h2>{selectedItem.title}</h2>
      <img src={selectedItem.imageUrl} alt={selectedItem.title} />
      <p>{selectedItem.description}</p>
      {/* Add additional content or styling as needed */}
    </div>
  );
};

export default Article_version_article;
