import { Component, OnInit } from '@angular/core';
import { Item  } from '../item'
import { Items } from '../mock-items';
import { ItemService } from '../item.service';
import { Observable, of } from 'rxjs';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})

export class ItemsComponent implements OnInit {

  items: Item[] = [];

  selectedItem?: Item;

  constructor(private itemService: ItemService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getItems();
  }  

  onSelect(item: Item): void {
    this.selectedItem = item;
    this.messageService.add('ItemsComponent: Selected item id=${item.id}');
  }

  getItems(): void {
    this.items = this.itemService.getItems();
  }

}
