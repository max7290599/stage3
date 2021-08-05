import React, { useState } from 'react';
import Card from './components/card/card';
import Form from './components/form/form';
import { CardModel } from './models/card-model';

import './styles.scss';

const App: React.FC = () => {
  const [cards, setCards] = useState<CardModel[] | []>([]);

  return (
    <>
      <Form setCards={setCards} />
      <main>
        {cards.map((card, index) => {
          return (
            <Card
              key={index.toString()}
              firstName={card.firstName}
              lastName={card.lastName}
              country={card.country}
              birthDate={card.birthDate}
              postDate={card.postDate}
              mail={card.mail}
              agree={card.agree}
            />
          );
        })}
      </main>
    </>
  );
};

export default App;
