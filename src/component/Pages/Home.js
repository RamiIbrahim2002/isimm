import React from 'react';
import styles from '../../App.css'
import Cataloge from './Cataloge';
import BodyHeader from './BodyHeader';
const Home = () => {
  // Placeholder data for news items
  const newsData = [
    {
      id: 1,
      title: 'Breaking News: Placeholder Title 1',
      content: 'This is the content for the first news item. It could be a brief summary or description.',
    },
    {
      id: 2,
      title: 'Exciting Update: Placeholder Title 2',
      content: 'Check out the latest updates with this exciting news. More details inside!',
    },
    {
      id: 3,
      title: 'Event Announcement: Placeholder Title 3',
      content: 'An upcoming event is announced! Save the date and stay tuned for more information.',
    },
    // Add more news items as needed
  ];

  return (
    <div class="container text-center">
      <div>
      
      <BodyHeader title="Actualités" description="Les dernières actualités de l'IHEC Carthage : restez informés !"/>
  <Cataloge />
  <Cataloge />
  <Cataloge />
  <BodyHeader title="ISIMM en chiffres
" description="
La progression du nombre d’étudiants, du corps enseignant, des partenariats et bien d’autres indicateurs de témoignent l’évolution de l'ISIMM"/>
</div>
</div>

  );
};

export default Home;
