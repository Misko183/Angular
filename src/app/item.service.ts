import { Injectable } from '@angular/core';
import { Items, ItemsNo } from './mock-items';
import { Item } from './item';
import { MessageService } from './message.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  getItems(): Observable<Item[]> {
    const items = of(ItemsNo);
    this.messageService.add('ItemService: fetched items');
    return items;
  }

  constructor(private messageService: MessageService) { }
}
