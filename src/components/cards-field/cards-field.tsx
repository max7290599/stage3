import { PureComponent } from 'react';
import Card from '../card/card';
import cards from '../../cards';
import './cards-field.scss';

class CardsField extends PureComponent {
  render() {
    return (
      <div className="cards-field">
        {cards.map((card, i) => (
          <Card
            key={i.toString()}
            name={card.name}
            url={card.url}
            like={card.like}
            watch={card.watch}
          />
        ))}
      </div>
    );
  }
}

export default CardsField;
