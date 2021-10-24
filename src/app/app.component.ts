import { EventEmitter } from '@angular/core';
import { Component, Input, Output } from '@angular/core';
import { CardModel } from './shared/models/card_model';
import { CardsServiceService } from './shared/services/cards-service.service';
import { HttpCardService } from './shared/services/http-card.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  constructor (private cardsservice: CardsServiceService, private httpCardService: HttpCardService){}
  title = 'project12new';
  cards: CardModel[] = [];
  ngOnInit(): void {
    this.getData();
  }
  async getData() {
    try {
      this.cardsservice.cardElements = await this.httpCardService.getCards();
    } catch (error) {
      console.log(error);
    } finally {
      this.cards = this.cardsservice.cardElements;
    }
  }
  async onCardAdded(cardData: {title: string, content: string, createdate: Date}) {
    let temp : CardModel = new CardModel;
    temp.title = cardData.title;
    temp.content = cardData.content;
    temp.id = this.cardsservice.cardElements.length + 1;
    temp.createdate = cardData.createdate;
    try {
      await this.httpCardService.postCard(temp);
    } catch (error) {
      console.log(error);
    } finally {
      this.getData();
    }
  }
  async onCardDeleted(card_index : { id: number })
  {
    
    try {
      await this.httpCardService.deleteCard(card_index.id);
    } catch (error) {
      console.log(error);
    } finally {
      this.getData();
    }
  }
  async onCardEdited(info : {id: number, content: string, editdate: Date})
  {
//  this.cardsservice.cardElements[info.id - 1].content = info.content;
//  this.cardsservice.cardElements[info.id - 1].createdate = info.editdate;
    let temp = new CardModel;
    temp.id = info.id;
    temp.content = info.content;
    temp.createdate = info.editdate;
    try {
      await this.httpCardService.updateCard(temp);
    } catch (error) {
      console.log(error);
    } finally {
      this.getData();
    }
  }
}
