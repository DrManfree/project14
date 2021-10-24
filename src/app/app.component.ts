import { Component, Input } from '@angular/core';
import { CardModel } from './shared/models/card_model';
import { CardsServiceService } from './shared/services/cards-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  constructor (private cardsservice: CardsServiceService){}
  title = 'project12new';
  cards!: CardModel[];
  ngOnInit(): void {
    this.cards = this.cardsservice.cardElements;
    
  }
  onCardAdded(cardData: {title: string, content: string, createdate: Date}) {
    let temp : CardModel = new CardModel;
    temp.title = cardData.title;
    temp.content = cardData.content;
    temp.id = this.cardsservice.cardElements.length + 1;
    temp.createdate = cardData.createdate;
    this.cardsservice.addCard(temp);
  }
  onCardDeleted(card_index : { id: number })
  {
    this.cardsservice.cardElements.splice(card_index.id - 1, 1);
    let num = 1;
    this.cardsservice.cardElements.forEach(element => {
      element.id = num;
      num++;
    });
  }
  onCardEdited(info : {id: number, content: string, editdate: Date})
  {
    this.cardsservice.cardElements[info.id - 1].content = info.content;
    this.cardsservice.cardElements[info.id - 1].createdate = info.editdate;
  }
}
