import React from 'react';
import Cataloge from '../Cataloge';
import BodyHeader from '../BodyHeader';
import Counter from '../Counter';

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
    <div>
      <div className="container text-center">
        <BodyHeader title="Actualités" description="Les dernières actualités de l'IHEC Carthage : restez informés !" />
        <Cataloge />
        <Cataloge />
        <Cataloge />
        <BodyHeader
          title="ISIMM en chiffres"
          description="La progression du nombre d’étudiants, du corps enseignant, des partenariats et bien d’autres indicateurs de témoignent l’évolution de l'ISIMM"
        />
        <Cataloge />
      </div>

      <div className="container-fluid facts p-5 my-5" style={{ width: '100%', backgroundColor: '#3559E0' }}>
        <div className="row gx-5 gy-4 py-5">
          <Counter iconClass="fa-star" title="Experience" count={10} />
          <Counter iconClass="fa-users" title="Our Trainers" count={8} />
          <Counter iconClass="fa-check" title="Complete Project" count={3} />
          <Counter iconClass="fa-mug-hot" title="Happy Students" count={300} />
        </div>
      </div>
    </div>
  );
};

export default Home;
