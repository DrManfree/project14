import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CardModel } from '../models/card_model';

@Injectable({
  providedIn: 'root'
})
export class HttpCardService {
  routeApi = 'http://localhost:3000/cards';
  constructor(private http: HttpClient) { }

  getCards(): Promise<any>{
    return this.http.get(this.routeApi).toPromise();
  }

  postCard(data: CardModel) {
    return this.http.post(this.routeApi, data).toPromise();
  }

  deleteCard(id: number) {
    let endpoint = '/' + id.toString();
    return this.http.delete(this.routeApi + endpoint).toPromise();
  }

  updateCard(data: CardModel) {
    let endpoint = '/' + data.id.toString();
    return this.http.put(this.routeApi + endpoint, data).toPromise();
  }
}
