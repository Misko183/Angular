import { Component, OnInit } from '@angular/core';
import { Item  } from '../item'
import { Items } from '../mock-items';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  item = Items;
  selectedItem?: Item;

  constructor() { }

  ngOnInit(): void {
  }
  onSelect(item: Item): void {
    this.selectedItem = item;
  }

}
