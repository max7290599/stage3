import { CardModel } from './card-model';

export interface InputModel {
  name: string;
  type: string;
  updateData(value: string | boolean, name: string): void;
}

export interface StateModel {
  setCards(card: CardModel | {}): void;
}
