import { Injectable } from '@angular/core';
import { Items } from './mock-items';
import { Item } from './item';
import { of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  getItems(): Item[] {
    const items = of(Items);
    this.messageService.add('ItemService: fetched items');
    return Items;
  }

  constructor(private messageService: MessageService) { }
}
