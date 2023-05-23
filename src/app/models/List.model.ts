import { Card } from './Card.model';

export interface List {
  id: string;
  title: string;
  position: number;
  cards: Card[];
}
