import React from 'react';
import { CardModel } from '../../models/card-model';
import './card.scss';

const Card: React.FC<CardModel> = (props) => {
  const { firstName, lastName, country, birthDate, postDate, mail } = props;

  return (
    <div className="card">
      <h2>{`Name: ${firstName}`}</h2>
      <h2>{`Surname: ${lastName}`}</h2>
      <h2>{`country: ${country}`}</h2>
      <h2>{`birth date: ${birthDate}`}</h2>
      <h2>{`post date: ${postDate}`}</h2>
      <h2>{`mail: ${mail}`}</h2>
    </div>
  );
};

export default Card;
