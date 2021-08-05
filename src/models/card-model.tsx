export interface CardModel {
  firstName: string;
  lastName: string;
  country: string;
  birthDate: string;
  postDate: string;
  mail: boolean;
  agree: boolean;
}

export interface CardsModel {
  cards: CardModel;
}
