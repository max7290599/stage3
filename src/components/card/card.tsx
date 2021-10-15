import React from 'react';
import './card.scss';

interface CardModel {
  name: string;
  url: string;
  like: number;
  watch: number;
}

class Card extends React.Component<CardModel, { active: boolean }> {
  constructor(props: CardModel) {
    super(props);
    this.state = {
      active: false,
    };
  }

  handlerLike = (): void => {
    const { active } = this.state;
    this.setState({ active: !active });
  };

  render() {
    const { active } = this.state;
    const { name, url, like, watch } = this.props;
    return (
      <div className="card">
        <img alt="" className="card-img" src={`../../assets/${url}`} />
        <h2>{name}</h2>
        <div className="active-user">
          <div className="container-like">
            <button
              type="button"
              className={active ? 'like green' : 'like'}
              onClick={this.handlerLike}
            />
            <div>{like}</div>
          </div>
          <div className="watch">{watch}</div>
        </div>
      </div>
    );
  }
}

export default Card;
