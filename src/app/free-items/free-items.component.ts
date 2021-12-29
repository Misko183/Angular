import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { ItemService } from '../item.service';
import { ActivatedRoute } from '@angular/router';
import { ItemsNo } from '../mock-items';
import { Location } from '@angular/common';
import { Items } from '../mock-items';

@Component({
  selector: 'app-free-items',
  templateUrl: './free-items.component.html',
  styleUrls: ['./free-items.component.css']
})
export class FreeItemsComponent implements OnInit {

  freeItems = ItemsNo;
  hero: Hero;
  


  constructor(
    private itemService: ItemService,
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location ) {  }

  ngOnInit(): void {
    this.getItems();
    this.getHero();
  }
  
  getItems(): void {
    this.itemService.getItems()
        .subscribe(items => this.freeItems = items);
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
      
  }

  buyFreeItem(item: Item): void {
    if (this.hero.money >= item.price){
      this.hero.money -=  item.price;
      item.isAvailable = false;
      this.hero.items.push(item);
    }
  }

  goBack(): void {
    this.location.back();
  }
}