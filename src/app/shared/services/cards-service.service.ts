import { Injectable } from '@angular/core';
import { CardModel } from '../models/card_model';

@Injectable({
  providedIn: 'root'
})
export class CardsServiceService {
  cardElements! : CardModel[];
  constructor() { }
  addCard (card: CardModel) {
    this.cardElements.push(card);
  }
}
