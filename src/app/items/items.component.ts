import { Component, Input, OnInit } from '@angular/core';
import { Items, ItemsNo } from '../mock-items';
import { Item } from '../item';
import { ItemService } from '../item.service';
import { Observable, of } from 'rxjs';
import { MessageService } from '../message.service';

@Component({
    selector: 'app-items',
    templateUrl: './items.component.html',
    styleUrls: ['./items.component.css']
  })
  
  export class ItemsComponent implements OnInit {
    
    items = ItemsNo;

    getItems(): void {
      this.itemService.getItems()
          .subscribe(items => this.items = items);
    }
    
    selectedItem?: Item;
    onSelect(item: Item): void {
      this.selectedItem = item;
      this.messageService.add('ItemsComponent: Selected item id=${item.id}');
    }
    constructor(
      private itemService: ItemService,
      private messageService: MessageService) { }
    
    ngOnInit(): void { }
}