import { Component, Input, OnInit } from '@angular/core';
import { Items, ItemsNo } from '../mock-items';
import { Item } from '../item';
import { ItemService } from '../item.service';
import { Observable, of } from 'rxjs';
import { MessageService } from '../message.service';
import { FormControl } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';

@Component({
    selector: 'app-items',
    templateUrl: './items.component.html',
    styleUrls: ['./items.component.css']
  })
  
  export class ItemsComponent implements OnInit {

    items = Items;
  
    selectedItem?: Item;
  
    constructor(private itemService: ItemService, private messageService: MessageService) { }
  
    ngOnInit(): void {
      this.getItems();
    }
  
    onSelect(item: Item): void{
      this.selectedItem = item;
      this.messageService.add(`ItemsComponent: Selected item id=${item.id}`)
    }
  
    getItems(): void {
      this.itemService.getItems()
        .subscribe(items => this.items = items);
    }
  
    add(name: string): void {
      name = name.trim();
      if (!name) { return; }
      this.itemService.addItem({ name } as Item)
        .subscribe(item => {
          this.items.push(item);
      });
    }
  
    delete(item: Item): void {
      this.items = this.items.filter(h => h !== item);
      this.itemService.deleteItem(item.id).subscribe();
    }
  }
